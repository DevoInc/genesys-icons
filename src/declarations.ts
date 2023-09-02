import { IconBaseProps } from './IconBase';

export type IconType = (props: IconBaseProps) => JSX.Element;

export interface IconTree {
  tag: string;
  attrs: { [key: string]: string };
  children: IconTree[];
  text: string;
}
