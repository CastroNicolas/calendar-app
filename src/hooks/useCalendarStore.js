import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdtaEvent } from "../store/calendar/calendarSlice"
import calendarApi from "../api/calendarApi"

export const useCalendarStore = () => {
 
    const { events, activeEvent } = useSelector( state => state.calendar )
    const { user } = useSelector( state => state.auth )

    const dispatch = useDispatch()

    const setActiveEvent = (calendatEvent) => {
        dispatch(onSetActiveEvent(calendatEvent))
    }
onDeleteEvent
    const startSavingEvent = async(calendatEvent) => {

        if (calendatEvent._id) {
            dispatch(onUpdtaEvent({ ...calendatEvent }))
        } else {
            const { data } = await calendarApi.post( '/events', calendatEvent ) 
            dispatch(onAddNewEvent({ ...calendatEvent, id: data.evento.id, user}))
        }
    }

    const startDeletingEvent = () => {
        dispatch(onDeleteEvent())
    }


    return{
        activeEvent,
        events,
        hasEventSelected: !!activeEvent,
    

        setActiveEvent,
        startSavingEvent,
        startDeletingEvent
    }

}
