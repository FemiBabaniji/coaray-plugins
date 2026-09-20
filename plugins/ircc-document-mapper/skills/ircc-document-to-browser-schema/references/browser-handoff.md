# Browser handoff

Read this reference only after the semantic intake bundle validates and the user has
separately authorized browser work.

1. Match the authenticated page's origin, person, page identity, and live
   signature before using a compiled page.
2. Require `compiledFromSemanticRevision` to equal the bundle's current
   semantic revision.
3. Treat `semantic_only` and `observed` mappings as read/planning inputs. A live
   write requires a `live_verified` mapping and verification of the current
   controls.
4. Resolve only secure values needed for the current page. Do not place them in
   logs, Markdown, screenshots, or receipts.
5. Write one bounded field or repeating row at a time. After a save action,
   read the portal result and compare the persisted value before issuing a
   receipt.
6. Stop on page-signature drift, identity ambiguity, portal rejection, stale
   semantic data, or any blocker.

Browser compilation never authorizes submission, declarations, signatures,
payments, or CAPTCHA handling.

The semantic catalogue understands all seven sections, questions, conditions,
roles, normalized record fields, and repeating-row actions. Live selectors are
not assumed to be timeless. A browser agent must observe the current controls,
verify the page signature, and use an immutable `live_verified` map before a
write. A receipt is valid only when expected and reread values have identical
stable digests and it names that exact map digest.
