import React from "react";
import "./PageTitle.css";

const PageTitle = (props) => {
  return (
    <div className="container-fluid">
      <div className="page__title">
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default PageTitle;
