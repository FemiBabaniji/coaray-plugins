---
name: coaray-workspace
description: Open the connected firm's workspace or show its current skills when the user names the firm or asks to choose a skill.
metadata:
  coaray:
    title: CoAray Workspace
    version: 3
    tools:
      - coaray.skills.list
      - coaray.skills.read
      - coaray.apps.list
    apps: []
    nativeCapabilities: []
    viewerApplications: []
---

# Open the firm workspace

Call `coaray.skills.list` with `{}` to show the firm's live Skill catalogue. For the selected skill, call `coaray.skills.read` with its exact `skillKey` before choosing any operation. The bundled skill files are install-time guidance, not proof that a provider Tool is available now. Use only Tools reported as available for this connection.

If the live Skills server is unavailable, say so; do not treat bundled skills or the application viewer as a live grant. For an application viewer request, call `coaray.apps.list` with `{}`. Prefer the connected plugin over duplicate direct MCP connections.

If authentication is required, use the host's plugin connection controls. Opening a workspace or Skill catalogue does not authorize a record change, a DocuSign draft, or sending an envelope.
