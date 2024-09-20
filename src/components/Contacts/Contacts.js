import { useState, useEffect } from 'react';
import './Contacts.css'

export default function Contacts() {

    const [contactsData, setContactsData] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userName, setUserName] = useState('');
    const [isDeleted, setIsDeleted] = useState(true);

    useEffect(() => {
        console.log(isLoaded);
    }, [isLoaded]);

    function fetchData(data) {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: "PUT",
            body: JSON.stringify({
                title: data,
                body: 'some body'
            })
        })
        .then((data) => data.json())
        .then((res) => {
            setContactsData(res.id);
            setIsLoaded(true);
        })
    }

    function onInputChange(e) {
        let user = e.target.value;
        if(user.length > 3){
            fetchData(user);
            setUserName(user);
            setIsDeleted(false);
        }
    }

    function deleteUser(user) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${contactsData}`, {
          method: "DELETE",
        })
        setIsDeleted(true);
    }
    return (
        <div className="contacts-main-wrapper container">
            <h1 className='main-wrapper__head-title'>Contacts</h1>
            <div className='input-container'>
                <p>Input your contact information:</p>
                <input type="text" onChange={(e) => onInputChange(e) } />
            </div>
            <div>
                { isLoaded ? <p>Your ID:</p> : <p>Your ID isn't ready yet</p> }
                {isLoaded && contactsData}
            </div>
            {isLoaded && <div>
                <button onClick={() => deleteUser(contactsData)}>
                    { isDeleted ? "User is Deleted" : `Delete User: ${userName}` }
                    </button>
            </div>
            }

        </div>
    );
}