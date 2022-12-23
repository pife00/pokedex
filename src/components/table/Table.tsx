import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react/lib/esm/components";

type PropsPokemon = {
    pokemon_v2_pokemon: {
      name: string,
      id: number,
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          name: string
        }
      }[];

    }[];
} & typeof defaultProps;

const defaultProps = {
  PropsPokemon:{
    pokemon_v2_pokemon:
    [  
      {
        name:'',
        id:0,
        pokemon_v2_pokemontypes:
        [
          {
            pokemon_v2_type:{
              name:''
            }
          }
        ]
      } 
    ]
  }
}

export const MyTable = ( Props:PropsPokemon ) => {

  const navigate = useNavigate()
  const goPagePokemon = (id: string) => {
    navigate(`/choose/${id}`)
  };
  let names = Props.PropsPokemon.pokemon_v2_pokemon;
  console.log(names[0].id)
  //let types = PropsPokemon.pokemon_v2_pokemon[0].pokemon_v2_pokemontypes[0].pokemon_v2_type.name

 // console.log(names[0].pokemon_v2_pokemontypes)
  let itemsShow = names.map((pokemons) => {
    console.log(pokemons)
    return (

      <Table.Row
        key={Math.random() * 1000000}
        className="bg-white dark:border-gray-700 dark:bg-gray-800"
      >

        <Table.Cell
          onClick={() => goPagePokemon(pokemons.name)}
          key={Math.random() * 1000000}
          className="py-4 px-6 uppercase text-lg hover:cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 "
        >
          {pokemons.name}
        </Table.Cell>

        <Table.Cell key={Math.random() * 100000000} className="py-4 px-6 uppercase">
          {pokemons.pokemon_v2_pokemontypes.length == 0?'':pokemons.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
        </Table.Cell>

      </Table.Row>

    );
  });
  return (

    <Table >
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Type</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{itemsShow}</Table.Body>
    </Table>


  );
};

MyTable.defaultProps = defaultProps