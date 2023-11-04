import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import 'dayjs/locale/es';
import dayjs from 'dayjs'

dayjs.locale("es");

const IndexInformacionUsuario = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} lg={12} md={12}>
                {/*  <Cbreadcrumbs icon={<WorkIcon />} nombreRoute='Lista complejo' nombresRoutes={[]} route='#' routes={[]} /> */}
            </Grid>
            <Grid item xs={12} lg={12} md={12}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            {`${dayjs().format('dddd, DD')} de ${dayjs().format('MMMM')} de ${dayjs().format('YYYY')}`}
                        </Typography>
                        <Typography variant="h5" component="div">
                            Bienvenido,
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Cargo:
                        </Typography>
                        <Typography variant="body2">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere tenetur quos culpa quo quaerat hic quae voluptas dolore sit rerum animi itaque eos ducimus repellendus, in consequatur fugit, praesentium quia?
                        </Typography>
                    </CardContent>
                    {/*  <CardActions>
                        <Button size="small"></Button>
                    </CardActions> */}
                </Card>
            </Grid>
        </Grid>

    )
}

export default IndexInformacionUsuario
