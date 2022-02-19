import { FC } from "react";
import Card from "Card/Card";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Scan: FC = () => {
  const { state }: any = useLocation();

  return (
    <div className="scan-page-container">
      <div>
        <Link to="/">Go Back</Link>
        <div className="selected-image">
          <Card thumbnail={state.url} title={state.alt} />
        </div>
      </div>
    </div>
  );
};

export default Scan;
