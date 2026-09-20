---
name: coaray-viewer
description: Open Coaray applications or saved packets when the user asks to open the viewer or a named application.
---

# Open Coaray applications and packets

For applications, first call coaray.apps.list with {} and present its native
application chooser. Open a named app with coaray.apps.open using a key from
that catalogue. Each application opens its own homepage. Opening selects the
interface; execute its workflow only at the user's request with its current
instructions and tenant, client, person and application scope.

For saved packets, or an older connection without application tools:

Use the connected CoAray plugin's tenant_schema.ircc.packet.list tool with
input {"limit":25} and a fresh idempotencyKey. Prefer the plugin tool when
both plugin and direct MCP versions are available. Reuse the key only when
retrying the same call after an uncertain response.

Present the interactive viewer returned by the tool so the user can select
a saved packet. Keep the tool's native UI result intact. If this host cannot
render the viewer, report that limitation and show a returned viewer link
only when the tool supplies one. Report an empty list accurately.

If the tool is unavailable or requests authentication, direct the user to
connect the CoAray plugin through the host's connection controls. This is a
hosted plugin action; do not start a development server or invent a local URL.

Opening the viewer only authorizes reading saved packets. Create, refresh,
or fill a packet only when the user separately requests that action.
