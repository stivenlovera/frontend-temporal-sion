import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React, { useEffect, useState } from 'react'
import { ISubModulos, IModulos } from '../../../../../services/Intefaces/IAuthenticacion';
import { IconsProps, icons } from '../menu';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { Divider, ListSubheader, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { ISubModule } from '../../../../../interfaces/module';
interface SubmenuProps {
    modulo: IModulos;
    onExpandModule(expand: boolean): void;
    activeMenu: boolean
}
const Submenu = ({ modulo, onExpandModule, activeMenu }: SubmenuProps) => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = (modulo: IModulos) => {
        setOpenMenu(!openMenu);
        onExpandModule(!openMenu);
    };
    const obtenerIcon = (subModule: ISubModule) => {
        {
            const val = icons.find((x, i) => x.nombre == subModule.moduloNombre)
            if (val != undefined) {
                return (<val.icon />)
            } else {
                return (<></>)
            }
        }
    }
    useEffect(() => {
        console.log('Cambio de menu ', activeMenu)
    }, [])

    return (
        <>
            {
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        !activeMenu ? (<ListSubheader component="div" id="nested-list-subheader">
                            {modulo.modulo}
                        </ListSubheader>) : (<Divider variant="inset" component="li" />)
                    }
                >
                    {/* <ListItemButton>
                        <ListItemIcon>
                            {
                                obtenerIcon(modulo)
                            }
                        </ListItemIcon>
                        <ListItemText primary="Sent mail" />
                    </ListItemButton> */}
                </List>
            }
            {/* {
                modulo.subModulo.length == 1 ? (
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to={modulo.subModulo[0].url}>
                            <ListItemIcon>
                                <ListItemIcon>
                                    {
                                        obtenerIcon(modulo)
                                    }
                                </ListItemIcon>
                            </ListItemIcon>
                            <ListItemText primary={modulo.modulo} sx={{ opacity: true ? 1 : 0 }} />
                        </ListItemButton>
                    </ListItem>
                ) : (
                    <ListItem disablePadding sx={{ display: 'block' }}>
                        <ListItemButton onClick={() => { handleClick(modulo) }}>
                            <ListItemIcon>
                                {
                                    obtenerIcon(modulo)
                                }
                            </ListItemIcon>
                            <ListItemText primary={modulo.modulo} sx={{ opacity: true ? 1 : 0 }} />
                            {openMenu ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={activeMenu ? activeMenu : openMenu} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {
                                    modulo.subModulo.map((funcionalidad, i) => {
                                        return (
                                            <ListItemButton key={i} sx={{ pl: 4 }} component={Link} to={funcionalidad.url} onClick={() => {  }}>
                                                <ListItemIcon>

                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={
                                                        <Typography
                                                            variant="body2"
                                                            style={{ color: '#141414' }}>
                                                            {funcionalidad.nombre}
                                                        </Typography>
                                                    }
                                                />
                                            </ListItemButton>
                                        )
                                    })
                                }
                            </List>
                        </Collapse>
                    </ListItem >
                )
            } */}
        </>
    )
}

export default Submenu;
