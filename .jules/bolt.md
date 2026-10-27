## 2024-05-19 - React Memoization and UseProgressive optimizations
**Learning:** Adding memoization to components that are rendered in large arrays (like rows and cards) can significantly improve performance.
**Action:** When wrapping components in React.memo that use generics, take care to typecast them back as generics in their JSX declaration.
