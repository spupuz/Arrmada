## 2023-11-01 - [UploadTorrentModal Dropzone Accessibility]
**Learning:** Custom div-based file drop zones with `role="button"` and `tabIndex={0}` often lack `aria-label` and `aria-busy` attributes in this codebase, which degrades the experience for screen reader users.
**Action:** Always add descriptive `aria-label` (including dynamic state like the chosen file name) and `aria-busy` attributes to custom interactive elements that act as buttons or inputs.
