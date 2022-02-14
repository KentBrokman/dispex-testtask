import {clientsApi } from "../../../services/api"
import { LoadingStatus } from "../utils"
import { setClients, setClientsLoadingStatus} from "./actionCreators"


export const fetchClients = (id) => {
    return async (dispatch) => {
        dispatch(setClientsLoadingStatus(LoadingStatus.LOADING))
        const data = await clientsApi.getClients(id)
        dispatch(setClients(data))
        dispatch(setClientsLoadingStatus(LoadingStatus.LOADED))
    }
}

export const addNewClient = (clientData, addressId) => {
    return async (dispatch) => {
        const data = await clientsApi.createClient(clientData)
        await clientsApi.bindClient(data.id, addressId)
        dispatch(fetchClients(addressId))
    }
}

export const deleteClient = (clientId) => {
    return async (dispatch) => {
        const data = await clientsApi.deleteClient(clientId)
        return data
    }
}
