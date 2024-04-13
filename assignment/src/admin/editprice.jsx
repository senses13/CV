
    

    import React, { useState } from 'react';

    const ItemPriceTable = () => {
        const [itemPrices, setItemPrices] = useState({
            menshirt: '',
            mentshirt: '',
            menpant: '',
            menshort: '',
            womenshirt: '',
            womentshirt: '',
            womenpant: '',
            womenshort: '',
            kidshirt: '',
            kidtshirt: '',
            kidpant: '',
            kidshort: '',
            fold: '',
            iron: '',
            dry: '',
        });
    
        const handlePriceChange = (itemName, event) => {
            const { value } = event.target;
            setItemPrices(prevState => ({
                ...prevState,
                [itemName]: value
            }));
        };
    
        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Updated prices:', itemPrices);
        };
    
        return (
            <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
                <h2>Item Prices</h2>
                <form onSubmit={handleSubmit}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <th style={{ backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Item</th>
                                <th style={{ backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(itemPrices).map(([itemName, price]) => (
                                <tr key={itemName}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{itemName}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                        <input
                                            type="number"
                                            value={price}
                                            onChange={(e) => handlePriceChange(itemName, e)}
                                            style={{ width: '80px', padding: '5px', border: '1px solid #ddd', borderRadius: '3px' }}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div style={{ textAlign: 'center' }}>
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#007bff',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '3px',
                                cursor: 'pointer'
                            }}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        );
    };
    
    export default ItemPriceTable;
    