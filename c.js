#!/usr/bin/env node

require('fs').writeFileSync('aftermerge', 'after merge');
console.log('haha, post commit do this');
process.exit(0);
