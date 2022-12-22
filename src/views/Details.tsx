import { ContentCenter } from "../components/contentCenter/ContentCenter"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { Pokemon } from "../models/Pokemons"
import { CarouselComponent } from '../components/carousel/CarouselComponent'
import { Title } from "../components/title/Title"
export const Details = () => {
    const { id } = useParams()
    const URL = "https://pokeapi.co/api/v2/pokemon/"
    const [pokemon, setPokemon] = useState<Pokemon>()

    const sprites = {

        back_default: pokemon?.sprites.back_default,
        front_default: pokemon?.sprites.front_default,
        front_dream_world:pokemon?.sprites.other.dream_world.front_default,
       front_official_art:pokemon?.sprites.other["official-artwork"].front_default
    }
    useEffect(() => {
        const getPokemon = async () => {
            const url = `${URL}${id}`
            const response = await fetch(url)
            const json = await response.json()

            let name = json.name;
            let sprites = json.sprites;
            let abilities = json.abilities;

            setPokemon({ name, sprites, abilities })
        }
        getPokemon()
    }, [])

    return (
        <ContentCenter>
            <div className="h-screen" >
                <Title title={pokemon?.name}  />
                
                <CarouselComponent images={sprites} />
            </div>
        </ContentCenter>
    )
}