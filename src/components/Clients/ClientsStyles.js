import { makeStyles } from '@mui/styles';



export const useClientsStyles = makeStyles((theme) => ({
    paper: {
        // height: '100%',
        width: 'calc(100%)',

        marginBottom: '40px',
        // padding: '20px',
        
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridGap: '20px'
    },
    loaderWrapper: {
        width: '100%',

        display: 'flex',
        justifyContent: 'center'
    }
}))