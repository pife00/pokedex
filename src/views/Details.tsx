import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pokemon } from "../models/Pokemons";
import { CarouselComponent } from "../components/carousel/CarouselComponent";
import { Title } from "../components/title/Title";
import { CardComponent } from "../components/card/CardComponent";
import { useQuery, gql, useLazyQuery } from "@apollo/client";

type PokemonDetails = {
  pokemon_v2_pokemon: {
    id: number;
    name: string;
    pokemon_v2_pokemonstats: [stats_pokemon];

    pokemon_v2_pokemonsprites: {
      sprites: string;
    }[];

    pokemon_v2_pokemonabilities: {
      pokemon_v2_ability: {
        name: string;
      };
    }[];
  }[];
};

type img_sprites = {
  back_default: string;
  front_default: string;
  other: {
    dream_world: {
      front_default: string;
    };
    "official-artwork": {
      front_default: string;
    };
    home: {
      front_default: string;
    };
  };
};

type stats_pokemon = {
  
    base_stat: number;
    pokemon_v2_stat: {
      name: string;
    };
  
};

export const Details = () => {
  const { id } = useParams();
  let Sprites: img_sprites = {
    back_default: "",
    front_default: "",
    other: {
      dream_world: {
        front_default: "",
      },
      "official-artwork": {
        front_default: "",
      },
      home: {
        front_default: "",
      },
    },
  };

  let stats: stats_pokemon [] = []

  const get_pokemon = gql`
    query getPokemon {
        pokemon_v2_pokemon(where: { id: {_eq: ${id}}}) {
            id
            name
            pokemon_v2_pokemonstats {
              base_stat
              pokemon_v2_stat {
                name
              }
            }
            pokemon_v2_pokemonsprites {
              sprites
            }

            pokemon_v2_pokemonabilities {
              pokemon_v2_ability {
                name
              }
            }

        }
      }
    `;

  const { loading, error, data } = useQuery(get_pokemon);
  const pokemonD: PokemonDetails = data;

  if (pokemonD != undefined) {
    let sprites =
      pokemonD.pokemon_v2_pokemon[0].pokemon_v2_pokemonsprites[0].sprites;
    stats = pokemonD.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats;
    let json = sprites.replace("\\", "");

    Sprites = JSON.parse(json);
  }

  return id ? (
    <ContentCenter>
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="">
          <div className="text-left sm:text-center" >
          <Title title={pokemonD.pokemon_v2_pokemon[0].name} />
          </div>
          
          <CarouselComponent images={Sprites} />    
          <div className=" items-start mt-4 gap-2 sm:items-center sm:px-72 grid grid-cols-2 sm:grid-cols-3"  >
            {
              stats.map(el=><CardComponent key={el.pokemon_v2_stat.name}  stats={el} />)
            }

          </div>
        </div>
      )}
    </ContentCenter>
  ) : (
    <p>En espera</p>
  );
};
