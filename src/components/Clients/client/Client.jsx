import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useClientStyles } from './ClientStyles';
import ButtonGroup from '@mui/material/ButtonGroup';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { addNewClient, deleteClient, fetchClients } from '../../../store/ducks/clients/thunks';
import { selectFullAdress } from '../../../store/ducks/adresses/selectors';
import { ProfileCard } from '../../common/PrfofileCard';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const FormSchema = yup.object({
    email: yup.string().max(30, 'Максимальная длина e-mail 30 символов'),
    phone: yup.string().required('Введите номер телефона').max(11, 'Минимальная длина номера 11 символов'),
    name: yup.string().max(40, 'Максимальная длина Ф.И.О. 40 символов')
}).required()


export const Client = ({ clientData }) => {
    // styles
    const clientStyles = useClientStyles()
    //
    // utils
    const dispatch = useDispatch()
    //
    // global state
    const fullAddress = useSelector(selectFullAdress)
    //
    // local state
    const [open, setOpen] = useState(false)
    const { control, handleSubmit } = useForm({
        resolver: yupResolver(FormSchema)
    })
    //
    // handlers 
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    const onSubmit = (data) => {
        dispatch(deleteClient(clientData.id))
        dispatch(addNewClient(data, fullAddress.flat.id))
        setOpen(false)
    }
    const onDeleteClick = () => {
        dispatch(deleteClient(clientData.id))
        dispatch(fetchClients(fullAddress.flat.id))
    }
    return (
        <Card className={clientStyles.wrapper} elevation={4}>
            <CardContent className={clientStyles.cardContent}>
                <PersonOutlineIcon className={clientStyles.personIcon} />
                <div>
                    <div className={clientStyles.nameInfo}>
                        {clientData.name}
                    </div>
                    <div className={clientStyles.phoneInfo}>
                        <PhoneIcon className={clientStyles.commonIcon} />
                        {clientData.phone}
                    </div>
                    <div className={clientStyles.mailInfo}>
                        {clientData.email && <MailOutlineIcon className={clientStyles.commonIcon} />}
                        {clientData.email}
                    </div>
                </div>
            </CardContent>
            <CardActions>
                <ButtonGroup className={clientStyles.buttons}>
                    <Button className={clientStyles.button} onClick={handleClickOpen}><EditIcon /></Button>
                    <Button className={clientStyles.button} onClick={onDeleteClick}><DeleteOutlineIcon /></Button>
                </ButtonGroup>
            </CardActions>
            <ProfileCard
                open={open}
                handleClose={handleClose}
                onSubmit={onSubmit}
                control={control}
                handleSubmit={handleSubmit}
                fullAdress={fullAddress}
                cardType='edit'
                clientData={clientData}
            />
        </Card>
    )
}