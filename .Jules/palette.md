## 2026-11-06 - Context-Specific ARIA Labels in Lists
**Learning:** Screen reader users lose context when repeating items in a list (like Audio Versions) have identical button labels (e.g. 'Edit', 'Remove'). Relying only on visual proximity or `title` tooltips is insufficient.
**Action:** Always add context-specific `aria-label`s (e.g., `aria-label="Edit ${item.name}"`) to action buttons within repeating list items to ensure clear, independent identification for screen readers.
