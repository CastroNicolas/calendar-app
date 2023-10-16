import { addHours } from "date-fns"
import { useCalendarStore } from "../../hooks/useCalendarStore"
import { useUiStore } from "../../hooks/useUiStore"

export const FadAddNew = () => {

    const {openDateModal} = useUiStore()
    const {setActiveEvent} =  useCalendarStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: "",
            notes: '',
            start: new Date(),
            end: addHours(new Date(), 2 ),
            bgColor: '#fafafa',
            user:{
                _id: '1233',
                name: 'Nicolas'
            }
        })
        openDateModal()
    }
    

    return (
        <button
        className="btn btn-primary fab"
        onClick={handleClickNew}
        >
            <i className="fas fa-plus" />
        </button>

    )
}
