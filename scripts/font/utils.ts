import fs from 'fs';

export type InfoData = {
  unicode: string;
  prefix: string;
  className: string;
  encodeedCode: string;
};

/**
 * Get the previous char codes from the info data
 * @param infoCodesPath - The path to the info data
 * @returns The previous char codes
 */
export const getPreviousCharCodes = (
  infoCodesPath: string,
): Record<string, number> => {
  const data = fs.readFileSync(infoCodesPath, 'utf8');
  return JSON.parse(data);
};
