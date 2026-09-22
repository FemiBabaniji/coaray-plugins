---
name: ircc-browser-packet-completion
description: Use the host browser tools to fill an IRCC draft from a saved Coaray client packet.
metadata:
  coaray:
    title: IRCC Browser Packet Completion
    version: 1
    tools:
      - tenant_schema.ircc.packet.list
      - tenant_schema.ircc.packet.read
    apps: []
    nativeCapabilities:
      - browser_use
    viewerApplications:
      - ircc-browser-packet
---

# Complete an IRCC draft

Coaray MCP provides client records, saved answers, and the current packet-completion Skill. Use the host's connected browser tools and reasoning to complete the user's IRCC draft.

Read `tenant_schema.ircc.packet.read` with the selected Prospect, application, and packet IDs. Use top-level forms and `completionSkill`. If IDs are missing, use `tenant_schema.ircc.packet.list` to select the exact saved packet.

Use the current `browserHandoff` returned by packet reads or prospect-scoped packet lists. Ask the user to sign in to the correct IRCC account in the selected browser and confirm in this conversation. Wait for explicit confirmation for that session before inspecting or filling. The user handles credentials and security challenges.

Once confirmed, keep the user's selected existing IRCC tab and verify the application and person. Inspect live questions, controls, and options; match answers by meaning and person. Reinspect after navigation, compare filled values with readback, and verify the portal saved the draft. Recheck packet freshness before each section and refresh changed answers.

MCP supplies data; the host owns browser execution and progress. Authentication, signatures, declarations, payment, CAPTCHA, and final submission remain with the user.
