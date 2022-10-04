import { IconBaseProps } from '@devoinc/genesys-icons';
export class SingleItem {
  name: [string, string];
  match?: string;
  tags: string[];
  component: React.FC<IconBaseProps>;

  constructor(name, match, tags, component) {
    this.name = name;
    this.match = match;
    this.tags = tags;
    this.component = component;
  }
}
