// import React, { useState } from 'react';

// const ItemPriceTable = () => {
//     const [itemPrices, setItemPrices] = useState({
//         menshirt: '',
//         mentshirt: '',
//         menpant: '',
//         menshort: '',
//         womenshirt: '',
//         womentshirt: '',
//         womenpant: '',
//         womenshort: '',
//         kidshirt: '',
//         kidtshirt: '',
//         kidpant: '',
//         kidshort: '',
//         fold: '',
//         iron: '',
//         dry: '',
//     });

//     const handlePriceChange = (itemName, event) => {
//         const { value } = event.target;
//         setItemPrices(prevState => ({
//             ...prevState,
//             [itemName]: value
//         }));
//     };

//     const handleKeyPress = event => {
//         const keyCode = event.keyCode || event.which;
//         const keyValue = String.fromCharCode(keyCode);
//         const validPattern = /^[0-9.]+$/;

//         if (!validPattern.test(keyValue)) {
//             event.preventDefault();
//         }
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log('Updated prices:', itemPrices);
//         // Here you can send the updated prices to the server if needed
//     };

//     return (
//         <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
//             <h2>Item Prices</h2>
//             <form onSubmit={handleSubmit}>
//                 <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
//                     <thead>
//                         <tr>
//                             <th style={{ backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Item</th>
//                             <th style={{ backgroundColor: '#f2f2f2', border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Price</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {Object.entries(itemPrices).map(([itemName, price]) => (
//                             <tr key={itemName}>
//                                 <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{itemName}</td>
//                                 <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
//                                     <input
//                                         type="text"
//                                         value={price}
//                                         onChange={(e) => handlePriceChange(itemName, e)}
//                                         onKeyPress={handleKeyPress}
//                                         style={{ width: '80px', padding: '5px', border: '1px solid #ddd', borderRadius: '3px' }}
//                                     />
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <div style={{ textAlign: 'center' }}>
//                     <button
//                         type="submit"
//                         style={{
//                             padding: '10px 20px',
//                             backgroundColor: '#007bff',
//                             color: '#fff',
//                             border: 'none',
//                             borderRadius: '3px',
//                             cursor: 'pointer'
//                         }}
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default ItemPriceTable;


import React, { useState } from 'react';

const ItemPriceTable = () => {
    const [itemPrices, setItemPrices] = useState({
        v1: '', w1: '', x1: '', y1: '', z1: '',
        v2: '', w2: '', x2: '', y2: '', z2: '',
        v3: '', w3: '', x3: '', y3: '', z3: '',
        v4: '', w4: '', x4: '', y4: '', z4: '',
        v5: '', w5: '', x5: '', y5: '', z5: ''
    });

    const [previousPrices, setPreviousPrices] = useState({
        v1: '10', w1: '20', x1: '30', y1: '40', z1: '50',
        v2: '11', w2: '21', x2: '31', y2: '41', z2: '51',
        v3: '12', w3: '22', x3: '32', y3: '42', z3: '52',
        v4: '13', w4: '23', x4: '33', y4: '43', z4: '53',
        v5: '14', w5: '24', x5: '34', y5: '44', z5: '54'
    });

    const handlePriceChange = (itemName, event) => {
        const { value } = event.target;
        setItemPrices(prevState => ({
            ...prevState,
            [itemName]: value
        }));
    };

    const handleKeyPress = event => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);
        const validPattern = /^[0-9.]+$/;

        if (!validPattern.test(keyValue)) {
            event.preventDefault();
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Updated prices:', itemPrices);
        // Here you can send the updated prices to the server if needed
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
            <h2>Item Prices</h2>

            {/* Table for Updating Prices */}
            <div style={{ float: 'left', marginRight: '50px' }}>
                <h3>Update Prices</h3>
                <form onSubmit={handleSubmit}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item</th>
                                <th>Category</th>
                                <th>Wash Price</th>
                                <th>Wash + Iron</th>
                                <th>Dry Clean</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['Men', 'Women', 'Kid', 'Other', 'Other2'].map(row => (
                                <tr key={row}>
                                    <td>{row}</td>
                                    {['Item', 'Category', 'Wash Price', 'Wash + Price', 'Dry Clean'].map(col => (
                                        <td key={`${row}${col}`} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                            <input
                                                type="text"
                                                value={itemPrices[`${row}${col}`]}
                                                onChange={(e) => handlePriceChange(`${row}${col}`, e)}
                                                onKeyPress={handleKeyPress}
                                                style={{ width: '80px', padding: '5px', border: '1px solid #ddd', borderRadius: '3px' }}
                                            />
                                        </td>
                                    ))}
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

            {/* Table for Previous Prices */}
            <div style={{ float: 'left' }}>
                <h3>Previous Prices</h3>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                        <th></th>
                                <th>Item</th>
                                <th>Category</th>
                                <th>Wash Price</th>
                                <th>Wash + Iron</th>
                                <th>Dry Clean</th>
                        </tr>
                    </thead>
                    <tbody>
                        {['Men', 'Women', 'Kid', 'Other', 'Other2'].map(row => (
                            <tr key={row}>
                                <td>{row}</td>
                                {['Men', 'Women', 'Kid', 'Other', 'Other2'].map(col => (
                                    <td key={`${row}${col}`} style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                        {previousPrices[`${row}${col}`]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ clear: 'both' }}></div>
        </div>
    );
};

export default ItemPriceTable;
