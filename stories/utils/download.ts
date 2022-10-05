import decamelize from 'decamelize';
import { SingleItem } from '.';

export const downloadIcon = (icon: SingleItem) => {
  const svgData = document.querySelector(`.svg-${icon.name[1]} svg`)?.outerHTML;
  const svgBlob = svgData
    ? new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    : undefined;
  if (svgBlob) {
    const svgUrl = URL.createObjectURL(svgBlob);
    const anchor = document.createElement('a');
    anchor.href = svgUrl;
    anchor.download = `${decamelize(icon.name[1], { separator: '_' })}.svg`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }
};
