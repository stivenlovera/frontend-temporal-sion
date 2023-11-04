import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, CardMedia, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
interface asesorFormAdicionalesProps {
    onSubmit: () => void;
}
const FormDatos = () => {
    return (
        <>
            <Paper style={{ position: 'relative' }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 0,
                    }}
                >
                    <Grid container spacing={2}>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                                Datos
                            </Typography>
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Codigo"
                                value={'00000'}
                                disabled
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Fecha registro"
                                value={'09/09/2023'}
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nombre Completo"

                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nro identidad"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nit"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Telefono movil"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Telefono fijo"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Telefono oficina"
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Dirrecion"
                                multiline
                                minRows={2}
                                maxRows={2}
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Pais"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Ciudad"
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Correo electronico"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Fecha nacimiento"
                            />
                        </Grid>
                        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Nivel"
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Patrocinador"
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default FormDatos
