import React from 'react'
import styled from 'styled-components'

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
`
const InputDescription = styled.small`
  color: gray;
`
const Input = (props: {
  label: string
  placeholder?: string
  type: string
  required?: boolean
  value?: string
  setTitle: (newTitle: string) => void
  handleEnter?: (ev: React.KeyboardEvent) => void
}) => {
  const handleInputClick = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement
    target.focus()
  }
  const {
    label,
    placeholder,
    type,
    required,
    value,
    setTitle,
    handleEnter,
  } = props
  const onChange = (ev: React.ChangeEvent) => {
    const target = ev.target as HTMLInputElement
    setTitle(target.value)
  }

  return (
    <InputContainer>
      <InputDescription>{label}</InputDescription>
      <input
        className="input"
        placeholder={placeholder}
        type={type}
        aria-required={required}
        onClick={handleInputClick}
        value={value}
        onChange={onChange}
        onKeyDown={handleEnter}
      />
    </InputContainer>
  )
}

export default Input
