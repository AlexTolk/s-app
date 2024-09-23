import { useState } from 'react';
import './About.css'

export default function About() {

    const [employees, setEmployees] = useState(['Bob Marley', 'Curt Cobain', 'Darth Vader']);
    return (
        <div className="about-main-wrapper container">
            <h1 className='main-wrapper__head-title'>About our employees</h1>
            <div>
                {employees.map((el, i) => (
                    <p key={i}>{el}</p>
                ))}
            </div>
        </div>
    );
}