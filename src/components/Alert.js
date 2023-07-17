import React from "react";

const Alert = (props) => {
  return props.alert && <div className="error">{props.alert.msg}</div>;
};

export default Alert;
