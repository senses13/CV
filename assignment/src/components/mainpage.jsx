import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import axios from 'axios';



export default function BasicModal() {
    const [menOpen, setMenOpen] = useState(false);
    const [womenOpen, setWomenOpen] = useState(false);
    const [kidsOpen, setKidsOpen] = useState(false);

    const [washSelected, setWashSelected] = useState(false);
    const [foldSelected, setFoldSelected] = useState(false);
    const [dryCleanSelected, setDryCleanSelected] = useState(false);

    const handleWashClick = () => setWashSelected(!washSelected);
    const handleFoldClick = () => setFoldSelected(!foldSelected);
    const handleDryCleanClick = () => setDryCleanSelected(!dryCleanSelected);

    const handleResetButton = () => {
        setWashSelected(false);
        setFoldSelected(false);
        setDryCleanSelected(false);
    };

 



    const handleMenOpen = () => setMenOpen(true);
    const handleMenClose = () => setMenOpen(false);
    const handleWomenOpen = () => setWomenOpen(true);
    const handleWomenClose = () => setWomenOpen(false);
    const handleKidOpen = () => setKidsOpen(true);
    const handleKidClose = () => setKidsOpen(false);

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
    const [fold, setFold] = useState(0);
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
        setFold(0);
        setDryClean(0);
        setWashSelected(false);
        setFoldSelected(false);
        setDryCleanSelected(false);

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = localStorage.getItem('username')



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
            'fold': fold,
            'dryclean': dryclean,
        }

        setWash(washSelected ? 1 : 0);
        setFold(foldSelected ? 1 : 0);
        setDryClean(dryCleanSelected ? 1 : 0);

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

                    <Button>Add items</Button>


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
                {/* <Button id="wash" onClick={handleWashClick} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontSize: 14, margin: 5, width: '250px', height: '100px'}}>Wash</Button>
                <Button id="fold" onClick={handleFoldClick} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontSize: 14, margin: 5,  width: '250px', height: '100px'}}>Fold</Button>
                <Button id="dry-clean" onClick={handleDryCleanClick} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontSize: 14, margin: 5,  width: '250px', height: '100px' }}>Dry Clean</Button> */}

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
                            bgcolor: foldSelected ? '#8db600' : '#010114',
                            position: 'relative',
                            top: 20,
                            fontSize: 14,
                            margin: 5,
                            width: '250px',
                            height: '100px',
                        }}
                        onClick={handleFoldClick}
                    >
                        {foldSelected ? 'Fold ✓' : 'Fold'}
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
                <Button id="submit" onClick={handleSubmit} variant='contained' size="large" sx={{ color: 'white', bgcolor: '##8db600', position: 'relative', top: 20, fontSize: 14, margin: 5, }}>Proceed to Checkout</Button>
                <Button id="reset" onClick={handleReset} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontSize: 14, margin: 5 }} >Reset</Button>
            </div>

        </div>
    );
}
