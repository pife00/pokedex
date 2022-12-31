import { gql } from "@apollo/client";
import { usePokemonStore } from "../store/pokemon";

//const fromPage = useokemonStore((state)=>state.fromPage)
//const toPage = usePokemonStore((state)=>state.toPage)


export function get_pokemons() {
  const fromPage = usePokemonStore((state) => state.fromPage);
  const toPage = usePokemonStore((state) => state.toPage);

  const get_pokemons2 = gql`  
query getPokemon {
pokemon_v2_pokemon(where: {id: {_gte: ${fromPage}, _lte: ${toPage}}}) {
  id
  name
  pokemon_v2_pokemontypes {
    pokemon_v2_type {
      name
    }
  }
  pokemon_v2_pokemonsprites {
    sprites
  }
}
}
`;

  return get_pokemons2
};


export function all_names(){
  
}
