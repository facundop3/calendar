import React from "react";
import "./styles/Button.css";
const Button = (props: {
  children: any;
  ariaLabel: string;
  type?: string;
  style?: {};
  onClick?: (ev: any) => any;
}) => {
  const {
    ariaLabel,
    children,
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
      {children}
    </button>
  );
};

export default Button;
