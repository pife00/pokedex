import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react/lib/esm/components";

type Props = {
  PropsPokemon: {
    pokemon_v2_pokemon: {
      name: string;
      id: number;
      pokemon_v2_pokemontypes: {
        pokemon_v2_type: {
          name: string;
        };
      }[];
    }[];
  };
};
export const MyTable: React.FC<Props> = ({ PropsPokemon }: Props) => {
  const navigate = useNavigate();
  const goPagePokemon = (id: number) => {
    navigate(`/choose/${id}`);
  };
  let names = PropsPokemon.pokemon_v2_pokemon;
  let itemsShow = names.map((pokemons) => {
    return (
      <Table.Row
        onClick={() => goPagePokemon(pokemons.id)}
        key={Math.random() * 1000000}
        className="bg-white hover:cursor-pointer dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      >
        <Table.Cell
          
          key={Math.random() * 1000000}
          className="py-4 px-6 uppercase text-lg "
        >
          {pokemons.id}
        </Table.Cell>

        <Table.Cell
          
          key={Math.random() * 1000000}
          className="py-4 px-6 uppercase text-lg "
        >
          {pokemons.name}
        </Table.Cell>

        <Table.Cell
          key={Math.random() * 100000000}
          className="py-4 px-6 uppercase"
        >
          {pokemons.pokemon_v2_pokemontypes.length == 0
            ? ""
            : pokemons.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
        </Table.Cell>
      </Table.Row>
    );
  });
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>ID</Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Type</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{itemsShow}</Table.Body>
    </Table>
  );
};
