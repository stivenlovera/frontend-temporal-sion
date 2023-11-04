import { Grid, Typography } from '@mui/material'
import React from 'react'
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs'
import PaymentsIcon from '@mui/icons-material/Payments';

const index = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Cbreadcrumbs icon={<PaymentsIcon />} nombreRoute='Consolidados' nombresRoutes={[]} route='#' routes={[]} />
        <Typography variant="subtitle1" component="h6" style={{ fontWeight: 'bold' }} sx={{ pl: 1, pr: 1 }}>
          Reporte Consolidados
        </Typography>
        <Typography variant="body2" gutterBottom sx={{ pl: 1, pr: 1 }}  >
         --
        </Typography>
      </Grid>

    </Grid>
  )
}

export default index
