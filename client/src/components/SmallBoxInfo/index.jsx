import React from "react";

const SmallBoxInfo = ({ bgColor, quantity, title, icon, link = "!#" }) => {
  return (
    <div className={`small-box bg-${bgColor}`}>
      <div className="inner">
        <h3>{quantity}</h3>
        <p>{title}</p>
      </div>
      <div className="icon">
        <i className={icon} />
      </div>
      <a href={link} className="small-box-footer">
        Ver más <i className="fas fa-arrow-circle-right" />
      </a>
    </div>
  );
};

export default SmallBoxInfo;
