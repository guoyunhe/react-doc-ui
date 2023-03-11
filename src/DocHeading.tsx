export interface DocHeadingProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  level?: number;
}

export function DocHeading({ level = 1, children, style, ...props }: DocHeadingProps) {
  let Hx: 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  switch (level) {
    case 2:
      Hx = 'h3';
      break;
    case 3:
      Hx = 'h4';
      break;
    case 4:
      Hx = 'h5';
      break;
    case 5:
      Hx = 'h6';
      break;
    default:
      Hx = 'h2';
  }
  return (
    <Hx {...props} style={{ ...style }}>
      {children}
    </Hx>
  );
}
