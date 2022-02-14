import { makeStyles } from '@mui/styles';


export const useClientStyles = makeStyles(() => ({
    wrapper: {
        '&.MuiCard-root': {
            // maxHeight: '250px',

            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        } 
    },
    cardContent: {
        '&.MuiCardContent-root': {
            display: 'flex'
        }	
    },
    personIcon: {
        '&.MuiSvgIcon-root': {
            height: '40px', 
            width: '40px', 
            marginRight: '6px',
            color: 'rgb(66,133,244)'
        }
    },
    commonIcon: {
        '&.MuiSvgIcon-root': {
            marginRight: '4px'
        }
    },
    nameInfo: {
        fontSize: '18px',
        fontWeight: 600
    },
    phoneInfo: {
        fontSize: '18px',
        color: 'rgb(46,125,50)',

        display: 'flex'
    },
    mailInfo: {
        display: 'flex'
    },
    buttons: {
        '&.MuiButtonGroup-root': {
            width: '100%',
        }
    },
    button: {
        '&.MuiButton-root': {
            width: '50%'
        }
    }

}))