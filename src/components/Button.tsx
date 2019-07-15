import React from "react";
import "./styles/Button.css";
const Button = (props: {
  message: string;
  ariaLabel: string;
  type?: string;
  style?: {};
  onClick?: (ev: any) => any;
}) => {
  const {
    ariaLabel,
    message,
    type = "primary",
    onClick,
    ...otherProps
  } = props;
  const stopPropagation = (ev: any) => {
    ev.stopPropagation();
    onClick && onClick(ev);
  };
  return (
    <button
      aria-label={ariaLabel}
      className={`btn btn--${type}`}
      onClick={stopPropagation}
      {...otherProps}
    >
      {message}
    </button>
  );
};

export default Button;
