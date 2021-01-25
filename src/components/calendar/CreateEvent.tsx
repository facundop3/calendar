import React from 'react'
import { Button } from '../elements'
import { useCalendar } from '../../state/contexts'
import { openModal } from '../../state/actionCreators'

const CreateEvent = () => {
  const [{ selectedDayMini, currentDayIndex }, dispatch] = useCalendar()
  const createEventHandler = (ev: React.FormEvent) => {
    ev.preventDefault()
    dispatch(openModal(selectedDayMini, currentDayIndex))
  }

  return (
    <form onSubmit={createEventHandler}>
      <Button type="submit" ariaLabel="Create new event" btnType="info">
        + Create
      </Button>
    </form>
  )
}

export default CreateEvent
