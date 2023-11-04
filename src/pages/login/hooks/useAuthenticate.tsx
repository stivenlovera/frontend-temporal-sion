import { useState } from "react";
import { IDataTableFuncionario } from "../../../interfaces/IDataTableFuncionario";
import { dataTableFuncionarioService, editFuncionarioService, storeFuncionarioService } from "../../../services/api-guardian/funcionario";
import { AlertaEvento } from "../../../components/alerta-eventos/alerta-evento";
import { useSnackbar } from "notistack";
import { VerificarAuthenticate } from "../../../services/api-guardian/authenticacion";
import { centralizarAuthenticacion, initialStateAuthenticacion } from "../utils/initialStateLogin";
import { ResIVerificarAuthenticacion } from "../../../interfaces/ILogin";
import { NoauthenticacionInitial } from "../../../utils/initialState";
export const useAuthenticate = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [loaderPage, setLoaderPage] = useState(true);
    const [dataTable, setDataTable] = useState<IDataTableFuncionario[]>([]);
    const [openModalFuncionario, setOpenModalFuncionario] = useState(false);
    const [authorizacion, setAuthorizacion] = useState(NoauthenticacionInitial)
    
    const getAuthenticate = async () => {
        const { data } = await VerificarAuthenticate();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            const reestructurado = centralizarAuthenticacion(data.data)
            setAuthorizacion(reestructurado)
            setLoaderPage(false)
        }
    }
    const listaFuncionario = async () => {
        const { data } = await dataTableFuncionarioService();
        AlertaEvento({ data, enqueueSnackbar });
        if (data.status == 1) {
            setDataTable(data.data)
            setLoaderPage(false)
        }
    }

    return {
        authorizacion,
        loaderPage,
        getAuthenticate,
        setDataTable,
        listaFuncionario,
        openModalFuncionario,
        setOpenModalFuncionario
    }
}