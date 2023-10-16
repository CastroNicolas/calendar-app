import { useCalendarStore } from "../../hooks/useCalendarStore"
import { useUiStore } from "../../hooks/useUiStore"

export const FadDelete = () => {

    
    const {startDeletingEvent, hasEventSelected} =  useCalendarStore()
    const {isDateModalOpen} = useUiStore()

    const handleDelete = () => {
       startDeletingEvent( )
    }
    

    return (
        <>
        {
           isDateModalOpen == false && (

                <button
                className="btn btn-danger fab-danger"
                onClick={handleDelete}
                style={{
                    display: hasEventSelected ? "" : 'none'
                    
                }}
                >
                    <i className="fas fa-trash-alt"/>
                
                </button>
           ) 
        }

        </>
    )
}
