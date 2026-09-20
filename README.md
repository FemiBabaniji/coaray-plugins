# Coaray Plugins

Public Codex plugin marketplace maintained by Coaray.

## Install

Add the marketplace from a terminal:

```bash
codex plugin marketplace add FemiBabaniji/coaray-plugins
```

Then restart the ChatGPT desktop app, open **Plugins**, select
**Coaray Plugins**, and install the plugin you want. In Codex CLI, run
`/plugins` after adding the marketplace.

## Available plugins

### IRCC Document Mapper

Converts immigration documents into provenance-backed canonical IRCC JSON,
validates people and timelines, compiles browser-ready page mappings, and
prepares guarded browser-agent handoffs.

This plugin does not provide legal advice or submit immigration forms. Review
all extracted information before using it in an application.

## Updating

Refresh all configured marketplaces:

```bash
codex plugin marketplace upgrade
```

Or refresh only this marketplace:

```bash
codex plugin marketplace upgrade coaray
```

## Source and licensing

The marketplace catalog is public so that Codex can install its plugins. Each
plugin declares its own license in its manifest.
