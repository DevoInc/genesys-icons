export interface Icon {
  title: string;
  common: string;
  module: string;
}

export interface ParsedElement {
  tag: string;
  attrs: { [key: string]: string };
  children: ParsedElement[];
  text: string;
}
