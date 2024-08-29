import { FC } from "react";
import ComponentHeader from "../shared/component-header/ComponentHeader";

interface IProps {
  headerName: string;
  jsxToShow?: any;
  content: any;
  className?: string;
}

const Card: FC<IProps> = ({
  headerName,
  jsxToShow = undefined,
  content,
  className = "",
}) => {
  return (
    <>
      <ComponentHeader headerName={headerName} jsxToShow={jsxToShow} />
      {content}
    </>
  );
};

export default Card;
