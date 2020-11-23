import React, { MouseEvent } from 'react'
import styled from 'styled-components'

interface Props {
  children: any
  type?: 'button' | 'reset' | 'submit' | undefined
  btnType?:
    | 'primary'
    | 'link'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'light'
  ariaLabel: string
  style?: {}
  size?: number
  transparent?: boolean
  bg?: string
  onClick?: (ev: MouseEvent) => void
}

const mapTypeToColor = {
  primary: '#00d1b2',
  link: '#3273dc',
  info: '#209cee',
  success: '#23d160',
  warning: '#ffdd57',
  danger: '#ff3860',
  light: '#f5f5f5',
}

const Btn = styled.button`
  margin: 0.25em;
  border-color: #dbdbdb;
  border-width: 1px;
  cursor: pointer;
  justify-content: center;
  text-align: center;
  white-space: nowrap;
  padding: 0.5em;
  border-radius: 4px;
  font-weight: bold;
  border: 0;
  ${({
    size,
    btnType,
  }: {
    size?: number
    btnType?:
      | 'primary'
      | 'link'
      | 'info'
      | 'success'
      | 'warning'
      | 'danger'
      | 'light'
  }) => {
    return `
    background-color: ${btnType ? mapTypeToColor[btnType] : 'transparent'};
    color: ${btnType === 'light' ? '#000' : '#fff'};
    ${
      size &&
      `width: ${size}px;
      height: ${size}px;
      border-radius: ${size ? '50%' : ''};`
    }
    `
  }}
`

const Button: React.FC<Props> = (props) => {
  const {
    ariaLabel,
    children,
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
      size={size}
      aria-label={ariaLabel}
      onClick={stopPropagation}
      type={type}
      {...otherProps}
    >
      {children}
    </Btn>
  )
}

export default Button
