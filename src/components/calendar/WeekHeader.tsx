import React from 'react'
import styled from 'styled-components'
const uuidv1 = require('uuid/v1')

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

const WeekHeader = (props: { mini?: boolean }) => {
  const { mini } = props
  const weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <Container>
      {weekDays.map((day: string) => (
        <div key={uuidv1()}>{mini ? day[0] : day}</div>
      ))}
    </Container>
  )
}

export default WeekHeader
