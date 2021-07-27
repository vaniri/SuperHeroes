import React, { useEffect, useState } from 'react';
import SearchHero from '../components/SearchHero';

const HeroContainer = () => {
    const [heroes, setHeroes] = useState([]);
    const [hero, setHero] = useState({});
    const [searchStr, setSearchStr] = useState("");

    const getHero = async () => {
        const res = await fetch("https://akabab.github.io/superhero-api/api/all.json");
        if (res.status === 200) {
            const heroesData = await res.json();
            console.log(heroesData);
            setHeroes(heroesData);
            console.log(heroes);
        } else {
            console.err("Error finding heroes")
        }
    }

    useEffect(getHero, []);

    return (
        <div>
            {!hero.name ? 
                <div>
                    <div className="search-hero">
                        <SearchHero setSearchStr={setSearchStr} />
                    </div>
                    <div className="hero-card">
                        {heroes.filter(hero => hero.name.toLowerCase().includes(searchStr.toLowerCase())).map(hero => (
                            <div className="hero"
                                onClick={() => setHero(hero)}
                                key={hero.id}>
                                <img className="hero-img" alt="hero avatar" loading="lazy" src={hero.images.md} />
                                <h2 className="hero-name">{hero.name}</h2>
                            </div>
                        ))}
                    </div> 
                </div>:
                <div>
                    <div className="hero-info-card">
                        <div>
                            <img className="hero-img" alt="hero avatar" loading="lazy" src={hero.images.md} />
                        </div>
                        <div>
                            <h2 className="hero-name">Name: {hero.name}</h2>
                            <h5 className="hero-name">Slug: {hero.slug}</h5>
                            <h5 className="hero-name">intelligence: {hero.powerstats.intelligence}</h5>
                            <h5 className="hero-name">Strength: {hero.powerstats.strength}</h5>
                            <h5 className="hero-name">Speed: {hero.powerstats.speed}</h5>
                            <h5 className="hero-name">Durability: {hero.powerstats.durability}</h5>
                            <h5 className="hero-name">Power: {hero.powerstats.power}</h5>
                            <h5 className="hero-name">Combat: {hero.powerstats.combat}</h5>
                            <h5 className="hero-name">Gender: {hero.appearance.gender}</h5>
                            <h5 className="hero-name">Race: {hero.appearance.race}</h5>
                        </div>
                        <div> <button
                            className="close-btn"
                            onClick={() => setHero({})}>x
                        </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default HeroContainer;