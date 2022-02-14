import {ClientsActionsTypes} from './contracts/actionsTypes'


export const setClients = (payload) => ({
    type: ClientsActionsTypes.SET_CLIENTS,
    payload
})

export const setClientsLoadingStatus = (payload) => ({
    type: ClientsActionsTypes.SET_CLIENTS_LOADING_STATUS,
    payload
})