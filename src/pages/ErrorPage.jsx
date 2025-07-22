import { NavLink, useRouteError } from "react-router-dom"

export const ErrorPage = () =>{
    const error = useRouteError();

    return(
        <>
            <div>
                <h1>Oops! An error Occurred</h1>
                {error && <p>{error.data}</p>}
                <NavLink to='/'>
                    <button>GO BACK</button>
                </NavLink>
            </div>
        </>
    )
}