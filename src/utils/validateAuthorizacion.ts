import { IAuthentication, IModulos } from "../services/Intefaces/IAuthenticacion";
import { menus, icons } from "../components/Layout/side-bar/sideBar/menu";
export const validateMenu = (authentication: IAuthentication) => {
    let nuevoMenu: IModulos[] = [];
    menus.forEach((menu, i) => {
        authentication.modulo.forEach((permitido, index) => {
            if (menu.modulo.toLocaleLowerCase() == permitido.modulo) {
                return nuevoMenu.push(menu);
            }
        })
    });
    return nuevoMenu;
}
