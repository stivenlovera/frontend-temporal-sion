import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import { useEffect, useState } from 'react';
import { useTimer } from 'react-timer-hook';
import { SessionContext, useSessionContext } from '../../../../../context/contextSessionTime';
import { AutoRefresh } from './autoRefresh';

interface TimeSessionProps {
    tiempoTrascurrido: string;
}
const TimeSession = ({ tiempoTrascurrido }: TimeSessionProps) => {

    return (
        <Tooltip title="Session terminara en..." arrow>
            <Box
                sx={{
                    padding: 1,
                    backgroundColor: 'primary.dark',
                    '&:hover': {
                        backgroundColor: 'primary.main',
                        opacity: [0.9, 0.8, 0.7],
                    },
                }}
            >
                {tiempoTrascurrido}

            </Box>
        </Tooltip>
    )
}

export default TimeSession
