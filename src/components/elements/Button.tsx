import React, { MouseEvent } from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  width: ${({ size }: { size?: number }) => size}px;
  height: ${({ size }: { size?: number }) => size}px;
  border-radius: ${({ size }: { size?: number }) => (size ? '50%' : '')};
  margin: 0.25em;
  background-color: ${({ bg }: any) => bg} !important;
`

const Button = (props: {
  children: any
  type?: 'button' | 'reset' | 'submit' | undefined
  ariaLabel: string
  className?: string
  style?: {}
  size?: number
  transparent?: boolean
  bg?: string
  onClick?: (ev: MouseEvent) => void
}) => {
  const {
    ariaLabel,
    children,
    className = 'is-link',
    onClick,
    size,
    type = 'button', // This is important: if you are seeing this error in React JS when you try to submit the form by pressing enter, make sure all your buttons in the form that do not submit the form have a type="button".
    ...otherProps
  } = props
  const stopPropagation =
    type === 'button'
      ? (ev: MouseEvent) => {
          ev.stopPropagation()
          onClick && onClick(ev)
        }
      : undefined
  return (
    <Btn
      bg={props.bg}
      aria-label={ariaLabel}
      className={`button ${className}`}
      onClick={stopPropagation}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  )
}

export default Button
