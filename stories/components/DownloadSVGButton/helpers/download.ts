export const downloadIcon = (iconName: string, fileName: string) => {
  const svgData = document.querySelector(`.svg-${iconName} svg`)?.outerHTML;
  const svgBlob = svgData
    ? new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    : undefined;
  try {
    if (svgBlob) {
      const svgUrl = URL.createObjectURL(svgBlob);
      const anchor = document.createElement('a');
      anchor.href = svgUrl;
      anchor.download = `${fileName}.svg`;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } else {
      throw new Error('The SVG file was not found.');
    }
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('There was an error downloading the SVG icon.', error);
    return false;
  }
  return true;
};
