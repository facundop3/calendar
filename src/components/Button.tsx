import React from "react";
import "./styles/Button.css";
const Button = (props: {
  message: string;
  ariaLabel: string;
  type?: string;
}) => {
  const { ariaLabel, message, type = "primary" } = props;
  return (
    <button aria-label={ariaLabel} className={`btn btn--${type}`}>
      {message}
    </button>
  );
};

export default Button;
