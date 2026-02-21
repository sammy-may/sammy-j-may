import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

const WIDTH = 2560;
const HEIGHT = 1440;

const seeded = (seed) => {
  const x = Math.sin(seed * 128.113 + 39.17) * 43758.5453;
  return x - Math.floor(x);
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

const makeRidge = ({
  yBase,
  amplitude,
  frequency,
  phase,
  roughness,
  points,
  color,
  opacity,
}) => {
  const step = WIDTH / points;
  let d = `M 0 ${HEIGHT} L 0 ${yBase}`;

  for (let i = 1; i <= points; i += 1) {
    const x = i * step;
    const wave = Math.sin(i * frequency + phase) * amplitude;
    const noise = (seeded(i * roughness + phase * 17.3) - 0.5) * amplitude * 0.55;
    const y = yBase + wave + noise;
    d += ` L ${x.toFixed(2)} ${y.toFixed(2)}`;
  }

  d += ` L ${WIDTH} ${HEIGHT} Z`;
  return `<path d="${d}" fill="${color}" opacity="${opacity}"/>`;
};

const makeMistBand = ({ cy, rx, ry, color, opacity, blurId }) =>
  `<ellipse cx="${WIDTH / 2}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${color}" opacity="${opacity}" filter="url(#${blurId})"/>`;

const makeTreeShape = (x, y, scale, seed, color, opacity) => {
  const trunkW = 6 * scale;
  const trunkH = 48 * scale;

  const tiers = 4;
  const tierParts = [];

  for (let t = 0; t < tiers; t += 1) {
    const tierTop = y - (112 + t * 36) * scale;
    const tierBottom = tierTop + (40 + t * 10) * scale;
    const halfWidth = (34 + t * 18 + seeded(seed + t * 2.1) * 8) * scale;
    const notch = (seeded(seed + t * 4.7) - 0.5) * 10 * scale;

    const leftA = x - halfWidth;
    const leftB = x - halfWidth * 0.64 + notch;
    const rightB = x + halfWidth * 0.62 - notch;
    const rightA = x + halfWidth;

    tierParts.push(
      `M ${x.toFixed(2)} ${tierTop.toFixed(2)} ` +
        `L ${leftA.toFixed(2)} ${tierBottom.toFixed(2)} ` +
        `L ${leftB.toFixed(2)} ${(tierBottom - 8 * scale).toFixed(2)} ` +
        `L ${rightB.toFixed(2)} ${(tierBottom - 8 * scale).toFixed(2)} ` +
        `L ${rightA.toFixed(2)} ${tierBottom.toFixed(2)} Z`
    );
  }

  const trunk = `<rect x="${(x - trunkW / 2).toFixed(2)}" y="${(y - trunkH).toFixed(2)}" width="${trunkW.toFixed(2)}" height="${trunkH.toFixed(2)}" rx="${(trunkW / 2).toFixed(2)}" fill="#081017" opacity="${(opacity * 0.9).toFixed(3)}"/>`;
  const crown = tierParts.map((d) => `<path d="${d}" fill="${color}" opacity="${opacity}"/>`).join('');

  return `${crown}${trunk}`;
};

const makeTreeLayerSvg = ({ name, treeCount, yMin, yMax, scaleMin, scaleMax, color, opacityMin, opacityMax, blur, horizonFade }) => {
  const trees = [];

  for (let i = 0; i < treeCount; i += 1) {
    const xr = (i + seeded(i * 7.1) * 0.92) / treeCount;
    const x = clamp(xr * WIDTH + (seeded(i * 11.2) - 0.5) * 64, 12, WIDTH - 12);

    const depth = seeded(i * 13.7 + 9.1);
    const y = yMin + depth * (yMax - yMin);
    const scale = scaleMin + depth * (scaleMax - scaleMin);
    const opacity = opacityMin + (1 - depth * 0.7) * (opacityMax - opacityMin);

    trees.push(makeTreeShape(x, y, scale, i * 17.3 + 5.1, color, opacity));
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <filter id="layerBlur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${blur}"/>
    </filter>
    <linearGradient id="fadeMask" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="${horizonFade}%" stop-color="#ffffff" stop-opacity="0.72"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="1"/>
    </linearGradient>
    <mask id="treeMask">
      <rect x="0" y="0" width="${WIDTH}" height="${HEIGHT}" fill="url(#fadeMask)"/>
    </mask>
  </defs>
  <g filter="url(#layerBlur)" mask="url(#treeMask)">
    ${trees.join('\n    ')}
  </g>
</svg>`;

  const path = `/Users/samuelmay/projects/sammy-j-may/public/images/${name}`;
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg);
};

const makePlateSvg = () => {
  const ridges = [
    makeRidge({
      yBase: 570,
      amplitude: 72,
      frequency: 0.24,
      phase: 0.5,
      roughness: 2.1,
      points: 24,
      color: '#14253a',
      opacity: 0.68,
    }),
    makeRidge({
      yBase: 705,
      amplitude: 92,
      frequency: 0.3,
      phase: 1.2,
      roughness: 3.4,
      points: 28,
      color: '#0f1d2e',
      opacity: 0.8,
    }),
    makeRidge({
      yBase: 840,
      amplitude: 102,
      frequency: 0.36,
      phase: 1.9,
      roughness: 4.2,
      points: 32,
      color: '#0a1422',
      opacity: 0.9,
    }),
  ];

  const mist = [
    makeMistBand({ cy: 508, rx: 1180, ry: 206, color: '#a4bed2', opacity: 0.18, blurId: 'blurSoft' }),
    makeMistBand({ cy: 628, rx: 1360, ry: 228, color: '#8ca7bc', opacity: 0.11, blurId: 'blurSoft' }),
    makeMistBand({ cy: 842, rx: 1520, ry: 252, color: '#5f7f94', opacity: 0.1, blurId: 'blurWide' }),
  ];

  const glowEllipses = Array.from({ length: 18 }, (_, i) => {
    const cx = WIDTH * (0.18 + seeded(i * 4.7) * 0.68);
    const cy = HEIGHT * (0.12 + seeded(i * 7.3) * 0.34);
    const rx = 130 + seeded(i * 8.9) * 260;
    const ry = 40 + seeded(i * 9.4) * 110;
    const op = 0.03 + seeded(i * 10.1) * 0.045;
    return `<ellipse cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" rx="${rx.toFixed(1)}" ry="${ry.toFixed(1)}" fill="#a7c2d5" opacity="${op.toFixed(3)}"/>`;
  }).join('\n    ');

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#21354a"/>
      <stop offset="30%" stop-color="#15273e"/>
      <stop offset="58%" stop-color="#0d1a2a"/>
      <stop offset="100%" stop-color="#050b14"/>
    </linearGradient>

    <radialGradient id="moonGlow" cx="34%" cy="19%" r="62%">
      <stop offset="0%" stop-color="#c2d8e4" stop-opacity="0.36"/>
      <stop offset="34%" stop-color="#94b2c7" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="#000" stop-opacity="0"/>
    </radialGradient>

    <filter id="blurSoft" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="24"/>
    </filter>

    <filter id="blurWide" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="36"/>
    </filter>

    <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="2" seed="13" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .1 0"/>
    </filter>
  </defs>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#sky)"/>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#moonGlow)"/>

  <g filter="url(#blurSoft)">
    ${glowEllipses}
  </g>

  ${ridges.join('\n  ')}

  <g>
    ${mist.join('\n    ')}
  </g>

  <rect width="${WIDTH}" height="${HEIGHT}" fill="#0b1521" opacity="0.42" filter="url(#grain)"/>
</svg>`;

  const path = '/Users/samuelmay/projects/sammy-j-may/public/images/majestic-forest-plate.svg';
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, svg);
};

makePlateSvg();
makeTreeLayerSvg({
  name: 'majestic-tree-layer-mid.svg',
  treeCount: 56,
  yMin: 730,
  yMax: 940,
  scaleMin: 1.1,
  scaleMax: 2.0,
  color: '#0e1c1f',
  opacityMin: 0.22,
  opacityMax: 0.44,
  blur: 2.1,
  horizonFade: 42,
});

makeTreeLayerSvg({
  name: 'majestic-tree-layer-near.svg',
  treeCount: 46,
  yMin: 860,
  yMax: 1130,
  scaleMin: 1.6,
  scaleMax: 2.9,
  color: '#081013',
  opacityMin: 0.26,
  opacityMax: 0.58,
  blur: 0.9,
  horizonFade: 34,
});

console.log('Generated forest assets: majestic-forest-plate.svg, majestic-tree-layer-mid.svg, majestic-tree-layer-near.svg');
