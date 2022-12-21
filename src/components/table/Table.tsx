import React from "react";
import { Link } from "react-router-dom";
import { Table } from "flowbite-react/lib/esm/components";
type Props = {
  PropsPokemons: {
    name: string;
    url: string;
  }[];
};

export const MyTable: React.FC<Props> = ({ PropsPokemons }) => {
  const goPagePokemon = (url: string, name: string) => {
    console.log(url, name);
  };

  let data = PropsPokemons;
  let itemsShow = data.map((pokemons) => {
    return (
      
        <Table.Row
          key={Math.random() * 1000000}
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
        >
          <Table.Cell
            onClick={() => goPagePokemon(pokemons.url, pokemons.name)}
            key={Math.random() * 1000000}
            className="py-4 px-6 uppercase text-lg hover:cursor-pointer hover:bg-gray-200 "
          >
            {pokemons.name}
          </Table.Cell>

          <Table.Cell key={Math.random() * 100000000} className="py-4 px-6">
            {pokemons.url}
          </Table.Cell>
        </Table.Row>
      
    );
  });
  return (
    <Table>
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Url</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">{itemsShow}</Table.Body>
    </Table>
  );
};
