import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsIcon from '@mui/icons-material/Settings';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import { IModulos } from '../../../../services/Intefaces/IAuthenticacion';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import RuleIcon from '@mui/icons-material/Rule';
import BadgeIcon from '@mui/icons-material/Badge';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import GavelIcon from '@mui/icons-material/Gavel';
import PinIcon from '@mui/icons-material/Pin';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export interface IconsProps {
    nombre: string;
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
export const icons: IconsProps[] = [
    {
        nombre: 'Bienvenido',
        icon: AccountBoxIcon
    },
    {
        nombre: 'Tablero',
        icon: DashboardIcon
    },
    {
        nombre: 'Configuracion',
        icon: SettingsIcon
    },
    {
        nombre: 'Usuario',
        icon: PeopleAltIcon
    },
    {
        nombre: 'Reportes',
        icon: PaymentsIcon
    },
    {
        nombre: 'Web comisiones',
        icon: WebAssetIcon
    },
    {
        nombre: 'Sistema',
        icon: WysiwygIcon
    },
    {
        nombre: 'Red',
        icon: AccountTreeIcon
    },
    {
        nombre: 'Acceso',
        icon: SupervisedUserCircleIcon
    },
    {
        nombre: 'Roles',
        icon: RuleIcon
    },
    {
        nombre: 'Lista asesores',
        icon: BadgeIcon
    },
    {
        nombre: 'Asesor',
        icon: AssignmentIndIcon
    },
    {
        nombre: 'Modulos',
        icon: ViewModuleIcon
    },
    {
        nombre: 'Confg. empresas',
        icon: BusinessIcon
    },
    {
        nombre: 'Complejos',
        icon: WorkIcon
    },
    {
        nombre: 'Ciclos',
        icon: EventRepeatIcon
    },
    {
        icon: PriceCheckIcon,
        nombre: 'Comision'
    },
    {
        nombre: 'Tipo contrato',
        icon: GavelIcon
    },
    {
        nombre: 'Niveles',
        icon: PinIcon
    },
    {
        nombre: 'Proyeccion venta',
        icon: QueryStatsIcon
    }
]
export const menus: IModulos[] = [
    {
        modulo: '',
        subModulo: [
            {
                url: '/',
                nombre: '',
                funcionalidad: ['']
            },
        ]
    },
    {
        modulo: 'Tablero',
        subModulo: [
            {
                url: '/tablero',
                nombre: 'Tablero',
                funcionalidad: ['list']
            },
        ]
    },
    {
        modulo: 'Configuracion',
        subModulo: [
            {
                url: '/configuracion/usuarios',
                nombre: 'Usuario',
                funcionalidad: ['list', 'create', 'show', 'edit', 'update', 'delete']
            },
            {
                url: '/configuracion/accesos',
                nombre: 'Acceso',
                funcionalidad: ['list']
            },
            {
                url: '/configuracion/roles',
                nombre: 'Roles',
                funcionalidad: ['list', 'create', 'show', 'edit', 'update', 'delete']
            }
        ]
    },
    {
        modulo: 'Sistema',
        subModulo: [
            {
                url: '/sistema/trabajos-recurrentes',
                nombre: 'Sistema',
                funcionalidad: []
            },
            {
                url: '/sistema/lista-modulos',
                nombre: 'Modulos',
                funcionalidad: []
            },
        ]

    },
    {
        modulo: 'Comisiones',
        subModulo: [
            {
                url: '/comisiones/consolidados',
                nombre: 'Comisiones',
                funcionalidad: ['list']
            },
            {
                url: '/comisiones/reports',
                nombre: 'Reportes',
                funcionalidad: ['list', 'create', 'show', 'edit', 'update', 'delete']
            }
        ]
    },
    {
        modulo: 'Red',
        subModulo: [
            {
                url: '/red/reporte-red',
                nombre: 'Red',
                funcionalidad: ['list']
            }
        ]
    },
    {
        modulo: 'Asesores',
        subModulo: [
            {
                url: '/asesores/lista-asesores',
                nombre: 'Lista asesores',
                funcionalidad: ['list']
            },
        ]
    },
    {
        modulo: 'General',
        subModulo: [
            {
                url: '/general/empresas',
                nombre: 'Confg. Empresas',
                funcionalidad: ['list']
            },
            {
                url: '/general/complejos',
                nombre: 'Complejos',
                funcionalidad: ['list']
            },
            {
                url: '/general/ciclos',
                nombre: 'Ciclos',
                funcionalidad: ['list']
            },
            {
                url: '/general/comision',
                nombre: 'Comision',
                funcionalidad: ['list']
            },
            {
                url: '/general/tipo-contrato',
                nombre: 'Tipo contrato',
                funcionalidad: ['list']
            },
            {
                url: '/general/niveles',
                nombre: 'Niveles',
                funcionalidad: ['list']
            }
        ]
    },
]
