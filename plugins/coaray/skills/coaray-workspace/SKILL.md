---
name: coaray-workspace
description: Open the connected firm's workspace or show its current skills when the user names the firm or asks to choose a skill.
metadata:
  coaray:
    title: CoAray Workspace
    version: 2
    tools:
      - coaray.apps.list
    apps: []
    nativeCapabilities: []
    viewerApplications: []
---

# Open the firm workspace

Use the connected CoAray Skills MCP server's live prompt catalogue to show the firm's current Skills. The bundled skill files are install-time guidance, not proof that a provider Tool is available now. Choose the matching live Skill and only the Tools it reports as available for the current connection.

If the host cannot show MCP prompts, call `coaray.apps.list` with `{}` to present the available application viewer. Prefer the connected plugin over duplicate direct MCP connections. Do not claim the app viewer is a substitute for the live Skills registry.

If authentication is required, use the host's plugin connection controls. Opening a workspace or Skill catalogue does not authorize a record change, a DocuSign draft, or sending an envelope.
