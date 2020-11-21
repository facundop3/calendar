import React from 'react'
import DayBox from './DayBox'
import { Day } from '../../interfaces'
const uuidv1 = require('uuid/v1')

const Week = (props: { days: Day[]; mini: boolean }) => {
  const { days, mini } = props

  return (
    <div style={{ display: 'flex' }}>
      {days.map((day: Day, index: number) => {
        return <DayBox day={day} key={uuidv1()} index={index} mini={mini} />
      })}
    </div>
  )
}

export default Week
