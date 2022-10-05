import decamelize from 'decamelize';
import { SingleItem } from '.';

export const copyClassName = (icon: SingleItem) =>
  navigator.clipboard.writeText(
    `${icon.name[0].toLowerCase()}-${decamelize(icon.name[1], {
      separator: '_',
    })}`
  );
