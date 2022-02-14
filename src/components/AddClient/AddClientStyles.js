import { makeStyles } from '@mui/styles';


export const useAddClientStyles = makeStyles(() => ({
    wrapper: {
        width: '100%',
        marginBottom: '10px',

        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    addClientIcon: {
        '&.MuiSvgIcon-root': {
            height: '30px',
            width: '30px'
        }
    }
}))