import { Navbar } from "../components/Navbar"
import { localizer } from "../../helpers/calendarLocalizer"
import { CalendarEventBox } from "../components/CalendarEventBox"
import { CalendarModal } from "../components/CalendarModal"
import { Calendar } from 'react-big-calendar'
import { useState } from "react"
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { FadAddNew } from "../components/FadAddNew"
import { FadDelete } from "../components/FadDelete"
import 'react-big-calendar/lib/css/react-big-calendar.css'

export const CalendarPage = () => {


  const {openDateModal} = useUiStore()
  const { events, setActiveEvent } = useCalendarStore()

  const [lastView, setLastView] = useState( localStorage.getItem('lastView' || 'week' ) );

  const eventStyleGetter = (event, start, end, isSelected) => {
    console.log({event, start, end, isSelected})

    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'White' 
    }
    return {
      style
    }
  }

  const onDoblueClick = (event) => {
    openDateModal()
  }
  const onSelect = (event) => {
    setActiveEvent(event)
  }
  const onviewChanged = (event) => {
    localStorage.setItem('lastView', event )
    setLastView(event)
  }


  return (

    <>

        <Navbar/>
            
        <Calendar
        localizer={localizer}
        events={events}
        view={ lastView || 'month' }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px )' }}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox
        }}
        onDoubleClickEvent={onDoblueClick}
        onSelectEvent={onSelect}
        onView={onviewChanged}
        />

      <CalendarModal/>
      <FadAddNew/>
      <FadDelete/>

      
    </>

)
}
