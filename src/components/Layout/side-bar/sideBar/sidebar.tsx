import { Link, Outlet } from "react-router-dom";
import { IAuthentication, IModulos, ISubModulos } from "../../../../services/Intefaces/IAuthenticacion";

import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import NavBar from "../navBar/navBar";
import Container from "@mui/system/Container";
import { icons, menus } from "./menu";
import { useEffect, useState } from "react";
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { useTimer } from "react-timer-hook";
import { useDispatch, useSelector } from "react-redux";
import { SelectToken, setToken } from "../../../../Reducers/Slices/LoginSlice";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

interface SideBarProps {
    authentication: IAuthentication,
    onRefresh: () => void;
}

const SideBar = ({ authentication, onRefresh }: SideBarProps) => {
    const [activateModulos, setActivateModulos] = useState<IModulos[]>([]);
    const [time, setTime] = useState(60);

    const token = useSelector(SelectToken);

    const dispatch = useDispatch();
    const updateToken = (token: boolean) => {
        dispatch(
            setToken({
                token: token
            })
        )
    }
    const logout = () => {
        updateToken(false);
    }

    const tiempo = new Date();
    tiempo.setSeconds(tiempo.getSeconds() + time);
    //SESSION
    const sesionActividad = useTimer({ expiryTimestamp: tiempo, onExpire: () => { logout() } });
    const {
        seconds,
        minutes,
        hours,
        days,
        isRunning,
        restart
    } = sesionActividad;
    //REFRESH TOKEN

    const autoControl = () => {
        const tiempotranscurridoToken = (refreshToken.minutes * 60) + refreshToken.seconds;
        const tiempotranscurridoSession = (minutes * 60) + seconds;

        if (tiempotranscurridoToken == 5) {
            console.log(tiempotranscurridoSession, tiempotranscurridoToken);
            if (tiempotranscurridoSession > tiempotranscurridoToken) {
                console.log('actualizar token');
                refreshToken.restart(tiempo)
            }

        }
    }
    const refreshToken = useTimer({ expiryTimestamp: tiempo, onExpire: () => { } });

    const openedMixin = (theme: Theme): CSSObject => ({
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
    });

    const closedMixin = (theme: Theme): CSSObject => ({
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: `calc(${theme.spacing(7)} + 1px)`,
        [theme.breakpoints.up('sm')]: {
            width: `calc(${theme.spacing(8)} + 1px)`,
        },
    });

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    }));

    const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            width: drawerWidth,
            flexShrink: 0,
            whiteSpace: 'nowrap',
            boxSizing: 'border-box',
            ...(open && {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            }),
            ...(!open && {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            }),
        }),
    );

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const obtenerIcon = (subModulos: ISubModulos) => {
        {
            const val = icons.find((x, i) => x.nombre == subModulos.nombre)
            if (val != undefined) {
                return (<val.icon />)
            } else {
                return (<></>)
            }
        }
    }

    autoControl();

    return (
        <div onClick={() => {
            restart(tiempo);
            //console.log(`${("0" + refreshToken.minutes).slice(-2)}:${("0" + refreshToken.seconds).slice(-2)}`)
        }}>
            <Box sx={{
                display: 'flex', bgcolor: 'grey.200', overflow: 'auto',
                height: '100vh',
            }} >
                <CssBaseline />

                <NavBar
                    onOpenSideBar={handleDrawerOpen}
                    open={open}
                    nombreCompleto={authentication.nombre}
                    tiempoTrascurrido={`${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}`}
                />
                <Drawer variant="permanent" open={open}>
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <List>
                        {authentication.modulo.map((modulo, i) => (
                            <List
                                key={i}
                                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                                component="nav"
                                aria-labelledby="nested-list-subheader"
                                subheader={
                                    open ? (<ListSubheader component="div" id="nested-list-subheader">
                                        {modulo.modulo}
                                    </ListSubheader>) : (<Divider />)
                                }
                            >
                                {
                                    modulo.subModulo.map((subModulo, index) => (
                                        <ListItemButton key={index} component={Link} to={modulo.subModulo[index].url}>
                                            <ListItemIcon>
                                                {
                                                    obtenerIcon(subModulo)
                                                }
                                            </ListItemIcon>
                                            <ListItemText primary={subModulo.nombre} />
                                        </ListItemButton>
                                    ))
                                }
                            </List>
                        ))}
                    </List>
                </Drawer>
                <Container
                    sx={{ mt: 4, mb: 4, overflow: 'auto' }}
                    maxWidth={false}
                >
                    <DrawerHeader />
                    <Outlet context={authentication} />
                </Container>
            </Box>
        </div>
    )

}

export default SideBar;
