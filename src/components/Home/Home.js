import { useEffect, useState } from 'react';
import './Home.css'

export default function Home() {

    const [postData, setPostData] = useState(null);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((result) => result.json())
            .then((data) => setPostData(data.splice(1, 3)))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="home-main-wrapper container">
            <h1 className='main-wrapper__head-title'>Home</h1>
            {postData ? (
                postData.map((element, index) => (
                    <div key={index + element.id} className='post'>
                        <h2>{element.title}</h2>
                        <p>{element.body}</p>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

