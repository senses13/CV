import { Button, Box, Typography, Grid, Card, CardContent, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import React from 'react';



export default function Signup() {

  const [username, setUsername] = useState('')
  const [address, setAddress] = useState('')
  const navigate = useNavigate()
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [open, setOpen] = useState(false)
  const [alert, setAlert] = useState(null)


  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/Signup', { "username": username, "address": address, })
      .then((res) => {
        console.log(res.data)
        if (res) {
          navigate('/')
        }
      })
      .catch(err => console.log(err))

  }



  function validateUsername(username: string): string | null {
    if (username.length < 5) {
      return 'Minimum 5';
    }
    return null;
  }



  function validateAddress(address: string): string | null {
    if (!address) {
      return 'Address is required';
    }
    return null;
  }





  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true)

    const data = {
      "username": username,
      "address": address,
    }

    const usernameError = validateUsername(username);
    const addressError = validateAddress(address);

    if (usernameError || addressError) {
      console.error('Validation errors');
      return;
    }
    else {
      axios.post('http://localhost:8000/register', data)
        .then((res) => {
          if (res.data === 'username already taken') {
            setAlert(res.data)
          }
          else {
            setOpen(true)
            setTimeout(() => navigate('/'), 2500);
          }
        }).catch((err) => console.log(err))
    }
  }

  const handleclose = () => {
    setOpen(false)
  };





  return (

    <div>
      <div>


        <form onSubmit={handleSubmit}>

          
<Card variant="outlined">
            <CardContent>
                <Typography variant="h4" gutterBottom sx={{ paddingBottom: '10px' }}>
                    User Registration
                </Typography>
                <Grid container justifyContent="center" style={{ minHeight: '10vh' }}>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <Box sx={{ paddingTop: '5px', justifyContent: 'center' }}>
                                <TextField
                                    label="Username"
                                    variant="outlined"
                                    fullWidth
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    style={{ marginBottom: '1em' }}
                                />


                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    fullWidth
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                    style={{ marginBottom: '1em' }}
                                />


                              
                            </Box>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ minWidth: '100px', bgcolor: "#010114", color: 'white', textTransform: 'none', fontSize: '17px', margin: 2, '&:hover': { bgcolor: '#020432' } }}
                                onClick={handleSubmit}
                            >
                                Submit
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>

        </form>

      </div>
    </div>
  )
}