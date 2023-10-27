import { localizer } from "../../helpers/calendarLocalizer"
import { Navbar } from "../components/Navbar"
import { CalendarEventBox } from "../components/CalendarEventBox"
import { CalendarModal } from "../components/CalendarModal"
import { FadAddNew } from "../components/FadAddNew"
import { FadDelete } from "../components/FadDelete"
import { Calendar } from 'react-big-calendar'
import { useEffect, useState } from "react"
import { useUiStore } from "../../hooks/useUiStore"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { useAuthStore } from "../../hooks/useAuthStore"

export const CalendarPage = () => {


  const { user } = useAuthStore() 
  const {openDateModal} = useUiStore()
  const { events, setActiveEvent, startLoadingEvent } = useCalendarStore()

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week' );

  const eventStyleGetter = (event, start, end, isSelected) => {

    const isMyEvent = ( user.uid === event.user._id ) || ( user.uid === event.user.uid )    

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
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

  useEffect(() => {
    startLoadingEvent()
  }, []);


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
