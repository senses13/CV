import React, { useRef } from 'react'
import '../css/form.css'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Typography, TextField, FormControl, MenuItem, FormLabel, RadioGroup, FormControlLabel, Radio, InputLabel, Select} from '@mui/material'
import ReCAPTCHA from 'react-google-recaptcha'
import axios from 'axios'
import { useState } from 'react'

// function Form() {
//     const recaptcha = useRef(null)
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [date, setDate] = useState("")
//     const [age, setAge] = useState("")
//     const [gender, setGender] = useState("")
//     const [address, setAddress] = useState("")
//     const [color, setColor] = useState("")
//     const [validname, isValidName] = useState("")
//     const [validaddress, isValidAddress] = useState("")

//     const navigate = useNavigate()

//     const handleReset = () => {
//         setName("");
//         setEmail(""); 
//         setPassword("");
//         setDate("");
//         setAge("");
//         setGender("");
//         setAddress("");
//         setColor("");
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const captchaValue = recaptcha.current.getValue()
//         console.log(name, email, password,date,age,gender,address,color);
//         const username = localStorage.getItem("username")

//         const formData = new FormData();
//         formData.append('file', e.target.elements.photo.files[0]);
//         formData.append('captchaValue', captchaValue);
//         formData.append('username', username);
//         formData.append('name', name);
//         formData.append('email', email);
//         formData.append('password', password);
//         formData.append('date', date);
//         formData.append('age', age);
//         formData.append('gender', gender);
//         formData.append('address', address);
//         formData.append('color', color);

//         if (!captchaValue) {
//             alert('Please verify the reCAPTCHA!');
//             return;
//           }
//         if(name.trim()=== ''){
//             isValidAddress("")
//             isValidName("Please enter a valid name")
//             return
//         }
//         else if(address.trim() === ''){
//             isValidName("")
//             isValidAddress("Please enter a valid address")
//             return
//         }
        
//           try {
//             const response = await axios.post('http://localhost:8000/profile', formData);
//             console.log(response);
//             if (response.data === "Successfully completed"){
//                 alert("Successfully completed. Navigating to home")
//                 navigate('/home')
//             }
//             else{
//                 alert("Error Validating reCAPTCHA")
//                 setTimeout(() =>  window.location.reload(), 1000);
//             }
//           } catch (error) {
//             console.error('Error:', error);
//           }

//     }


function Form() {
    // const recaptcha = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [date, setDate] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [address, setAddress] = useState("");
    const [color, setColor] = useState("");
    const [file, setFile] = useState("")
    const [validName, setValidName] = useState("");
    const [validAddress, setValidAddress] = useState("");

    const navigate = useNavigate();

    const handleReset = () => {
        setName("");
        setEmail("");
        setPassword("");
        setDate("");
        setAge("");
        setGender("");
        setAddress("");
        setColor("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const captchaValue = recaptcha.current.getValue();
        console.log(name, email, password, date, age, gender, address, color);
        const username = localStorage.getItem("username");

        const formData = new FormData();
        formData.append('file', file);
        formData.append('username', username);
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('date', date);
        formData.append('age', age);
        formData.append('gender', gender);
        formData.append('address', address);
        formData.append('color', color);

        // if (!captchaValue) {
        //     alert('Please verify the reCAPTCHA!');
        //     return;
        // }
        if (name.trim() === '') {
            setValidAddress("");
            setValidName("Please enter a valid name");
            return;
        } else if (address.trim() === '') {
            setValidName("");
            setValidAddress("Please enter a valid address");
            return;
        }

        try {
            const response = await axios.post('http://localhost:8000/profile', formData);
            console.log(response);
            if (response.data === "Successfully completed") {
                alert("Successfully completed. Navigating to home");
                navigate('/home');
            } else {
                alert("error");
                // setTimeout(() => window.location.reload(), 1000);
            }
        } catch (error) {
            console.error('Error:', "Helo");
        }
    };



    return (


<div className='container'>
  <div className='card' style={{marginTop:'500px'}}>
    <div className='sticky'>
      <Link to={'/'}>
        <Button  variant='contained' sx={{ color: 'red', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'fixed', top: 10, right: 1, fontSize: 14, fontFamily: 'roboto'}}>LogOut</Button>
      </Link>
      <Link to={'/home'}>
        <Button  variant='contained' sx={{ color: 'red', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'fixed', top: 10, right: 100, fontSize: 14, fontFamily: 'roboto'}}>Home</Button>
      </Link>
    </div>
    <div></div>
    <form onSubmit={handleSubmit} onReset={handleReset}>
      <div className='form' >
        <div className="form-content">
          <Typography variant="h3" gutterBottom>Fill in form</Typography>
          <div className='fields'>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '1em' }}
            />

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginBottom: '1em' }}
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '1em' }}
            />

            <TextField
              label="DOB"
              variant="outlined"
              type="date"
              fullWidth
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={{ marginBottom: '1em' }}
            />

            <TextField
              label="Age"
              variant="outlined"
              type="number"
              fullWidth
              required
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ marginBottom: '1em' }}
            />

            <FormControl component="fieldset" fullWidth style={{ marginBottom: '1em' }}>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup row aria-label="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                <FormControlLabel value="Other" control={<Radio />} label="Other" />
              </RadioGroup>
            </FormControl>

            <TextField
              label="Address"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{ marginBottom: '1em' }}
            />

            <FormControl variant="outlined" fullWidth style={{ marginBottom: '1em' }}>
              <InputLabel id="color-label">Choose a color</InputLabel>
              <Select
                labelId="color-label"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                label="Choose a color"
              >
                <MenuItem value=""><em>None</em></MenuItem>
                <MenuItem value="red">Red</MenuItem>
                <MenuItem value="blue">Blue</MenuItem>
                <MenuItem value="yellow">Yellow</MenuItem>
                <MenuItem value="green">Green</MenuItem>
              </Select>
            </FormControl>

            <InputLabel htmlFor="photo">Upload your photo</InputLabel>
            <input className='fileupload' type="file" id="photo" name="photo" accept="image/*" required onChange={e =>setFile(e.target.files[0])}/>

          </div>
          <div className='buttons'>
            <Button className='reset' type='reset' variant='contained'
             sx={{
                    minWidth: '100px',
                    bgcolor: "#010114",
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '17px',
                    marginTop: '1em',
                    '&:hover': { bgcolor: '#020432' }
                }}>Reset</Button>
            <Button className='submit' type='submit' variant='contained'
                sx={{
                    minWidth: '100px',
                    bgcolor: "#010114",
                    color: 'white',
                    textTransform: 'none',
                    fontSize: '17px',
                    marginTop: '1em',
                    '&:hover': { bgcolor: '#020432' }
                }}>Submit</Button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>


    )
}

export default Form