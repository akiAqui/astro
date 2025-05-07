// sidebar.js


// sidebar.js
import { readdirSync, existsSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const contentRoot = path.resolve(__dirname, 'content/docs');


const config = [
    {
        dir: 'art',
        label: 'アート',
        pinned:[
            'spring-1d.mdx',
            'ekiteki.mdx',
            'point_and_line.mdx',
            'mud.mdx',            
            'misc.mdx',
            'networking.mdx',
            'audio-sync-system.mdx'
            
        ]
    },
    {
        dir: 'three',
        label: 'THREE.js',
        pinned: [
            'material.mdx',
            'texture.mdx',
            'texture-env-mapping.mdx',            
            'texture-advanced.mdx',
            'texture-gen.mdx',
            'light.mdx',
            'gsap.mdx',
        ]
    },
    {
        dir: 'glsl',
        label: 'GLSL',
        pinned: []
    },
    {
        dir: 'math',
        label: '数学',
        pinned: []
    },
    {
        dir:'hydrodynamics',
        label:'流体力学',
        pinned:[]
    },
    {
        dir:'algorithm',
        label:'アルゴリズム',
        pinned:[]
    },
    {
        dir:'math',
        label:'数学',
        pinned:[]
    },
    {
        dir:'accoustics',
        label:'音響',
        pinned:[]
    },
    {
        dir:'html',
        label:'HTML',
        pinned:[]
    },
    {
        dir:'tsjs',
        label:'TypeScript',
        pinned:[]
    },
    {
        dir:'network',
        label:'ネットワーク',
        pinned:[]
    },
    {
        dir:'tech',
        label:'その他技術',
        pinned:[]
    },
    {
        dir:'dev',
        label:'開発',
        pinned:[]
    },
    {
        dir:'reports',
        label:'その他',
        pinned:[]
    },
    {
        dir:'emacs',
        label:'emacs',
        pinned:[]
    },
    {
        dir:'mdx',
        label:'mdx',
        pinned:[]
    },

];

function extractTitle(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8');
    const match = content.match(/title:\s*(.+)/);
    return match ? match[1].trim().replace(/^["']|["']$/g, '') : path.basename(filePath, '.mdx');
  } catch {
    return path.basename(filePath, '.mdx');
  }
}
const sidebar = config.map(({ dir, label, pinned }) => {
  const dirPath = path.join(contentRoot, dir);
  if (!existsSync(dirPath)) {
    console.warn(`Skipping missing directory: ${dirPath}`);
    return [];
  }
  const allFiles = readdirSync(dirPath)
    .filter(f => f.endsWith('.mdx') && !f.endsWith('~'));
  const pinnedSet = new Set(pinned);
  const pinnedItems = pinned.map(f => {
    const filePath = path.join(dirPath, f);
    return {
      label: extractTitle(filePath),
      link: `/${dir}/${path.basename(f, '.mdx')}`
    };
  });
  const restItems = allFiles
    .filter(f => !pinnedSet.has(f))
    .sort()
    .map(f => {
      const filePath = path.join(dirPath, f);
      return {
        label: extractTitle(filePath),
        link: `/${dir}/${path.basename(f, '.mdx')}`
      };
    });
  return {
    label,
    items: [...pinnedItems, ...restItems]
  };
});
export default sidebar;
