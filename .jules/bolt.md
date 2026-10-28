## 2024-05-18 - Discover Page Render Optimizaton
**Learning:** `MediaCard` and `PosterCard` components in `web/src/features/discover` can cause unnecessary re-renders in discover rows and browse grids because they are used extensively within list mapping without memoization.
**Action:** Use `React.memo` to wrap standard pure UI components like `PosterCard` and `MediaCard` when used within large lists or carousels to prevent re-rendering standard components.
