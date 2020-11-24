import React, {useEffect, useState} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import {
    selectLoginDialog,
    open,
    close,
} from '../../app/redux/actions/loginDialogSlice'
import { useSelector, useDispatch } from 'react-redux';


interface Props {

}

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  inputContainer: {
      display: "flex",
      flexDirection: "column",
  }
});

export const LoginDialog = (props: Props) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const toggled = useSelector(selectLoginDialog)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleOpen = (): void => {
        dispatch(open());
    }

    const handleClose = (): void => {
        dispatch(close());
    }

    const handleEmail = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(event.currentTarget.value);
    }

    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setPassword(event.currentTarget.value);
    }

    return (
        <Dialog
            open={toggled}
            onClose={handleClose}
            aria-labelledby="login-dialog-title"
            aria-describedby="login-dialog-description"
        >
            <DialogTitle id="login-dialog-title">Login</DialogTitle>
            <DialogContent>
                <div className={classes.inputContainer}>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="login-dialog-email"
                        label="Email Address"
                        type="email"
                        value={email}
                        onChange={handleEmail}
                    />
                    <TextField
                        margin="dense"
                        id="login-dialog-password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={handlePassword}
                    />
                </div>
                <DialogContentText id="login-dialog-description"></DialogContentText>
                <DialogContentText id="login-dialog-errorHandler"></DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button>Login</Button>
                <Button onClick={handleClose}>Close</Button>
            </DialogActions>
        </Dialog>
    )
}
