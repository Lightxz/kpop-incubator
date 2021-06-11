import React from "react";
import "./Loading.css";
import Spinner from "react-bootstrap/Spinner";

function Loading(props) {
  return (
    <div className="loadingWrapper">
      <Spinner animation="border" role="status" />
    </div>
  );
}

export default Loading;
