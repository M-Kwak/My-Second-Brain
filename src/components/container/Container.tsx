import { ReactNode } from "react";
import "./Container.scss";
import { direction } from "../../types/types";

interface ContainerSpecs {
  children: ReactNode,
  direction: direction,
  id?: string,
  className?: string;
  onClick?: () => void;
}

function Container(props: ContainerSpecs): React.JSX.Element {
  const { children, direction, id, className, onClick } = props;

  return (
    <div
      id={id}
      className={`container ${className}`}
      style={{ flexFlow: `${direction} wrap` }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Container;