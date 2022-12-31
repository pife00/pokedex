import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonGroup } from "../../models/Pokemons";
import { usePokemonStore } from "../../store/pokemon";
import { CardPokemon } from "../card/CardPokemon";

export const PokemonsShow = () => {
  
  const PokemonStore = usePokemonStore((state)=>state.Pokemon);
  const PokemonSprites = usePokemonStore((state)=>state.PokemonSprites);

  
  const navigate = useNavigate();
  const goPagePokemon = (id: number) => {
    navigate(`/choose/${id}`);
  };
  let names = PokemonStore.pokemon_v2_pokemon;

  let cardShow = names.map((pokemons,index)=>{
    return(
      <div key={pokemons.name} className="hover:cursor-pointer hover:shadow-lg"  onClick={() => goPagePokemon(pokemons.id)}>
        <CardPokemon  
        
        name={pokemons.name} 
        img={PokemonSprites[index].other["official-artwork"].front_default}
        type={pokemons.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}  />
      </div>
    )
  })
  
 
  return (
    <>
      <div className="grid grid-cols-2  sm:grid-cols-3 sm:gap-2"  >
        {cardShow}
      </div>
    
    </>
  );
};
