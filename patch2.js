const fs = require('fs');
const file = 'web/src/features/discover/shared.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'export function MediaCard({ c, ctx, full }: { c: DiscoverCard; ctx: RowCtx; full?: boolean }) {',
  'export const MediaCard = React.memo(function MediaCard({ c, ctx, full }: { c: DiscoverCard; ctx: RowCtx; full?: boolean }) {'
);

const parts = content.split('export const MediaCard = React.memo(function MediaCard({ c, ctx, full }: { c: DiscoverCard; ctx: RowCtx; full?: boolean }) {');

if (parts.length > 1) {
  let after = parts[1];
  let lastBrace = after.lastIndexOf('}');
  if (lastBrace !== -1) {
      after = after.substring(0, lastBrace) + '});\n';
      content = parts[0] + 'export const MediaCard = React.memo(function MediaCard({ c, ctx, full }: { c: DiscoverCard; ctx: RowCtx; full?: boolean }) {' + after;
  }
}


if (!content.includes('import React')) {
    content = content.replace('import { useState } from "react";', 'import React, { useState } from "react";');
}

fs.writeFileSync(file, content);
