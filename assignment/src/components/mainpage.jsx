import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Card, CardContent, Icon, Input } from '@mui/material';
import { FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { useState } from 'react';
import Divider from '@mui/material';













export default function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);



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
    const [price, setPrice] = useState(0);


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
        setPrice(0);

    };







    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2',
        boxShadow: 24,
        p: 4,
    };



    return (

        <div>

            <Button id="item-men" onClick={handleOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'relative', top: 20, fontSize: 14, margin: 5 }}>Men</Button>
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={style}>
                    <Typography id="item-men" variant="h6" component="h2" sx={{ mt: 2 }}>
                        Men's Items
                    </Typography>
                    <div style={{ display: 'flex' }}>
                        <label htmlFor="menshirt">Shirt </label>
                        <button style={{ padding: 10 }} onClick={() => (menshirt > 0 ? setMenShirt(menshirt - 1) : 0)}>-</button>
                        <input type="number" value={menshirt} onChange={e => setMenShirt(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setMenShirt(menshirt + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="mentshirt">Tshirt</label>
                        <button style={{ padding: 10 }} onClick={() => (mentshirt > 0 ? setMenTshirt(mentshirt - 1) : 0)}>-</button>
                        <input type="number" value={mentshirt} onChange={e => setMenTshirt(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setMenTshirt(mentshirt + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="menpant">Pant</label>
                        <button style={{ padding: 10 }} onClick={() => (menpant > 0 ? setMenPant(menpant - 1) : 0)}>-</button>
                        <input type="number" value={menpant} onChange={e => setMenPant(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setMenPant(menpant + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="menshorts">Shorts</label>
                        <button style={{ padding: 10 }} onClick={() => (menshorts > 0 ? setMenShorts(menshorts - 1) : 0)}>-</button>
                        <input type="number" value={menshorts} onChange={e => setMenShorts(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setMenShorts(menshorts + 1)}>+</button>
                    </div>
                    <Button>Add items</Button>
                </Box>
            </Modal>

            <Button id="item-women" onClick={handleOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'relative', top: 20, fontSize: 14, margin: 5 }}>Women</Button>

            <Modal
                open={open}
                onClose={handleClose}>

                <Box sx={style}>
                    <Typography id="item-women" variant="h6" component="h2" sx={{ mt: 2 }}>
                        Women's Items
                    </Typography>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="womenshirt">Shirt</label>
                        <button style={{ padding: 10 }} onClick={() => (womenshirt > 0 ? setWomenShirt(womenshirt - 1) : 0)}>-</button>
                        <input type="number" value={womenshirt} onChange={e => setWomenShirt(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setWomenShirt(womenshirt + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="womentshirt">Tshirt</label>
                        <button style={{ padding: 10 }} onClick={() => (womentshirt > 0 ? setWomenTshirt(womentshirt - 1) : 0)}>-</button>
                        <input type="number" value={womentshirt} onChange={e => setWomenTshirt(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setWomenTshirt(womentshirt + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="womenpant">Pant</label>
                        <button style={{ padding: 10 }} onClick={() => (womenpant > 0 ? setWomenPant(womenpant - 1) : 0)}>-</button>
                        <input type="number" value={womenpant} onChange={e => setWomenPant(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setMenPant(womenpant + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="womenshorts">Shorts</label>
                        <button style={{ padding: 10 }} onClick={() => (womenshorts > 0 ? setWomenShorts(womenshorts - 1) : 0)}>-</button>
                        <input type="number" value={womenshorts} onChange={e => setWomenShorts(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setWomenShorts(womenshorts + 1)}>+</button>
                    </div>

                    <Button>Add items</Button>
                </Box>

            </Modal>

            <Button id="item-kids" onClick={handleOpen} variant='contained' size="large" sx={{ color: 'white', bgcolor: '#010114', '&:hover': { bgcolor: '#020432' }, position: 'relative', top: 20, fontSize: 14, margin: 5 }}>Kids</Button>

            <Modal
                open={open}
                onClose={handleClose}>

                <Box sx={style}>
                    <Typography id="item-kid" variant="h6" component="h2" sx={{ mt: 2 }}>
                        Kids's Items
                    </Typography>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="kidshirt">Shirt</label>
                        <button style={{ padding: 10 }} onClick={() => (kidsshirt > 0 ? setKidsShirt(kidsshirt - 1) : 0)}>-</button>
                        <input type="number" value={kidsshirt} onChange={e => setKidsShirt(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setKidsShirt(kidsshirt + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="kidstshirt">Tshirt</label>
                        <button style={{ padding: 10 }} onClick={() => (kidstshirt > 0 ? setKidsTshirt(kidstshirt - 1) : 0)}>-</button>
                        <input type="number" value={kidstshirt} onChange={e => setKidsTshirt(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setMenPant(kidstshirt + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="kidspant">Pant</label>
                        <button style={{ padding: 10 }} onClick={() => (kidspant > 0 ? setKidsPant(kidspant - 1) : 0)}>-</button>
                        <input type="number" value={kidspant} onChange={e => setKidsPant(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setKidsPant(kidspant + 1)}>+</button>
                    </div>

                    <div style={{ display: 'flex' }}>
                        <label htmlFor="kidsshorts">Shorts</label>
                        <button style={{ padding: 10 }} onClick={() => (kidsshorts > 0 ? setKidsShorts(kidsshorts - 1) : 0)}>-</button>
                        <input type="number" value={kidsshorts} onChange={e => setKidsShorts(e.target.value)} />
                        <button style={{ padding: 10 }} onClick={() => setKidsShorts(kidsshorts + 1)}>+</button>
                    </div>

                    <Button>Add items</Button>
                </Box>

            </Modal>

        <div>
                <Button id="wash" variant='contained' size="large" sx={{color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontsize: 14, margin: 5}}>Wash</Button>

                <Button id="fold" variant='contained' size="large" sx={{color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontsize: 14, margin: 5}}>Fold</Button>

                <Button id="Dry clean" variant='contained' size="large" sx={{color: 'white', bgcolor: '#010114', position: 'relative', top: 20, fontsize:14, margin:5}}>Dry Clean</Button>


            </div>

            <div>
                <Button id="submit" variant='contained' size="large"> Proceed to checkout</Button>

            </div>





















        </div>

    );
}
