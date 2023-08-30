import { config } from '../../config';

export const getEditedIconClasses = (originalRawClasses: string) => {
  const regExp = new RegExp(
    `\\.${config.fontName}-(.*):before { content: (.*); }`,
    'g',
  );

  let res;
  while ((res = regExp.exec(originalRawClasses)) !== null) {
    const key = res[1];
    const code = res[2];

    originalRawClasses = originalRawClasses.replace(
      code,
      `$${config.fontName}-${key}`,
    );
  }

  return originalRawClasses;
};
