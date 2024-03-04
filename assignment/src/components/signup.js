import { Button, Box, Typography, Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



export default function Login() {

    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const navigate = useNavigate()
    const Login = (() => {
        axios.defaults.withCredentials = true;
        axios.post('http://localhost:8000/admin/login', { "email": Email, "password": Password })
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
                        <Box sx={{ paddingTop: '60px', justifyContent: 'center' }}>
                            <Typography sx={{ color: '#fff', paddingRight: '16em' }}>Username</Typography>
                            <input type="text" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18 }} ></input>

                            <Typography sx={{ color: '#fff', paddingRight: '16em' }}>fullname</Typography>
                            <input type="text" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18 }} ></input>

                            <Typography sx={{ color: '#fff', paddingRight: '16em' }}>address</Typography>
                            <input type="text" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18 }} ></input>

                            <Typography sx={{ color: '#fff', paddingRight: '16em' }}>gender</Typography>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    // value={age}
                                    label="Age"
                                    // onChange={handleChange}
                                >
                                    <MenuItem value={"Male"}>Male</MenuItem>
                                    <MenuItem value={"Female"}>Female</MenuItem>
                                </Select>
                            </FormControl>
                            <input type="drop-down" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18 }} ></input>

                            <Typography sx={{ color: '#fff', paddingRight: '16em', marginTop: 1.5 }}>Password</Typography>
                            <input type="password" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18, }}></input>

                            <Typography sx={{ color: '#fff', paddingRight: '16em', marginTop: 1.5 }}>Confirm-Password</Typography>
                            <input type="password" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18, }}></input>
                        </Box>
                        <Button sx={{ color: '#fff', textTransform: 'none', fontSize: '17px', }}>Submit</Button>
                    </Box>
                    <Grid item xs={12} md={12} sm={12}
                        sx={{
                            textAlign: 'center',
                            paddingTop: { xs: "10em", md: "12em" },
                            fontSize: { xs: '0.8em', md: "1em" }
                        }}>
                    </Grid>
                </Grid>
            </Grid>



        </div>
    )
}