export interface IIcon extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number | number[] | string[];
  color?: string;
  title?: string;
  'data-name'?: string;
  [key: `data-${string}`]: unknown;
}
