
import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dispex.org/api/vtest'
})

export const adressesApi = {
    async getStreets() {
        const {data} = await instance.get(`/Request/streets`) 
        return data
    },
    async getHouses(id) {
        const {data} = await instance.get(`/Request/houses/${id}`) 
        return data
    },
    async getFlats(id) {
        const {data} = await instance.get(`/Request/house_flats/${id}`) 
        return data
    }
}

export const clientsApi = {
    async getClients(id) {
        const {data} = await instance.get(`/HousingStock/clients?addressId=${id}`) 
        return data
    },
    async createClient(clientData) {
        const {data} = await instance.post(`/HousingStock/client`, clientData)
        return data
    },
    async bindClient(clientId, adressId) {
        await instance.put(`/HousingStock/bind_client`, {
            addressId: adressId,
            clientId: clientId
        })
    },
    async deleteClient(clientId) {
        const {data} = await instance.delete(`/HousingStock/bind_client/${clientId}`)
        return data
    },
}

