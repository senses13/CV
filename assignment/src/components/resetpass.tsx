import React, { useState } from 'react'
import '../css/resetpass.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, Snackbar, Typography } from '@mui/material'
import MuiAlert from '@mui/material/Alert';



function Resetpass() {

    const [password, setpassword] = useState("")
    const [newpassword, setNewPassword] = useState("")
    const username = localStorage.getItem("username")
    const [formSubmitted, setFormSubmitted] = useState(false)
    const [open, setOpen] = useState(false)
    const [alertdata, setAlertdata] = useState("")
    const Navigate = useNavigate()

    const [alert, setalert] = useState("")

    const validatePassword = (passwords:String, newpasswords:String) => {
        if (newpassword.length < 6) {
            return 'Minimum 6 characters';
        }
        else if(newpasswords === passwords){
            return 'New password should not match the old password'
        }
        return null;
    }

    const handleclose = () => {
        setOpen(false)
      };

   

    const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormSubmitted(true)


        const passwordError = validatePassword(password, newpassword)

        if (passwordError) {
            console.error('Validation errors');
            return;
        }
        else{
        axios.post('http://localhost:8000/reset_password',{"username":username,"password":password,"newpassword":newpassword})
        .then((res) => {
            if(res.data === "Password Changed Successfully"){
                console.log(res);
                setOpen(true)
                setAlertdata("Password changed successfully! Please login again to continue")
                setTimeout(() => Navigate('/'), 2500);
            }
            else if(res.data === "Your current password is incorrect")
            {
                console.log(res);
                setalert(res.data)
                
            }
            else{
                console.log("Try again later");
                
            }
        })
    }
    }





return (


<div className='div'>
    <div className="card">
        <div className="card-content">
            <Typography variant="h4" gutterBottom sx={{fontFamily: 'Roboto'}}>Change Password</Typography>
            <form onSubmit={handleSubmit}>
                <div className='input'>
                    <label htmlFor="current-password" >Current Password</label>
                    <input
                        type="password"
                        id="current-password"
                        required
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        className={alert ? 'error' : ''}
                    />
                    {alert && <p className="helper-text">{alert}</p>}
                </div>
                <div className='input'>
                    <label htmlFor="new-password">New Password</label>
                    <input
                        type="password"
                        id="new-password"
                        required
                        value={newpassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={formSubmitted && validatePassword(password, newpassword) ? 'error' : ''}
                    />
                    {formSubmitted && validatePassword(password, newpassword) && <p className="helper-text">{validatePassword(password, newpassword)}</p>}
                    <Button
                        size='medium'
                        type='submit'
                        variant='contained'
                        sx={{ minWidth: '150px', bgcolor: '#020432', color: 'white', '&:hover': {bgcolor:'#020432'}, marginTop: '1em', textTransform: 'none',  fontSize: '17px', fontFamily: 'Roboto' }} >



                        Reset Password
                    </Button>
                </div>
            </form>
        </div>
    </div>
    <div className="buttons">
        <Link to={'/'}>
            <Button variant='contained'  sx={{
                    minWidth: '100px',
                    bgcolor: "#020432",
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '17px',
                    marginTop: '1em',
                    '&:hover': { bgcolor: '#020432' }, position: 'fixed', top: 10, right: 10, fontFamily: 'Roboto'}}>
                        LogOut</Button>
        </Link>
        <Link to={'/home'}>
            <Button variant='contained'  sx={{
                    minWidth: '100px',
                    bgcolor: "#020432",
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '17px',
                    marginTop: '1em',
                    '&:hover': { bgcolor: '#020432' }, position: 'fixed', top: 10, right: 130, fontFamily: 'Roboto'}}>Home</Button>
        </Link>
    </div>
    <Snackbar open={open} autoHideDuration={3000} onClose={handleclose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <MuiAlert onClose={handleclose} severity="success" sx={{ width: '100%', height: '50%' }}>
            {alertdata}
        </MuiAlert>
    </Snackbar>
</div>






)

}

export default Resetpass