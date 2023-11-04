import React, { useEffect, useState } from 'react'
import { Transition } from '../../configuracion/roles/components/modal-roles';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { IDataTableRed } from '../../../interfaces/IDataTableRed';
import { FiltroIDataTableRedProps } from '..';

export interface ModalData {
  tipo: string;
  rows: IDataTableRed[];
  filtro: FiltroIDataTableRedProps;
  PDF: string;
}
interface ModalRedReporteProps {
  open: boolean;
  onClose: () => void;
  onSubmit: () => void;
  data: ModalData;
}

const ModalRedReporte = ({
  data,
  onClose,
  onSubmit,
  open
}: ModalRedReporteProps) => {

  const handleClose = () => {
    onClose();
  };
  useEffect(() => {
    console.log(data)
  }, [data.PDF])

  return (
    <React.Fragment>
      <Dialog
        TransitionComponent={Transition}
        fullWidth={true}
        maxWidth={'lg'}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle variant='h6' >Preview Reporte</DialogTitle>
        <DialogContent>
          <object
            data={data.PDF}

            onLoadCapture={(x) => console.log('capture evento de carga')}
            type="application/pdf"
            width={'100%'}
            height={'600px'}
          >
          </object>
        </DialogContent>
        <DialogActions>
          <Button
            size='small'
            variant='contained'
            color='error'
            onClick={handleClose}
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}

export default ModalRedReporte
