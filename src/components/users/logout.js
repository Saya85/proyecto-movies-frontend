import { useEffect } from "react"
import AuthService from '../../services/auth'

const Logout = () => {

    useEffect(() => {
        AuthService.logout()
            .then(res => console.log('Logout completado'))
    })

    return <h2>logout</h2>
}

export default Logout