import { useEffect, useState } from 'react';
import './About.css';

export default function About() {
    const [pokemons, setPokemons] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
            .then((data) => data.json())
            .then((res) => {
                setPokemons(res.results);
                setIsLoaded(true); // Set to true after loading is complete
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    function killPokemon(pokemonName) {
        const filteredPokemons = pokemons.filter((el) => el.name !== pokemonName); // Correct filter logic
        setPokemons(filteredPokemons);
    }

    return (
        <div className="about-main-wrapper">
            <h1 className="main-wrapper__head-title">About our pokemons</h1>
            {!isLoaded ? (
                <p>Loading...</p>
            ) : (
                <div className="pokemons-grid">
                    {pokemons.map((el, i) => (
                        <div className="pokemons-card" key={i}>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`} alt={el.name} />
                            <h3>{el.name}</h3>
                            <button onClick={() => killPokemon(el.name)}>kill</button> {/* Use arrow function */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
