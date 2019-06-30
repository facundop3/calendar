import React from "react";

const Button = (props: {
  message: string;
  ariaLabel: string;
  type?: string;
}) => {
  const { ariaLabel, message, type = "primary" } = props;
  return <button aria-label={ariaLabel}>{message}</button>;
};

export default Button;
