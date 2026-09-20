# Coaray for ChatGPT and Codex

Use your firm's approved workflows and connected tools without leaving your
conversation.

## Install

Add the marketplace from a terminal:

```bash
codex plugin marketplace add FemiBabaniji/coaray-plugins
```

Restart the ChatGPT desktop app, open **Plugins**, select **Coaray**, and
install **Coaray**. In Codex CLI, run `/plugins` after adding the marketplace.

## What happens when you sign in

Sign in with your work account and choose a firm you are authorized to access.
Coaray then makes that firm's enabled workflows and tools available to you.
Your firm's permissions, review rules, and connected-system access still
apply.

## For administrators

This public package is only the authenticated entry point to Coaray. It does
not contain client data, credentials, client-specific service addresses, or a
fixed catalogue of tools. After sign-in, the Coaray service determines the
capabilities available from the firm's configuration and the user's grant.
The firm's connected systems remain the authoritative source for their data.

## Update

Refresh the marketplace with:

```bash
codex plugin marketplace upgrade coaray
```

Then update or reinstall **Coaray** from the Plugins directory.

## License

The repository is public so Codex can install the plugin. The plugin remains
proprietary and its manifest declares `UNLICENSED`.
