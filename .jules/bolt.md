# Bolt journal

## 2026-11-22 - Actionable: collapse per-reason backoff count loop into one query

**Learning:** `Service.Actionable` looped over `actionableReasons` calling `Ledger.backoffSummary` per reason — three `SELECT COUNT(*), MIN(updated_at), MAX(detail) ... WHERE primary_reason = ?` round-trips for three reasons, on the Needs-you feed that polls. A single `GROUP BY primary_reason` filtered with `IN (?, ?, ?)` returns the same rows; reassemble in `actionableReasons` order so callers see the same sequence.

**Action:** Replace the loop + `backoffSummary` helper with one `QueryContext` + map, then emit in `actionableReasons` order. Add a test that inserts rows for actionable and non-actionable reasons and asserts count, order, since (oldest), and detail (lexical MAX) match the prior per-reason behavior.