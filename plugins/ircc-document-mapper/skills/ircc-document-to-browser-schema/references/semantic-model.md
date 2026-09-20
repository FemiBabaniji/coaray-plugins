# Semantic intake model

Read this reference while building or revising the semantic intake bundle.
The bundled `intake-bundle-v1.schema.json` is authoritative when prose and the
machine contract differ.

## Data flow

`sources → claims → semantic heads and records → form-map compilation → pages`

The standalone runtime creates this intermediate model from the bundled
catalogue. It does not require or discover a customer's SQL schema, and the
result is not Tenant Canon. A database-backed workflow must submit attributed
claims through the tenant's proposal and acceptance boundary before treating
them as accepted facts.

The browser layer consumes only compiled pages. It does not reinterpret source
documents or select between conflicting claims.

## Identity and provenance

- `sourceKey`, `claimKey`, `personKey`, and `recordKey` are stable within a
  case. Names and array positions are never identities.
- Every mapped claim points to exactly one scalar field or record field.
- Person roles are `principal_applicant`, `spouse`, or `child`; applicability
  comes from the 127 bundled role bindings rather than inference.
- Every semantic value names all supporting claim keys.
- Repeating records retain their identity across recompilation.
- A corrected source creates a new semantic revision. It does not rewrite
  provenance or silently delete the earlier claim.

## Semantic values

Scalar values live in `semanticData.fieldHeads`, uniquely keyed by
`subjectKey + fieldKey`. Repeating values live in `semanticData.records` and
contain typed field values. A head or record revision cannot exceed the bundle's
semantic revision.

Use `storage: secure_ref` in the field-definition snapshot for identifiers that
must not appear inline. Those values use `secureValueRef` and remain resolvable
from the original source only during an authorized browser step.

## Resolution

A later claim supersedes a reviewed head only when its person, field, and record
identity are exact. Otherwise preserve both claims, record a conflict, and block
semantic readiness until a human resolves it.

Timeline records (`address_assignment`, `employment_period`,
`personal_activity`, `education_period`, and `trip`) preserve source precision.
Reversed ranges, overlaps, current periods with end dates, and personal-history
gaps remain explicit validation issues.
