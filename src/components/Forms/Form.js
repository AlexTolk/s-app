import { useState } from 'react';
import './Form.css'

export default function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event){
        event.preventDefault();
    }
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleEmailChange(event){
        setEmail(event.target.value);
    }
    return(
        <div className='form-container'>
            <div>
                <p>name: {name}</p>
                <p>email: {email}</p>
            </div>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <label for="name">Name</label>
                <input type='text' id='name' name='name' required onChange={handleNameChange} />

                <label for="email">Email</label>
                <input type='email' id='email' name='email' required onChange={handleEmailChange} />

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}