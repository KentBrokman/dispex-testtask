import { combineReducers } from "redux";
import { adressesReducer } from "./ducks/adresses/reducer";
import { clientsReducer } from "./ducks/clients/reducer";


export const rootReducer = combineReducers({
    adresses: adressesReducer,
    clients: clientsReducer
})