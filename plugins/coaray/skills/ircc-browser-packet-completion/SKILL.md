---
name: ircc-browser-packet-completion
description: Use the host browser tools to fill an IRCC draft from a saved Coaray client packet.
---

# Complete an IRCC draft

For IRCC draft completion, use tenant_schema.client.search and tenant_schema.ircc.packet.list only when the selected IDs are missing. Read tenant_schema.ircc.packet.read with prospectId, applicationId and packetId. Follow its current completionSkill (SKILL.md) and use top-level forms; these are the database-backed Module Skills Instructions and saved answers. The viewer is optional. The skill defines session readiness, person scope, readback, draft save and human-only actions. Coaray MCP supplies data; the host owns browser execution. Missing skills or stale packets must be resolved before filling.
