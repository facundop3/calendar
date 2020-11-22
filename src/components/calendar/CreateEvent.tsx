import React from 'react'
import { Button } from '../elements'
import { useCalendar } from '../../state/context'
import { TOGGLE_MODAL } from '../../state/actions'

const CreateEvent = () => {
  const [{ selectedDayMini, currentDayIndex }, dispatch] = useCalendar()
  const createEventHandler = (ev: React.FormEvent) => {
    ev.preventDefault()
    dispatch({
      type: TOGGLE_MODAL,
      payload: {
        timestamp: selectedDayMini,
        showModal: true,
        currentDayIndex,
      },
    })
  }

  return (
    <form onSubmit={createEventHandler}>
      <Button type="submit" ariaLabel="Create new event">
        + Create
      </Button>
    </form>
  )
}

export default CreateEvent
