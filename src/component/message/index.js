import { SUCCESS, ERROR } from '../../constants/type'
import { Alert, Stack } from '@mui/material';
import { SUCCESS_MSG, ERROR_MSG } from '../../constants/message'


export const ShowMessage = ({
    type
}) => {
    switch (type) {
        case SUCCESS:
            return (<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="success">{SUCCESS_MSG}</Alert></Stack>)
        case ERROR:
            return (<Stack sx={{ width: '100%' }} spacing={2}><Alert severity="error">{ERROR_MSG}</Alert></Stack>)
        default:
            return null
    }
}