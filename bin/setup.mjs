#!/usr/bin/env node
import { spawnSync } from "node:child_process";
import { accessSync, constants } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";

const args = process.argv.slice(2);
if (args.includes("--help")) {
  console.log("CoAray desktop plugin setup\n\nUsage: coaray-setup [--check]\n\nAdds the public CoAray marketplace and installs the plugin.\nRequires ChatGPT desktop/Codex with plugin support.\n--check verifies host support without changing installed plugins.\nSet COARAY_CODEX_BIN to use a specific Codex executable.\nConnect your invited account inside the desktop plugin after installation.");
  process.exit(0);
}
if (args.some((arg) => arg !== "--check")) {
  console.error("Unknown option. Run coaray-setup --help.");
  process.exit(1);
}
const candidates = process.env.COARAY_CODEX_BIN ? [process.env.COARAY_CODEX_BIN] : [
  ...(process.platform === "darwin" ? ["/Applications", join(homedir(), "Applications")].flatMap((root) =>
    ["Codex.app", "ChatGPT.app"].map((app) => join(root, app, "Contents/Resources/codex"))) : []),
  ...String(process.env.PATH ?? "").split(process.platform === "win32" ? ";" : ":").filter(Boolean)
    .map((root) => join(root, process.platform === "win32" ? "codex.exe" : "codex")),
];
let host;
for (const candidate of candidates) {
  try {
    accessSync(candidate, constants.X_OK);
    const probe = spawnSync(candidate, ["plugin", "--help"], { encoding: "utf8", timeout: 15_000 });
    if (probe.status === 0 && probe.stdout.includes("marketplace")) { host = candidate; break; }
  } catch { /* Continue to the next installed host. */ }
}
if (!host) {
  console.error("CoAray needs a current ChatGPT desktop or Codex installation with plugin support. Install or update your desktop app, then retry. You can set COARAY_CODEX_BIN to its Codex executable.");
  process.exit(1);
}
if (args.includes("--check")) {
  console.log(`Desktop plugin support is available: ${host}`);
  process.exit(0);
}
console.log("Setting up CoAray. Firm access is granted separately when you connect.");
for (const [label, command] of [
  ["Adding marketplace", ["plugin", "marketplace", "add", "https://github.com/FemiBabaniji/coaray-plugins.git", "--json"]],
  ["Refreshing marketplace", ["plugin", "marketplace", "upgrade", "coaray"]],
  ["Installing CoAray", ["plugin", "add", "coaray@coaray", "--json"]],
]) {
  console.log(`${label}…`);
  const result = spawnSync(host, command, {
    encoding: "utf8", timeout: 120_000, maxBuffer: 4 * 1024 * 1024,
    env: { ...process.env, GIT_TERMINAL_PROMPT: "0" },
  });
  if (result.status !== 0) {
    console.error(`${label} failed${result.error?.code === "ETIMEDOUT" ? " (timed out)" : ""}. Check your connection and desktop app version, then retry. If plugins are managed by your organization, ask its administrator to enable CoAray.`);
    process.exit(1);
  }
}
console.log("CoAray is installed. Open the desktop Plugins Directory, select CoAray, then Connect. Sign in with your invited account and review your firm's access. Start a new conversation and ask: Open my firm workspace. If the plugin is not visible, restart your desktop app.");
