import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface DocContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  maxWidth?: number | string;
}

export function DocContainer({ maxWidth = 800, style = {}, ...props }: DocContainerProps) {
  return (
    <div
      {...props}
      style={{ ...style, maxWidth, margin: 'auto', paddingLeft: 20, paddingRight: 20 }}
    />
  );
}
