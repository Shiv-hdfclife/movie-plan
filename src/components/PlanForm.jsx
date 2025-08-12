import { useState } from 'react';
import Section from './Section';

export default function PlanForm() {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    return (
        <div className="plan-form">
            <Section title="Plan Your Movie Night">
                <div className="form-field">
                    <label>Movie Title</label>
                    <input
                        type="text"
                        maxLength={30}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <span className="char-count">{title.length}/30</span>
                </div>

                <div className="form-field">
                    <label>Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="form-field">
                    <label>Location</label>
                    <input
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>
            </Section>

            <Section title="Live Preview">
                <div className="preview">
                    <p><strong>Title:</strong> {title || '---'}</p>
                    <p><strong>Date:</strong> {date || '---'}</p>
                    <p><strong>Location:</strong> {location || '---'}</p>
                </div>

            </Section>
        </div>
    );
}
