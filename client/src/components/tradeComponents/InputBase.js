import React from "react";
import bStyles from "../contents/scss/bootstrap.module.scss";

const InputBase = ({ textLabel, disabled, ...props }) => {
  return (
    <>
      <input type="number" className={[bStyles["form-control"]]} {...props} />
      <span className={[bStyles["input-group-text"]]}>{textLabel}</span>
    </>
  );
};

export default InputBase;
