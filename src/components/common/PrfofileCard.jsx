import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { Controller } from "react-hook-form";

const cardTypes = {
    create: 'create',
    edit: 'edit'
}

export const ProfileCard = ({open, handleClose, onSubmit, control, handleSubmit, fullAdress, cardType, clientData}) => {
    return (
        <Dialog
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth='sm'
            >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <DialogTitle>{cardType === cardTypes.create ? 'Добавить жильца' : 'Редактировать профиль'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            ул. {fullAdress.street.name}, дом {fullAdress.house.name}, кв. {fullAdress.flat.name}
                        </DialogContentText>
                        <Controller
                            name="phone"
                            control={control}
                            defaultValue={clientData ? clientData.phone : ''}
                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    margin="dense"
                                    id="phone"
                                    label="Телефон"
                                    fullWidth
                                    variant="standard"
                                />}
                        />
                        <Controller
                            name="email"
                            control={control}
                            defaultValue={clientData ? clientData.email : ''}
                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    margin="dense"
                                    id="email"
                                    label="e-mail"
                                    fullWidth
                                    variant="standard"
                                />}
                        />
                        <Controller
                            name="name"
                            control={control}
                            defaultValue={clientData ? clientData.name : ''}
                            render={({ field: { onChange, value }, fieldState: { error } }) =>
                                <TextField
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                    margin="dense"
                                    id="name"
                                    label="Ф.И.О."
                                    fullWidth
                                    variant="standard"
                                />}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Отмена</Button>
                        <Button type='submit' variant="contained">{cardType === cardTypes.create ? 'Добавить' : 'Редактировать'}</Button>
                    </DialogActions>
                </form>
            </Dialog>
    )
}