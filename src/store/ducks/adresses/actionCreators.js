import {AdressesActionsTypes} from './contracts/actionsTypes'


export const setStreets = (payload) => ({
    type: AdressesActionsTypes.SET_STREETS,
    payload
})

export const setHouses = (payload) => ({
    type: AdressesActionsTypes.SET_HOUSES,
    payload
})

export const setFlats = (payload) => ({
    type: AdressesActionsTypes.SET_FLATS,
    payload
})

export const setFullAdress = (payload) => ({
    type: AdressesActionsTypes.SET_FULL_ADRESS,
    payload
})
