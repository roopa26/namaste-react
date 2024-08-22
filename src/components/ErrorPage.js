import { useRouteError } from "react-router-dom";

const ErrorPage = () =>{
    const err = useRouteError();
    return(<div>OOPS !
        <p> we ran out to error</p>
        <div>{err.status} : {err.statusText}</div>
    </div>)
}

export default ErrorPage;