# CoAray plugin marketplace

The public Codex marketplace for CoAray's private-MCP connector.

## Install

Add the marketplace from a terminal:

```bash
codex plugin marketplace add FemiBabaniji/coaray-plugins
```

Restart the ChatGPT desktop app, open **Plugins**, select **CoAray**, and
install **CoAray**. In Codex CLI, run `/plugins` after adding the marketplace.

The public package contains one universal CoAray OAuth entrypoint. During
installation, the user signs in and selects an organization they are
authorized to access. CoAray then binds that authenticated session to the
organization's custom private MCP. The package contains no tenant URLs,
credentials, customer data, or hard-coded tool catalogue.

## What it provides

After sign-in, ChatGPT or Codex discovers the tools exposed by that client's
private MCP. The private MCP and the authenticated grant determine the tools,
resources, and permissions available to the user.

## Update

Refresh the marketplace with:

```bash
codex plugin marketplace upgrade coaray
```

Then update or reinstall **CoAray** from the Plugins directory.

## License

The repository is public so Codex can install the plugin. The plugin remains
proprietary and its manifest declares `UNLICENSED`.
