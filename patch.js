const fs = require('fs');
const file = 'web/src/features/discover/shared.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'export function MediaCard({ c, ctx, full }: { c: DiscoverCard; ctx: RowCtx; full?: boolean }) {',
  'export const MediaCard = React.memo(function MediaCard({ c, ctx, full }: { c: DiscoverCard; ctx: RowCtx; full?: boolean }) {'
);

content = content.replace(
  '    </PosterCard>\n  );\n}',
  '    </PosterCard>\n  );\n});'
);

if (!content.includes('import React')) {
    content = content.replace('import { useState } from "react";', 'import React, { useState } from "react";');
}

fs.writeFileSync(file, content);
