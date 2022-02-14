import { ClientsActionsTypes } from './contracts/actionsTypes'
import {LoadingStatus} from '../utils'


const initialState = {
    clients: [],
    clientsLoadingStatus: LoadingStatus.NEVER
}

export const clientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ClientsActionsTypes.SET_CLIENTS:
            return {
                ...state,
                clients: action.payload
            }
        case ClientsActionsTypes.SET_CLIENTS_LOADING_STATUS:
            return {
                ...state,
                clientsLoadingStatus: action.payload
            }
        default:
            return state
    }
}