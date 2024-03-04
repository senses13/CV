
import { Button, Box, Typography, Grid } from '@mui/material';
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






return(
    <div>

<Grid container justifyContent="center" style={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={12} sm={12}>
          <Box sx={{ textAlign: 'center', marginTop: '5em' }}>
            <Box sx={{ paddingTop: '60px', justifyContent: 'center' }}>
              <Typography sx={{ color: '#fff', paddingRight: '16em' }}>Username</Typography>
              <input type="text" style={{ backgroundColor: 'rgba(217, 217, 217, 54%)', borderRadius: '0.7em', padding: '1em', border: 'none', width: '20rem', fontSize: 18 }} ></input>
              <Typography sx={{ color: '#fff', paddingRight: '16em', marginTop: 1.5 }}>Password</Typography>
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
)}