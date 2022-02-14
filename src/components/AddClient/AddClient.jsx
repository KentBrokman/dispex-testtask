import IconButton from '@mui/material/IconButton';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { useAddClientStyles } from './AddClientStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectClientsLoadingStatus } from '../../store/ducks/clients/selectors'
import { LoadingStatus } from '../../store/ducks/utils';
import { selectFullAdress } from '../../store/ducks/adresses/selectors';


import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { addNewClient } from '../../store/ducks/clients/thunks';
import { ProfileCard } from '../common/PrfofileCard';

const FormSchema = yup.object({
    email: yup.string().max(30, 'Максимальная длина e-mail 30 символов'),
    phone: yup.string().required('Введите номер телефона').max(11, 'Минимальная длина номера 11 символов'),
    name: yup.string().max(40, 'Максимальная длина Ф.И.О. 40 символов')
}).required()

export const AddClient = () => {
    // styles
    const addClientStyles = useAddClientStyles()
    //
    //utils
    const dispatch = useDispatch()
    //
    // global state
    const clientLoadingStatus = useSelector(selectClientsLoadingStatus)
    const fullAdress = useSelector(selectFullAdress)
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
        dispatch(addNewClient(data, fullAdress.flat.id))
        setOpen(false)
    }
    //
    if (clientLoadingStatus !== LoadingStatus.LOADED) {
        return (<></>)
    }
    return (
        <div className={addClientStyles.wrapper}>
            <div>
                ул. {fullAdress.street.name}, дом {fullAdress.house.name}, кв. {fullAdress.flat.name}
            </div>
            <IconButton onClick={handleClickOpen}>
                <PersonAddAltIcon className={addClientStyles.addClientIcon} />
            </IconButton>
            <ProfileCard 
                open={open} 
                handleClose={handleClose}
                onSubmit={onSubmit}
                control={control}
                handleSubmit={handleSubmit}
                fullAdress={fullAdress}
                cardType='create'
            />
        </div>
    )
}