---
name: coaray-workspace
description: Open the connected firm's workspace when the user says Open followed by the firm name, or asks to open its workspace or choose a skill.
---

# Open the firm workspace

Call the connected CoAray plugin's procedure.list tool with arguments {}.
Keep its native interactive viewer intact: choose a skill, then enter that
skill's homepage. Prefer the plugin tool when direct MCP is also available.

If unavailable or authentication is required, direct the user to the host's
plugin connection controls. If this host cannot render the viewer, report
that limitation and use a viewer link only when the tool returns one.

Opening reads the published catalogue only. Start or Fill requires the
user's explicit action in the selected skill.
