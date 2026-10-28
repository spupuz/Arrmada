const fs = require('fs');
const file = 'web/src/features/discover/PosterRow.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'export function PosterRow({ title, load, ctx, order, excludeOwned, hideOnError, hideUntilLoaded, seeAll }: {',
  'export const PosterRow = React.memo(function PosterRow({ title, load, ctx, order, excludeOwned, hideOnError, hideUntilLoaded, seeAll }: {'
);

const parts = content.split('export const PosterRow = React.memo(function PosterRow({ title, load, ctx, order, excludeOwned, hideOnError, hideUntilLoaded, seeAll }: {');
if (parts.length > 1) {
  let after = parts[1];
  let lastBrace = after.indexOf('\n}\n\n// SeeAll');
  if (lastBrace !== -1) {
      after = after.substring(0, lastBrace) + '\n});\n\n// SeeAll' + after.substring(lastBrace + 11);
      content = parts[0] + 'export const PosterRow = React.memo(function PosterRow({ title, load, ctx, order, excludeOwned, hideOnError, hideUntilLoaded, seeAll }: {' + after;
  }
}

if (!content.includes('import React')) {
    content = content.replace('import { useCallback, useContext, useEffect, useRef, useState } from "react";', 'import React, { useCallback, useContext, useEffect, useRef, useState } from "react";');
}

fs.writeFileSync(file, content);
