import React, { useEffect, useState } from 'react'
import { Button, CardContent, Typography, Card } from '@mui/material'
import { Link } from 'react-router-dom'
import '../css/home.css'
import axios from 'axios'


function Home() {

  const username  = localStorage.getItem('username')
  const [completed, setCompleted] = useState(false)
  const [data, setData] = useState("")
  const [file, setFile] = useState("")
 
  useEffect(() => {
    axios.post("http://localhost:8000/login",{"username":username})
    .then((res) => {
      if(res.data === "Profile Completed"){
        setCompleted(true)
        setData(res.data)

      }
      else{
        setData("Please click here to fill in your details")
      }
    }).catch((err) => console.log(err))
  },[username])

  useEffect(() => {
    axios.post("http://localhost:8000/login", {"username":username})
    .then((res) => {
      setFile(res.data)
    })
  },[username])

  return (
    

<div className='Home'>
  {completed ? (
    <Link to={'/home'} style={{ textDecoration: 'none', textAlign: 'center' }}>
      <Card variant="outlined" className="card">
        <CardContent className="card-content">
          <Typography variant="h2" gutterBottom>Click here to fill in this form {username}</Typography>
          <Typography>{data}</Typography>
        </CardContent>
      </Card>
    </Link>
  ) : (
    <Link to={'/home/form'} style={{ textDecoration: 'none', textAlign: 'center' }}>
      <Card variant="outlined" className="card">
        <CardContent className="card-content">
          <Typography variant="h3">Hello, {username}</Typography>
          <Typography>{data}</Typography>
        </CardContent>
      </Card>
    </Link>
  )}
  <Link to={'/'}>
    <Button variant='contained' sx={{ color: 'red', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'fixed', top: 10, right: 1, fontSize: 14, fontFamily: 'roboto' }}>LogOut</Button>
  </Link>
  <Link to={'/resetpass'}>
    <Button variant='contained' sx={{ color: 'green', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'fixed', top: 10, right: 100, fontSize: 14, fontFamily: 'roboto' }}>Change Password</Button>
  </Link>
</div>



  )
}

export default Home