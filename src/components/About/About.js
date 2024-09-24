import { useEffect, useState } from 'react';
import './About.css'

export default function About() {

    const [pokemons, setPokemons] = useState([]);
    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then((data) => data.json())
            .then((res) => setPokemons(res.results))
    }, [])
    return (
        <div className="about-main-wrapper">
            <h1 className='main-wrapper__head-title'>About our employees</h1>
            <div className='pokemons-grid'>
                {pokemons.map((el, i) => (
                    <div className="pokemons-card" key={i}>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} />
                        <h3>{el.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}