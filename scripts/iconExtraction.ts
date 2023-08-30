import { config } from '../config';

export type Icon = {
  key: string;
  code: string;
};

export const iconsSort = (a: Icon, b: Icon) => {
  if (a.key > b.key) return 1;
  if (a.key < b.key) return -1;
  else return 0;
};

export const getIconsInfo = (rawText: string) => {
  const regExp = new RegExp(`\\$${config.fontName}-(.*): ["\'](.*)["\'];`, 'g');
  const icons: Icon[] = [];

  // TODO Review icomoon generated icons for avoid this code
  const fixtures: { [key: string]: string } = {
    table: '\\eab8', // Fix table with single_table
    gauge: '\\e877', // Fix gauge with gauge_dashboard_full_fuel
    image: '\\e7e7', // Fix image with picture_image_photo
    line: '\\ea68', // Fix line with graph_line_chart_statistics
  };
  const fixturesList = Object.keys(fixtures);

  let res: RegExpExecArray;
  while ((res = regExp.exec(rawText)) !== null) {
    const code = fixturesList.includes(res[1]) ? fixtures[res[1]] : res[2];
    icons.push({ key: res[1], code });
  }

  return icons.sort(iconsSort);
};
