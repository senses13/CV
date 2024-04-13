import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function BasicModal() {
    const [menOpen, setMenOpen] = useState(false);
    const [womenOpen, setWomenOpen] = useState(false);
    const [kidsOpen, setKidsOpen] = useState(false);

    const [washSelected, setWashSelected] = useState(false);
    const [washFoldSelected, setWashFoldSelected] = useState(false);
    const [dryCleanSelected, setDryCleanSelected] = useState(false);

    const handleWashClick = () => setWashSelected(!washSelected);
    const handleWashFoldClick = () => setWashFoldSelected(!washFoldSelected);  
    const handleDryCleanClick = () => setDryCleanSelected(!dryCleanSelected);

    const handleResetButton = () => {
        setWashSelected(false);
        setWashFoldSelected(false);
        setDryCleanSelected(false);
    };

    const [checkoutOpen, setCheckoutOpen] = useState(false);

    const handleCheckoutOpen = () => setCheckoutOpen(true);
const handleCheckoutClose = () => setCheckoutOpen(false);



 



    const handleMenOpen = () => setMenOpen(true);
    const handleMenClose = () => setMenOpen(false);
    const handleWomenOpen = () => setWomenOpen(true);
    const handleWomenClose = () => setWomenOpen(false);
    const handleKidOpen = () => setKidsOpen(true);
    const handleKidClose = () => setKidsOpen(false);

    const [username, setUserName] = useState(0);
    const [menshirt, setMenShirt] = useState(0);
    const [mentshirt, setMenTshirt] = useState(0);
    const [menpant, setMenPant] = useState(0);
    const [menshorts, setMenShorts] = useState(0);
    const [womenshirt, setWomenShirt] = useState(0);
    const [womentshirt, setWomenTshirt] = useState(0);
    const [womenpant, setWomenPant] = useState(0);
    const [womenshorts, setWomenShorts] = useState(0);
    const [kidsshirt, setKidsShirt] = useState(0);
    const [kidstshirt, setKidsTshirt] = useState(0);
    const [kidspant, setKidsPant] = useState(0);
    const [kidsshorts, setKidsShorts] = useState(0);
    const [wash, setWash] = useState(0);
    const [washfold, setWashFold] = useState(0);
    const [dryclean, setDryClean] = useState(0);




    const handleReset = () => {
        setMenShirt(0);
        setMenTshirt(0);
        setMenPant(0);
        setMenShorts(0);
        setWomenShirt(0);
        setWomenTshirt(0);
        setWomenPant(0);
        setWomenShorts(0);
        setKidsShirt(0);
        setKidsTshirt(0);
        setKidsPant(0);
        setKidsShorts(0);
        setWash(0);
        setWashFold(0);
        setDryClean(0);
        setWashSelected(false);
        setWashFoldSelected(false);
        setDryCleanSelected(false);

    };


     // State variables for prices
     const [priceMenShirt, setPriceMenShirt] = useState(10); 
     const [priceMenTshirt, setPriceMenTshirt] = useState(8);
     const [priceMenPant, setPriceMenPant] = useState(15);
     const [priceMenShorts, setPriceMenShorts] = useState(12);
     const [priceWomenShirt, setPriceWomenShirt] = useState(10);
     const [priceWomenTshirt, setPriceWomenTshirt] = useState(8);
     const [priceWomenPant, setPriceWomenPant] = useState(15);
     const [priceWomenShorts, setPriceWomenShorts] = useState(12);
     const [priceKidsShirt, setPriceKidsShirt] = useState(10);
     const [priceKidsTshirt, setPriceKidsTshirt] = useState(8);
     const [priceKidsPant, setPriceKidsPant] = useState(15);
     const [priceKidsShorts, setPriceKidsShorts] = useState(12);
     const [washPrice, setWashPrice] = useState(20);
     const [washFoldPrice, setWashFoldPrice] = useState(20);
     const [dryCleanPrice, setDryCleanPrice] = useState(20);
 
     // Function to calculate total price
     const calculateTotalPrice = () => {
        const totalPrice =
            menshirt * priceMenShirt +
            mentshirt * priceMenTshirt +
            menpant * priceMenPant +
            menshorts * priceMenShorts +
            womenshirt * priceWomenShirt +
            womentshirt * priceWomenTshirt +
            womenpant * priceWomenPant +
            womenshorts * priceWomenShorts +
            kidsshirt * priceKidsShirt +
            kidstshirt * priceKidsTshirt +
            kidspant * priceKidsPant +
            kidsshorts * priceKidsShorts +
            wash * washPrice +  // Define washPrice or replace with the actual value
            washfold * washFoldPrice +  // Define washFoldPrice or replace with the actual value
            dryclean * dryCleanPrice; 
        return totalPrice;




    const handleSubmit = (e) => {
        e.preventDefault();
        const username = localStorage.getItem('username')

        setWash(washSelected ? 1 : 0);
        setWashFold(washFoldSelected ? 1 : 0);
        setDryClean(dryCleanSelected ? 1 : 0);


        const formData = {
            'username': username,
            'menshirt': menshirt,
            'mentshirt': mentshirt,
            'menpant': menpant,
            'menshorts': menshorts,
            'womenshirt': womenshirt,
            'womentshirt': womentshirt,
            'womenpant': womenpant,
            'womenshorts': womenshorts,
            'kidsshirt': kidsshirt,
            'kidstshirt': kidstshirt,
            'kidspant': kidspant,
            'kidsshorts': kidsshorts,
            'wash': wash,
            'washfold': washfold,
            'dryclean': dryclean,
        }

       
        axios.post('http://localhost:8000/mainpage/items', formData)
            .then((res) => {
                if (res) {
                    console.log(res)
                }
            }).catch((err) => console.log(err))





    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const formData = {
        'username': username,
        'menshirt': menshirt,
        'mentshirt': mentshirt,
        'menpant': menpant,
        'menshorts': menshorts,
        'womenshirt': womenshirt,
        'womentshirt': womentshirt,
        'womenpant': womenpant,
        'womenshorts': womenshorts,
        'kidsshirt': kidsshirt,
        'kidstshirt': kidstshirt,
        'kidspant': kidspant,
        'kidsshorts': kidsshorts,
        'wash': wash,
        'washfold': washfold, 
        'dryclean': dryclean,
    };


    return (
        <div>
            <Button id="item-men" onClick={handleMenOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'relative', top: 20, fontSize: 14, margin: 5, width: '250px', height: '100px' }}>Men</Button>
            <Modal
                open={menOpen}
                onClose={handleMenClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Men's Items
                    </Typography>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="menshirt" style={{ marginRight: '10px', minWidth: '80px' }}>Shirt</label>
                        <Button onClick={() => (menshirt > 0 ? setMenShirt(menshirt - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={menshirt} onChange={e => setMenShirt(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setMenShirt(menshirt + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="mentshirt" style={{ marginRight: '10px', minWidth: '80px' }}>Tshirt</label>
                        <Button onClick={() => (mentshirt > 0 ? setMenTshirt(mentshirt - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={mentshirt} onChange={e => setMenTshirt(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setMenTshirt(mentshirt + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="menpant" style={{ marginRight: '10px', minWidth: '80px' }}>Pant</label>
                        <Button onClick={() => (menpant > 0 ? setMenPant(menpant - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={menpant} onChange={e => setMenPant(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setMenPant(menpant + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="menshorts" style={{ marginRight: '10px', minWidth: '80px' }}>Shorts</label>
                        <Button onClick={() => (menshorts > 0 ? setMenShorts(menshorts - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={menshorts} onChange={e => setMenShorts(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setMenShorts(menshorts + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>


                    <Button onClick={handleMenClose}>Close</Button>
                </Box>
            </Modal>

            <Button id="item-women" onClick={handleWomenOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'relative', top: 20, fontSize: 14, margin: 5, width: '250px', height: '100px' }}>Women</Button>
            <Modal
                open={womenOpen}
                onClose={handleWomenClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Women's Items
                    </Typography>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="womenshirt" style={{ marginRight: '10px', minWidth: '80px' }}>Shirt</label>
                        <Button onClick={() => (womenshirt > 0 ? setWomenShirt(womenshirt - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={womenshirt} onChange={e => setWomenShirt(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setWomenShirt(womenshirt + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="womentshirt" style={{ marginRight: '10px', minWidth: '80px' }}>Tshirt</label>
                        <Button onClick={() => (womentshirt > 0 ? setWomenTshirt(womentshirt - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={womentshirt} onChange={e => setWomenTshirt(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setWomenTshirt(womentshirt + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="womenpant" style={{ marginRight: '10px', minWidth: '80px' }}>Pant</label>
                        <Button onClick={() => (womenpant > 0 ? setWomenPant(womenpant - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={womenpant} onChange={e => setWomenPant(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setWomenPant(womenpant + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="womenshorts" style={{ marginRight: '10px', minWidth: '80px' }}>Shorts</label>
                        <Button onClick={() => (womenshorts > 0 ? setWomenShorts(womenshorts - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={womenshorts} onChange={e => setWomenShorts(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setWomenShorts(womenshorts + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>


                    <Button onClick={handleWomenClose}>Close</Button>
                </Box>
            </Modal>

            <Button id="item-kids" onClick={handleKidOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'relative', top: 20, fontSize: 14, margin: 5, width: '250px', height: '100px' }}>Kids</Button>
            <Modal
                open={kidsOpen}
                onClose={handleKidClose}
            >
                <Box sx={style}>
                    <Typography variant="h6" component="h2">
                        Kids' Items
                    </Typography>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="kidshirt" style={{ marginRight: '10px', minWidth: '80px' }}>Shirt</label>
                        <Button onClick={() => (kidsshirt > 0 ? setKidsShirt(kidsshirt - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={kidsshirt} onChange={e => setKidsShirt(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setKidsShirt(kidsshirt + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="kidstshirt" style={{ marginRight: '10px', minWidth: '80px' }}>Tshirt</label>
                        <Button onClick={() => (kidstshirt > 0 ? setKidsTshirt(kidstshirt - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={kidstshirt} onChange={e => setKidsTshirt(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setKidsTshirt(kidstshirt + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="kidspant" style={{ marginRight: '10px', minWidth: '80px' }}>Pant</label>
                        <Button onClick={() => (kidspant > 0 ? setKidsPant(kidspant - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={kidspant} onChange={e => setKidsPant(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setKidsPant(kidspant + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                        <label htmlFor="kidsshorts" style={{ marginRight: '10px', minWidth: '80px' }}>Shorts</label>
                        <Button onClick={() => (kidsshorts > 0 ? setKidsShorts(kidsshorts - 1) : 0)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>-</Button>
                        <input type="number" value={kidsshorts} onChange={e => setKidsShorts(e.target.value)} style={{ width: '50px', margin: '0 5px', textAlign: 'center' }} />
                        <Button onClick={() => setKidsShorts(kidsshorts + 1)} variant="outlined" size="small" style={{ minWidth: '40px', padding: '5px' }}>+</Button>
                    </div>


                    <Button onClick={handleKidClose}>Close</Button>
                </Box>
            </Modal>

            <div>
               
                <div>
                    <Button
                        id="wash"
                        variant="contained"
                        size="large"
                        sx={{
                            color: 'white',
                            bgcolor: washSelected ? '#8db600' : '#010114',
                            position: 'relative',
                            top: 20,
                            fontSize: 14,
                            margin: 5,
                            width: '250px',
                            height: '100px',
                        }}
                        onClick={handleWashClick}
                    >
                        {washSelected ? 'Wash ✓' : 'Wash'}
                    </Button>
                    <Button
                        id="fold"
                        variant="contained"
                        size="large"
                        sx={{
                            color: 'white',
                            bgcolor: washFoldSelected ? '#8db600' : '#010114',
                            position: 'relative',
                            top: 20,
                            fontSize: 14,
                            margin: 5,
                            width: '250px',
                            height: '100px',
                        }}
                        onClick={handleWashFoldClick}
                    >
                        {washFoldSelected ? 'Fold ✓' : 'Fold'}
                    </Button>
                    <Button
                        id="dry-clean"
                        variant="contained"
                        size="large"
                        sx={{
                            color: 'white',
                            bgcolor: dryCleanSelected ? '#8db600' : '#010114',
                            position: 'relative',
                            top: 20,
                            fontSize: 14,
                            margin: 5,
                            width: '250px',
                            height: '100px',
                        }}
                        onClick={handleDryCleanClick}
                    >
                        {dryCleanSelected ? 'Dry Clean ✓' : 'Dry Clean'}
                    </Button>
                </div>

            </div>
            <div>
                {/* <Button id="submit" onClick={handleSubmit} variant='contained' size="large" sx={{ color: 'white', bgcolor: '##8db600', position: 'relative', top: 20, fontSize: 14, margin: 5, }}>Proceed to Checkout</Button> */}

                <Button id="reset" onClick={handleReset} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontSize: 14, margin: 5 }} >Reset</Button>
            </div>
            <div>

            <div>
                
                <Box
                    sx={{
                        marginTop: '20px',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        color: '#333',
                        bgcolor: '#f5f5f5',
                        padding: '10px',
                        borderRadius: '5px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    Total Price:  ₹{calculateTotalPrice().toFixed(2)}
                </Box>
            </div>


            <Link to="/home" style={{ textDecoration: 'none' }}>
        <Button
            variant='contained'
            size="large"
            sx={{
                color: 'white',
                bgcolor: '#020432', 
                position: 'relative',
                top: 20,
                fontSize: 14,
                margin: 5,
            }}
        >
            Go to Homepage
        </Button>
    </Link>
            </div>
            <Modal
    open={checkoutOpen}
    onClose={handleCheckoutClose}
>
    <Box sx={style}>
        <Typography variant="h6" component="h2">
            Checkout Details
        </Typography>
        {/* Display the number of items for each category */}
        <Typography>
            Men's Items: {menshirt + mentshirt + menpant + menshorts}
        </Typography>
        <Typography>
            Women's Items: {womenshirt + womentshirt + womenpant + womenshorts}
        </Typography>
        <Typography>
            Kids' Items: {kidsshirt + kidstshirt + kidspant + kidsshorts}
        </Typography>
        {/* Display the total price */}
        <Typography>
            Total Price: ${calculateTotalPrice().toFixed(2)}
        </Typography>
        <Button onClick={handleCheckoutClose}>Close</Button>
    </Box>
</Modal>

{/* <Button id="submit" onClick={handleCheckoutOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#8db600', position: 'relative', top: 20, fontSize: 14, margin: 5, }}>Proceed to Checkout</Button> */}
<Button id="submit" onClick={handleCheckoutOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#8db600', position: 'relative', top: 20, fontSize: 14, margin: 5 }}>
    Proceed to Checkout
</Button>
                
            </div>
            

        
    );
}
}

