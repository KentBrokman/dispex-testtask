import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { useSearchStyles } from './SearchStyles';
import { useDispatch } from 'react-redux';
import { fetchFlats, fetchHouses } from '../../store/ducks/adresses/thunks';
import { useSelector } from 'react-redux';
import { selectFlats, selectHouses } from '../../store/ducks/adresses/selectors';
import { fetchClients } from '../../store/ducks/clients/thunks';
import { setClients, setClientsLoadingStatus } from '../../store/ducks/clients/actionCreators';
import { LoadingStatus } from '../../store/ducks/utils';
import { setFullAdress } from '../../store/ducks/adresses/actionCreators';


export const Search = ({ streets }) => {
    //styles 
    const searchStyles = useSearchStyles()
    //
    // utils
    const dispatch = useDispatch()
    //
    // global state
    const houses = useSelector(selectHouses)
    const flats = useSelector(selectFlats)
    //
    // local state
    const [streetValue, setStreetValue] = useState(null)
    const [houseValue, setHouseValue] = useState(null)
    const [flatValue, setFlatValue] = useState(null)
    //
    // lifr cicle methods
    useEffect(() => {
        if (streetValue) {
            dispatch(fetchHouses(streetValue.id))
        }
        setHouseValue(null)
        setFlatValue(null)
    }, [streetValue, dispatch])
    useEffect(() => {
        if (houseValue) {
            dispatch(fetchFlats(houseValue.id))
        }
        setFlatValue(null)
    }, [houseValue, dispatch])
    useEffect(() => {
        console.log(flatValue)
        if (flatValue) {
            dispatch(fetchClients(flatValue.id))
            dispatch(setFullAdress({
                street: streetValue,
                house: houseValue,
                flat: flatValue
            }))
        } else {
            dispatch(setClients([]))
            dispatch(setClientsLoadingStatus(LoadingStatus.NEVER))
        }
    }, [flatValue, dispatch])
    //
    return (
        <Paper elevation={2} classes={{ root: searchStyles.paper }}>
            <div className={searchStyles.wrapper}>

                <div>
                    <Autocomplete
                        className={searchStyles.streetsAutocomplete}
                        value={streetValue}
                        onChange={(event, newValue) => {
                            setStreetValue(newValue);
                        }}
                        disablePortal
                        id="streets"
                        options={streets}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Улица" />}
                    />
                </div>
                <div>
                    <Autocomplete
                        className={searchStyles.housesAutocomplete}
                        value={houseValue}
                        onChange={(event, newValue) => {
                            setHouseValue(newValue);
                        }}
                        disabled={!(houses.length > 0 && streetValue)}
                        disablePortal
                        id="houses"
                        options={houses}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Дом" />}
                    />
                </div>
                <div>
                    <Autocomplete
                        className={searchStyles.flatsAutocomplete}
                        value={flatValue}
                        onChange={(event, newValue) => {
                            setFlatValue(newValue);
                        }}
                        disabled={!(flats.length > 0 && houseValue)}
                        disablePortal
                        id="flats"
                        options={flats}
                        getOptionLabel={(option) => option.name}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Квартира" />}
                    />
                </div>

            </div>
        </Paper>
    )
}