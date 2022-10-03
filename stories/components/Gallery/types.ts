export class SingleItem {
  name: [string, string];
  match?: string;
  tags: string[];
  component: React.ReactNode;

  constructor(name, match, tags, component) {
    this.name = name;
    this.match = match;
    this.tags = tags;
    this.component = component;
  }
}
