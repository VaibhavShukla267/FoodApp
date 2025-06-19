import { useRouteError } from "react-router-dom"

export const ErrorElement=()=>{
    const error=useRouteError()
    // alert("Please Navigate to Valid Page!!")
    return(
        <div>
            <h1>OOOPS!!!!!</h1>
            <h1>Something Went Wrong</h1>
            <h1>{error.status}:{error.statusText}</h1>
        </div>
    )
}