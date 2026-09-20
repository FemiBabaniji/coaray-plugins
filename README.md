# CoAray for ChatGPT desktop and Codex

Connect your firm's approved applications and workflows to your conversation.

## Set up on Mac

1. Accept the invitation from your firm using the account it invited.
2. Open [CoAray setup](https://mcp.coaray.com/plugins/coaray) and download the signed Mac setup app.
3. Open **CoAray Setup**, select **Continue**, then install **CoAray** on the desktop plugin page.
4. Select **Connect**, sign in as your invited account, choose your firm, and review the access requested.
5. Start a new conversation and ask **Open my firm workspace**.

The installer supports macOS 14 or later and requires a current ChatGPT desktop/Codex app with plugin support. It adds and refreshes this public marketplace using the host's bundled CLI. It does not collect passwords, accept OAuth grants, or modify firm permissions. Retry setup safely if the connection fails. If installation is managed by your organization, contact its administrator.

## Install with npm (no Mac setup app)

With Node.js 20 or later and a current ChatGPT desktop or Codex installation:

```bash
npx --yes @coaray/plugin-setup@1.0.0
```

This command installs the versioned public npm package; clients do not need an npm or GitHub account. It adds and refreshes the CoAray marketplace and installs the plugin through the host's CLI. It does not download or open the Mac setup app. npm still retrieves the small setup package and the host retrieves the plugin files.

After setup, open **CoAray** in the desktop Plugins Directory, choose **Connect**, and sign in with your invited account. Start a new conversation. If the plugin is not visible, restart the desktop app. OAuth and your firm's permissions are required with either installation route.

To check desktop support without changing installed plugins, append `--check`. Set `COARAY_CODEX_BIN` to an installed Codex executable if it is in a custom location. The npm route is verified on macOS; other desktop platforms still need end-to-end validation. This command does not enable personal ChatGPT web installation.

## Other desktop setup options

With a supported Codex CLI:

```bash
codex plugin marketplace add https://github.com/FemiBabaniji/coaray-plugins.git
codex plugin marketplace upgrade coaray
```

Open the desktop Plugins Directory, select **CoAray**, and install the plugin. Restart the desktop app if the marketplace is not visible. The CLI also supports `codex plugin add coaray@coaray`; complete authentication in your host and start a new conversation afterward.

This marketplace is a desktop distribution channel. It does not make a private plugin available to external personal accounts on ChatGPT web. Available tools depend on the desktop host and plan. Fresh external personal-account verification is pending; the repository alone does not establish that account/surface matrix.

## Private access

This public package contains presentation metadata and generic skills. Firm identity, client records, credentials, invitations and permissions stay in CoAray's authenticated service. Installing the package grants no data access. Sign in with the invited identity; the service checks current membership, enabled email access and consented tools on every request. A new package version cannot expand an existing OAuth grant.

For an expired invitation, ask the firm for a new invitation. For an unexpected account, switch to the invited identity during OAuth. For revoked access, ask the firm administrator. Reinstalling the plugin does not restore removed permissions.

## Updates and rollback

Run the latest setup app, or `codex plugin marketplace upgrade coaray`, then refresh or reinstall CoAray and start a new conversation. Releases use immutable version tags; previous versions remain retrievable. The default marketplace tracks `main`.

To pin a previous release, remove this marketplace source and add it using an existing release tag:

```bash
codex plugin marketplace remove coaray
codex plugin marketplace add https://github.com/FemiBabaniji/coaray-plugins.git --ref v1.2.1
```

Then refresh or reinstall CoAray. This changes package delivery, not your firm's grants. Administrators can roll the default channel back by reverting its release commit; release tags must not be moved.

## License

The repository is public so supported desktop hosts can retrieve the plugin. The plugin remains proprietary (`UNLICENSED`).
