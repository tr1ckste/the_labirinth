'use strict';

const getDir = (pos, angle) => {
  const dx = 30 * Math.cos(angle);
  const dy = 30 * Math.sin(angle);
  const x = pos.x + dx;
  const y = pos.y + dy;
  return { x, y } 
}

const findDistance = (a, b) => {
  const cathetus1 = a.x - b.x;
  const cathetus2 = a.y - b.y;
  return Math.sqrt(cathetus1 * cathetus1 + cathetus2 * cathetus2);
}

const generateRgb = (distance, maxDistance) => {
  const rgb = Math.round(255 - 255 * distance / maxDistance);
  return `rgb(${rgb}, ${rgb}, ${rgb})`;
}

const getHeight = (distance, maxDistance, renderH) => {
  const minH = renderH / 4;
  const dH = renderH - minH;
  const addH = dH - distance / maxDistance * dH;
  return minH + addH;
}
