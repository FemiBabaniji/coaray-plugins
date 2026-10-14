# Coaray Skills for Grok Bot / Cursor

This plugin packages Coaray's authenticated Skills MCP connection with its catalogue logo. Each person signs in to Coaray through OAuth; no credential is included in the package.

The endpoint matches the existing custom `coaray-skills` connection: `https://mcp.coaray.com/api/mcp/skills/mcp`.

## Branding

The Cursor manifest declares `logo: assets/coaray-192.png`. That file is copied from Coaray's canonical `public/icons/coaray-192.png`. The MCP server also advertises this icon, but Grok Bot's authorization card resolves its icon through its plugin catalogue. Changing server metadata alone does not update that card.

Publish/import this directory through the supported Cursor plugin catalogue flow and connect the resulting Coaray plugin in Grok Bot. A local package does not update an already-added custom connector. Catalogue acceptance and a visual check of the installed card are still required.

Only publish this directory's manifest, `mcp.json`, README, and logo. Do not publish the application repository or environment files.

Reference: https://cursor.com/docs/reference/plugins
