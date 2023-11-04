import React from 'react'
import { useParams } from 'react-router-dom';
import PaymentsIcon from '@mui/icons-material/Payments';
import { Cbreadcrumbs } from '../../../components/cbreadcrumbs/cbreadcrumbs';
import { Grid } from '@mui/material';
const Reports = () => {
  const { id } = useParams<{ id?: string }>();
  console.log('dato inicial')
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Cbreadcrumbs icon={<PaymentsIcon />} nombreRoute='Consolidados' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
    </Grid>
  )
}

export default Reports
