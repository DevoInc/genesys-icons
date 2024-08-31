export interface Icon {
  title: string;
  common: string;
  module: string;
}

export interface IParsedElement {
  tag: string;
  attrs: { [key: string]: string };
  children: IParsedElement[];
  text: string;
}
