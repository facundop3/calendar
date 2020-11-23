import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { handleEnterPress } from '../../utils/a11y'
const uuidv1 = require('uuid/v1')

const SelectedOption = styled.a`
  border-radius: 4px;
  &:hover {
    background-color: #fafafa !important;
  }
  &:focus {
    background-color: #fafafa !important;
  }
  &:focus-within {
    background-color: #fafafa !important;
  }
`

const OptionList = styled.div`
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  background-color: #fafafa;
  display: none;
  position: absolute;
  flex-direction: column;
  background-color: #fafafa;
  top: 3em;
  right: 1em;
  padding: 1em;
  z-index: 3;
  border-radius: 4px;
  &:hover {
    display: flex;
  }
`
const OptionItem = styled.a`
  padding: 0.5em;
  border-radius: 6px;
  &:hover {
    box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  }
`

const SelectContainer = styled.div`
  padding: 1em;
  &:hover div {
    display: flex;
  }
`

interface Props {
  options: string[]
  defaultValue: string
  handleChange: (p: string) => void
}

const Select: React.FC<Props> = (props) => {
  const { defaultValue, options, handleChange } = props
  const [showOptions, setShowOptions] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>(defaultValue)
  const handleSelect = (ev: React.MouseEvent) => {
    const target = ev.target as HTMLElement
    setSelected(target.innerText)
  }

  useEffect(() => {
    handleChange(selected)
  }, [selected, handleChange])

  const handleClick = () => setShowOptions(!showOptions)
  return (
    <SelectContainer
      onClick={() => handleClick()}
      tabIndex={0}
      onKeyPress={(ev) => handleEnterPress(ev, handleClick)}
    >
      <SelectedOption>{selected}</SelectedOption>
      <OptionList>
        {options.map((option) => (
          <OptionItem
            key={uuidv1()}
            onClick={handleSelect}
            onKeyPress={(ev) => handleEnterPress(ev, handleSelect)}
            tabIndex={0}
          >
            {option}
          </OptionItem>
        ))}
      </OptionList>
    </SelectContainer>
  )
}

export default Select
