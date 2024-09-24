import { ReactNode } from "react";
import "./Container.scss";
import { application, direction } from "../../types/types";

interface ContainerSpecs {
  children: ReactNode,
  direction: direction,
  id?: string,
  className?: string;
  dataName?: string | application;
  onClick?: () => void;
}

function Container(props: ContainerSpecs): React.JSX.Element {
  const {
    children,
    direction,
    id,
    className,
    dataName,
    onClick
  } = props;

  return (
    <div
      id={id}
      className={`container ${className}`}
      style={{ flexFlow: `${direction} wrap` }}
      onClick={onClick}
      data-name={dataName}
    >
      {children}
    </div>
  );
}

export default Container;