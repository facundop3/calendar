import React from "react";
// import "./styles/Button.css";
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
    type = "is-link",
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
      className={`button ${type}`}
      onClick={stopPropagation}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
