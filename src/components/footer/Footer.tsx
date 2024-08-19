import React, { FC } from "react";
import "./Footer.css";

const Footer: FC = () => {
  return (
    <footer className="row footer">
      <div className="col-12">
        <p>&copy; 2024 Cloud Monitoring Dashboard. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
