import React from 'react'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, CardMedia, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material';
interface asesorFormAdicionalesProps {
    onSubmit: () => void;
}
const FormAdicionales = () => {
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
                                Datos adicionales
                            </Typography>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <Grid container spacing={2}>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        alt={"alt"}
                                        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
                                        image="http://localhost:8000/images/profile/41623.jpg"
                                        title="foto perfil"
                                    />
                                </Grid>
                                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            p: 1,
                                            m: 0,
                                        }}
                                    >
                                        <Button
                                            color='success'
                                            size='small'
                                            variant="outlined"
                                            startIcon={<AddAPhotoIcon />}
                                        >
                                            Cargar imagen
                                        </Button>
                                        <Button
                                            color='error'
                                            size='small'
                                            variant="outlined"
                                            startIcon={<DeleteIcon />}
                                        >
                                            Eliminar imagen
                                        </Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Comentarios"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Tiene cuenta"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Cuenta banco"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <TextField
                                fullWidth
                                size='small'
                                label="Codigo bancario"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                            <FormControlLabel control={<Checkbox defaultChecked />} label="Dado de baja" />
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </>
    )
}

export default FormAdicionales
