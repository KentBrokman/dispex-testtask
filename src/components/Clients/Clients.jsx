import { useClientsStyles } from "./ClientsStyles"
import { useSelector } from 'react-redux';
import Paper from '@mui/material/Paper';
import { selectClients, selectClientsLoadingStatus } from '../../store/ducks/clients/selectors'
import { Client } from "./client/Client";
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingStatus } from "../../store/ducks/utils";



export const Clients = () => {
    //styles
    const clientsStyles = useClientsStyles()
    //
    // global state
    const clients = useSelector(selectClients)
    const clientLoadingStatus = useSelector(selectClientsLoadingStatus)
    //
    return (
        <Paper elevation={0} classes={clientLoadingStatus === LoadingStatus.LOADED ?
            { root: clientsStyles.paper } :
            { root: clientsStyles.paperLoading }}
        >
            {clients.length > 0 && clientLoadingStatus === LoadingStatus.LOADED ?
                clients.map((item) => <Client key={item.id} clientData={item} />) :
                clientLoadingStatus === LoadingStatus.LOADING ?
                    <div className={clientsStyles.loaderWrapper}>
                        <CircularProgress />
                    </div> :
                    'Укажите полный адрес.'}
        </Paper>
    )
}