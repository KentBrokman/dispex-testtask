import { LoadingStatus } from '../utils'
import { AdressesActionsTypes } from './contracts/actionsTypes'


const initialState = {
    streets: [],
    houses: [],
    flats: [],
    fullAdress: null,
    completeAdressLoadingStatus: LoadingStatus.NEVER
}

export const adressesReducer = (state = initialState, action) => {
    switch (action.type) {
        case AdressesActionsTypes.SET_STREETS:
            return {
                ...state,
                streets: action.payload.filter((item) => item.cityId === 1)
            }
        case AdressesActionsTypes.SET_HOUSES:
            return {
                ...state,
                houses: action.payload
            }
        case AdressesActionsTypes.SET_FLATS:
            return {
                ...state,
                flats: action.payload.filter((item) => item.typeName === "Квартира")
            }
        case AdressesActionsTypes.SET_FULL_ADRESS:
            return {
                ...state,
                fullAdress: action.payload
            }
        default:
            return state
    }
}