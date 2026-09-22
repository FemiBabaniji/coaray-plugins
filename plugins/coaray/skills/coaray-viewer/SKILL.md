---
name: coaray-viewer
description: Open Coaray applications or saved packets when the user asks to open the viewer or a named application.
metadata:
  coaray:
    title: CoAray Viewer
    version: 1
    tools:
      - coaray.apps.list
      - coaray.apps.open
    apps: []
    nativeCapabilities: []
    viewerApplications: []
---

# Open Coaray applications

Call `coaray.apps.list` with `{}` and present its native application chooser. A named application must use `coaray.apps.open` with an application key returned for the current connection. The chooser opens that app's own homepage. If the choice is ambiguous, show the chooser.

Opening an application selects its interface; it does not authorize its workflow or a record change. Follow the selected application's current instructions only when the user requests that workflow, preserving tenant, client, person, and application scope. Packet completion instructions come from the selected packet's current `completionSkill`.

Prefer the connected plugin tools when duplicate direct MCP tools are present. If the host cannot render the interface, report that limitation and list the returned applications. Use a viewer link only when a tool returns one. If authentication is required, use the host's connection controls. Never invent a local viewer URL.
