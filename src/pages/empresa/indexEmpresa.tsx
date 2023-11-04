import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { Cbreadcrumbs } from '../../components/cbreadcrumbs/cbreadcrumbs'
import BusinessIcon from '@mui/icons-material/Business';
import { useListEmpresa } from './hook/useListEmpresa';
import { IDataTableEmpresa } from '../../interfaces/IDataTableEmpresa';
import { DataTable } from '../../components/dataTable/datatable';
import { CurrencyAcciones } from '../../components/dataTable/components/cuztom-column-actions';

const IndexEmpresa = () => {
  const [dataTable, setdataTable] = useState<IDataTableEmpresa[]>([])
  const {
    columns,
    tableColumnExtensions,
    selection,
    setSelection,
    setSorting,
    sorting
  } = useListEmpresa();

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} lg={12} md={12}>
        <Cbreadcrumbs icon={<BusinessIcon />} nombreRoute='Lista empresa' nombresRoutes={[]} route='#' routes={[]} />
      </Grid>
      <Grid item xs={12} lg={12} md={12}>
        <DataTable
          columns={columns}
          loading={false}
          onSorting={setSorting}
          rows={dataTable}
          sorting={sorting}
          tableColumnExtensions={tableColumnExtensions}
          titulo={'Lista empresa'}
          onSelecion={setSelection}
          selection={selection}
          nuevoBtn={false}
        >
          <CurrencyAcciones
            onEditar={(row) => { row as IDataTableEmpresa; console.log(row) }}
            onEliminar={() => { console.log('eliminar') }}
            column={['stelefonofijo']}
          />
        </DataTable>
      </Grid>
    </Grid>
  )
}

export default IndexEmpresa
