import React from "react";
import "./styles/Button.css";
const Button = (props: {
  message: string;
  ariaLabel: string;
  type?: string;
  style?: {};
  onClick?: () => any;
}) => {
  const { ariaLabel, message, type = "primary", ...otherProps } = props;
  return (
    <button
      aria-label={ariaLabel}
      className={`btn btn--${type}`}
      {...otherProps}
    >
      {message}
    </button>
  );
};

export default Button;
