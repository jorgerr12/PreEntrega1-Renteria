import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

const Notifications = ({ type, message, description }) => {
    return (
        <Stack sx={{ width: '100%' }} spacing={2}>
            <Alert severity={type}>
                <AlertTitle>{type}</AlertTitle>
                {message} — <strong>{description}!</strong>
            </Alert>

        </Stack>
    )

}

export default Notifications