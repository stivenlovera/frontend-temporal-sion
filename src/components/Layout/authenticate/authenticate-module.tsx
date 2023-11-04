import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { IAuthentication } from "../../../services/Intefaces/IAuthenticacion";
interface AuthenticateProps {
    modulo: string,
    subModulo: string[]
}
const AuthenticateModulo = ({ modulo, subModulo }: AuthenticateProps) => {
    const context: IAuthentication = useOutletContext();
    const authorizado = context.modulo.find(x => { return x.modulo == modulo });
    if (authorizado != undefined) {
        //console.log('a pasar', authorizado)
        return <Outlet context={authorizado} />
    } else {
        return <Navigate to="/" />
    }
}

export default AuthenticateModulo
