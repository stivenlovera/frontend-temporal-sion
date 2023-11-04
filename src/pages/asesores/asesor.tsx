import { Box, Button, CardMedia, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography } from '@mui/material'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import FormAdicionales from './components/form-adicionales';
import SaveIcon from '@mui/icons-material/Save';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {
    useNavigate,
} from 'react-router-dom';
import FormDatos from './components/form-datos';
import { ButtonBack } from '../../components/buttons/buttons';

const Asesor = () => {
    const navigate = useNavigate();
    return (
        <Grid container spacing={1}>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Cbreadcrumbs icon={<AssignmentIndIcon />} nombreRoute='asesores' nombresRoutes={['asesor']} route='/asesores/lista-asesores' routes={['#']} />
            </Grid>
            <Grid item xl={4} lg={4} md={4} sm={12} xs={12}>
                <FormAdicionales />
            </Grid>
            <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
                <FormDatos />
            </Grid>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <Paper style={{ position: 'relative' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'end',
                            p: 1,
                            m: 0,
                        }}
                    >
                        <Button
                            color='success'
                            size='small'
                            variant="contained"
                            sx={{ m: 1 }}
                            startIcon={<SaveIcon />}
                            onClick={() => { console.log('enviar data') }}
                        >
                            Registrar
                        </Button>
                        <ButtonBack
                        />
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Asesor
