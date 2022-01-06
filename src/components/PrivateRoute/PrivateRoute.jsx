import { Redirect, Route } from "react-router-dom"
import { useUser } from "../../context/UserContext/UserContext"

export default function PrivateRoute({children, ...routeProps}){
    const {user} = useUser()
    return (
        <Route {...routeProps}
            render={({location}) => user.email ?
            (children) : (
            <Redirect to={{ pathname:'/login', state: { from: location }
        }}
        />
        )
        }
        />
    )
}