import { useDispatch, useSelector } from "react-redux"
import calendarApi from "../api/calendarApi"
import { onChecking, onClearErrorMessage, onLogOut, onLogin } from "../store/auth/authSlice"


export const useAuthStore = () => {

    const { status, user, errorMesagge } = useSelector( state => state.auth )
    const dispatch = useDispatch()

    const startLogin = async({ email, password }) => {

        dispatch(onChecking())

        try {
            const {data} = await calendarApi.post('/auth', {email, password} )
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid }))
            console.log(data)
        } catch (error) {
            dispatch(onLogOut('Credenciales Incorrectas'))

            setTimeout(() => {
                dispatch(onClearErrorMessage())    
            }, 10);
        }
    }

    const startRegister = async({ name, email, password }) => {

        dispatch(onChecking())

        try {
            const {data} = await calendarApi.post('/auth/new', { name, email, password } )
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid  }))
            console.log(data)
        } catch (error) {
            console.log(error)
            dispatch(onLogOut(error.response.data.message ))

            setTimeout(() => {
                dispatch(onClearErrorMessage())    
            }, 10);
        }
    }

    const checkOutToken = async() => {
        const token = localStorage.getItem('token')
        if (!token) return dispatch(onLogOut())

        try {
            const {data} = await calendarApi.get( '/auth/renew' )
            localStorage.setItem('token', data.token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(onLogin({ name: data.name, uid: data.uid  }))
        } catch (error) {
            localStorage.clear()
            dispatch(onLogOut())
        }

    }

    const startLogOut = () => {
        localStorage.clear()
        dispatch(onLogOut())
    }

    return{
        // Propiedades
        errorMesagge,
        status,
        user,

        // Metodos
        startLogin,
        startLogOut,
        startRegister,
        checkOutToken,
        
    }
}