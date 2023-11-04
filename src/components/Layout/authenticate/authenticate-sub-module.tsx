import { Navigate, Outlet, useOutletContext } from "react-router-dom";
import { IAuthentication, IModulos } from "../../../services/Intefaces/IAuthenticacion";
interface AuthenticateSubModuloProps {
    subModulo: string;
}
const AuthenticateSubModulo = ({ subModulo }: AuthenticateSubModuloProps) => {
    const context: IModulos = useOutletContext();
    const authorizado = context.subModulo.find(x => { return x.nombre == subModulo });
    if (authorizado != undefined) {
        //console.log('a pasar', authorizado)
        return <Outlet context={authorizado} />
    } else {
        return <Navigate to="/" />
    }
}

export default AuthenticateSubModulo
