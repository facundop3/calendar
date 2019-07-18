import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: ${({ size }: { size?: number }) => size}px;
  height: ${({ size }: { size?: number }) => size}px;
  border-radius: ${({ size }: { size?: number }) => (size ? "50%" : "")};
  margin: 0.25em;
`;

const Button = (props: {
  children: any;
  ariaLabel: string;
  type?: string;
  style?: {};
  size?: number;
  onClick?: (ev: any) => any;
}) => {
  const {
    ariaLabel,
    children,
    type = "is-link",
    onClick,
    size,
    ...otherProps
  } = props;
  const stopPropagation = (ev: any) => {
    ev.stopPropagation();
    onClick && onClick(ev);
  };
  return (
    <Btn
      aria-label={ariaLabel}
      className={`button ${type}`}
      onClick={stopPropagation}
      {...otherProps}
    >
      {children}
    </Btn>
  );
};

export default Button;
