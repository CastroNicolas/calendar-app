import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdtaEvent } from "../store/calendar/calendarSlice"

export const useCalendarStore = () => {
 
    const { events, activeEvent } = useSelector( state => state.calendar )
    const dispatch = useDispatch()

    const setActiveEvent = (calendatEvent) => {
        dispatch(onSetActiveEvent(calendatEvent))
    }

    const startSavingEvent = async(calendatEvent) => {

        if (calendatEvent._id) {
            dispatch(onUpdtaEvent({ ...calendatEvent }))
        } else {
            dispatch(onAddNewEvent({ ...calendatEvent, _id: new Date().getTime() }))
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
