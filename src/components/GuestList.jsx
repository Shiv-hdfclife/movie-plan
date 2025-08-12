// import { useState } from "react"

// export default function GuestList() {

//     const [guestlist, setGuesList] = useState([
//         "Alice", "Bob", "Charlie", "Dana", "Eve"
//     ])

//     console.log(guestlist);
//     return (
//         <div>
//             <h1>
//                 Guest List  </h1>

//             <div className="">
//                 {guestlist.map(q => {
//                     <ul>{q}</ul>
//                 })}
//             </div>


//         </div>


//     )

// }


import { useState } from 'react';

const randomGuests = ["Alice", "Bob", "Charlie", "Dana", "Eve"];

export default function GuestList() {
    const [guests, setGuests] = useState([]);

    function addRandomGuest() {
        const random = randomGuests[Math.floor(Math.random() * randomGuests.length)];
        setGuests(prev => [...prev, random]);
    }

    function clearList() {
        setGuests([]);
    }

    return (
        <div className="guest-list section">
            <h3>Guest List</h3>
            <div style={{ marginBottom: '0.75rem' }}>
                <button className="counter-btn" onClick={addRandomGuest}>
                    Add Random Guest
                </button>
                <button
                    className="counter-btn"
                    style={{ marginLeft: '0.5rem', backgroundColor: '#dc2626' }}
                    onClick={clearList}
                >
                    Clear List
                </button>
            </div>
            <ul>
                {guests.map((guest, index) => (
                    <li key={index}>{guest}</li>
                ))}
            </ul>
        </div>
    );
}
