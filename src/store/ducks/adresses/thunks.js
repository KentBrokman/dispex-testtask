import { adressesApi } from "../../../services/api"
import { setFlats, setHouses, setStreets } from "./actionCreators"


export const fetchStreets = () => {
    return async (dispatch) => {
        const data = await adressesApi.getStreets()
        dispatch(setStreets(data))
    }
}

export const fetchHouses = (id) => {
    return async (dispatch) => {
        const data = await adressesApi.getHouses(id)
        dispatch(setHouses(data))
    }
}

export const fetchFlats = (id) => {
    return async (dispatch) => {
        const data = await adressesApi.getFlats(id)
        dispatch(setFlats(data))

    }
}