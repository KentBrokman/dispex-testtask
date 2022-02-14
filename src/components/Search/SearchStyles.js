import { makeStyles } from '@mui/styles';



export const useSearchStyles = makeStyles(() => ({
    paper: {
        padding: '30px',
        margin: '40px 0',

        // width: 'calc(100% - 60px)'
    },
    wrapper: {
        display: 'flex',
        // margin: '60px'
    },
    streetsAutocomplete: {
        marginRight: '-1px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderTopRightRadius: '0',
            borderBottomRightRadius: '0'
        },
    },
    housesAutocomplete: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '0'
        }
        // borderLeft: '0',
        // borderRadius: '0',
    },
    flatsAutocomplete: {
        marginLeft: '-1px',
        '& .MuiOutlinedInput-notchedOutline': {
            borderTopLeftRadius: '0',
            borderBottomLeftRadius: '0'
        } 
    }
}))