import React from "react";

const Card = ({ classesCard="", iconTitle="", title, tools="", body="", footer="", classesFooter="" }) => {
  return (
    <div className={`card ${classesCard}`}>
      <div className="card-header">
        <h3 className="card-title">
          <i className={`${iconTitle} mr-1`} />
          {title}
        </h3>
        <div className="card-tools">{tools}</div>
      </div>
      <div className="card-body">{body}</div>
      <div className={`card-footer ${classesFooter}`}>{footer}</div>
    </div>
  );
};

export default Card;
