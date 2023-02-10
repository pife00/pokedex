import React from "react";
import { useNavigate } from "react-router-dom";
import { PokemonGroup, Sprites } from "../../models/Pokemons";
import { usePokemonStore } from "../../store/pokemon";
import { CardPokemon } from "../card/CardPokemon";

type Props = {
  PokemonStore: PokemonGroup;
};

export const PokemonsShow = ({ PokemonStore }: Props) => {
  const navigate = useNavigate();
  const goPagePokemon = (id: number) => {
    navigate(`/choose/${id}`);
  };

  let names = PokemonStore.pokemon_v2_pokemon;

  let cardShow = names.map((pokemons, index) => {
    let sprite: Sprites = spriteConverter(pokemons);
    
    return (
      <div
        key={pokemons.name}
        className="hover:cursor-pointer hover:shadow-lg"
        onClick={() => goPagePokemon(pokemons.id)}
      >
        <CardPokemon
          name={pokemons.name}
          img={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons.id}.png`}
          type={pokemons.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
        />
      </div>
    );
  });
  return (
    <>
      <div className="grid grid-cols-2  sm:grid-cols-3 sm:gap-2">
        {cardShow}
      </div>
    </>
  );
};

function spriteConverter(data: any) {
  

  if (data.name != "") {
    let rawJson = data.pokemon_v2_pokemonsprites[0].sprites;
    let json = rawJson.replace("\\", "");
    let Sprites = JSON.parse(json);
    return Sprites;
  }
}
