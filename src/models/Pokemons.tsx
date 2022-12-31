export interface Pokemon {
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: [];
  abilities: [];
}

export interface PokemonGroup {
  pokemon_v2_pokemon: {
    name: string;
    id: number;
    pokemon_v2_pokemonsprites: {
      sprites: string
    }[],
    pokemon_v2_pokemontypes: {
      pokemon_v2_type: {
        name: string;
      };
    }[];
  }[];
}

export interface Sprites {
  back_default: string;
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    }
    "official-artwork": {
      front_default: string;
    }
    home: {
      front_default: string
    }
  }
};