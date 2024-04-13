
import React from 'react';
import { Card, CardContent, Button, Box, Typography, Grid, TextField, Link} from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



export default function Login() {

    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/login', { "username": username, "password": password })
            .then((res) => {
                console.log(res.data)
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('username', res.data.username)
                    navigate('/home')
                }
                else if (res.data === " Incorrect Password") {
                    console.log("Incorrect Password");
                }
                else {
                    console.log("User Not Found")
                }
            })
            .catch(err => console.log(err))
    }




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Grid container justifyContent="center" style={{ minHeight: '150vh' }}>
                    <Grid item xs={12} md={12} sm={12}>
                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <div style={{ width: 500, border: 3 }}>



                                <Card variant="outlined" className='card'>
                                    <CardContent>
                                        <Typography variant="h6" gutterBottom sx={{ paddingBottom: '10px' }}> Login form</Typography>
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Box>
                                                <Typography sx={{ color: '#ffffff', paddingRight: '16em' }}>Username</Typography>
                                                <TextField
                                                    value={username}
                                                    onChange={(e) => setusername(e.target.value)}
                                                    type="text"
                                                    variant="outlined"
                                                    fullWidth
                                                    style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', marginTop: '0.5em' }}
                                                />
                                                <Typography sx={{ color: '#ffffff', paddingRight: '16em', marginTop: '1.5em' }}>Password</Typography>
                                                <TextField
                                                    value={password}
                                                    onChange={(e) => setpassword(e.target.value)}
                                                    type="password"
                                                    variant="outlined"
                                                    fullWidth
                                                    style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', marginTop: '0.5em' }}
                                                />
                                            </Box>
                                            <Button
                                                type='submit'
                                                variant='contained'
                                                sx={{
                                                    minWidth: '100px',
                                                    bgcolor: "#010114",
                                                    color: 'white',
                                                    textTransform: 'none',
                                                    fontSize: '17px',
                                                    marginTop: '1em',
                                                    '&:hover': { bgcolor: '#020432' }
                                                }}
                                            >
                                                Submit
                                            </Button>
                                        </Box>
                                        
                                        <a href="/adminlogin">Admin Login</a>
                                    </CardContent>
                                </Card>






                            </div>
                        </div>
                        <Grid item xs={12} md={12} sm={12}
                            sx={{
                                textAlign: 'center',
                                paddingTop: { xs: "10em", md: "12em" },
                                fontSize: { xs: '0.8em', md: "1em" }
                            }}>
                        </Grid>
                    </Grid>
                </Grid>
            </form>


        </div>
    )
}



function AdminLoginCard() {
    const [adminEmail, setAdminEmail] = useState('')
    const [adminPassword, setAdminPassword] = useState('')
    const navigate = useNavigate()
    const adminLogin = (() => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:8000/admin/login', { "email": adminEmail, "password": adminPassword })
            .then((res) => {
                console.log(res.data)
                if (res.data.role === 'admin') {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('email', res.data.role)
                    navigate('/admin/dashboard')
                }
            })
            .catch(err => console.log(err))
    })

    return (
        <div>
            <Grid container justifyContent="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={12} md={12} sm={12}>
                    <Box sx={{ textAlign: 'center', marginTop: '5em' }}>
                        <img style={{ height: '225px' }} src={process.env.PUBLIC_URL + "/college-icon.png"} alt='' ></img>
                        <Box sx={{ paddingTop: '60px', justifyContent: 'center' }}>
                            <Typography sx={{ color: '#fff', paddingRight: '16em' }}>Username</Typography>
                            <input type="text" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18 }} value={adminEmail} onChange={(e) => setAdminEmail(e.target.value)}></input>
                            <Typography sx={{ color: '#fff', paddingRight: '16em', marginTop: 1.5 }}>Password</Typography>
                            <input type="password" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18, }} value={adminPassword} onChange={(e) => setAdminPassword(e.target.value)}></input>
                        </Box>
                        <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '17px', }} onClick={adminLogin}>Submit</Button>
                    </Box>
                    <Grid item xs={12} md={12} sm={12}
                        sx={{
                            textAlign: 'center',
                            paddingTop: { xs: "10em", md: "12em" },
                            fontSize: { xs: '0.8em', md: "1em" }
                        }}>
                        Compatible with Google Chrome version 73 and above,Firefox version 64 and above.
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}



export { Login, AdminLoginCard}