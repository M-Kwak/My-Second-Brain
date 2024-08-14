import { ReactNode } from "react";
import "./Container.css";

type direction = 'row' | 'column';
interface ContainerSpecs {
  children: ReactNode,
  direction: direction,
  id?: string,
  className?: string;
}

function Container(props: ContainerSpecs): React.JSX.Element {
  const { children, direction, id, className } = props;

  return (
    <div
      id={id}
      className={`container ${className}`}
      style={{ flexFlow: `${direction} wrap` }}
    >
      {children}
    </div>
  );
}

export default Container;