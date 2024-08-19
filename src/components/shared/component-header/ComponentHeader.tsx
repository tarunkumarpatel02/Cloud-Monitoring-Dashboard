import { FC } from "react";
import "./ComponentHeader.css";

interface IProps {
  headerName: string;
  jsxToShow?: any;
}

const ComponentHeader: FC<IProps> = ({ headerName, jsxToShow }) => {
  return (
    <div className="component-header">
      <h4>{headerName}</h4>
      {jsxToShow && <div>{jsxToShow}</div>}
    </div>
  );
};
export default ComponentHeader;
