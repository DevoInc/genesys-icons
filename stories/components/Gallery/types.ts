export class SingleItem {
  name: [string, string];
  match?: string;
  tags: string[];

  constructor(name, match, tags) {
    this.name = name;
    this.match = match;
    this.tags = tags;
  }
}
