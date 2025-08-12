import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prev => Math.min(prev + 1, 20));
    const decrement = () => setCount(prev => Math.max(prev - 1, 0));

    return (
        <div className="counter section">
            <h3>Snacks</h3>
            <button
                className="counter-btn"
                onClick={decrement}
                disabled={count === 0}
            >
                -
            </button>
            <span className="counter-value">{count}</span>
            <button
                className="counter-btn"
                onClick={increment}
                disabled={count === 20}
            >
                +
            </button>
            {count > 15 && (
                <p style={{ color: 'red', marginTop: '0.5rem' }}>Snack Overload!</p>
            )}
        </div>
    );
}
