import { ReactNode } from "react";

type direction = 'row' | 'column';

function Container({ children, direction, customStyle }: { children: ReactNode, direction: direction, customStyle?: React.CSSProperties }): React.JSX.Element {
  const defaultStyle: React.CSSProperties = {
    display: 'flex',
    flexFlow: `${direction} wrap`,
    justifyContent: 'center',
    alignItems: 'center',
  };

  const style = customStyle === undefined ? defaultStyle : { ...defaultStyle, ...customStyle};

  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Container;