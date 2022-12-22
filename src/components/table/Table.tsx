import React from "react";
import { Link,Navigate,useNavigate } from "react-router-dom";
import { Table } from "flowbite-react/lib/esm/components";
type Props = {
  PropsPokemons: {
    name: string;
    url: string;
  }[];
};

export const MyTable: React.FC<Props> = ({ PropsPokemons }) => {

  const navigate = useNavigate()
  const goPagePokemon = (id: string) => {
    navigate(`/choose/${id}`)
  };

  let data = PropsPokemons;
  let itemsShow = data.map((pokemons) => {
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

          <Table.Cell key={Math.random() * 100000000} className="py-4 px-6">
            {pokemons.url}
          </Table.Cell>

         


          
        </Table.Row>
      
    );
  });
  return (
    
    <Table >
      <Table.Head>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Url</Table.HeadCell>
      </Table.Head>
      <Table.Body  className="divide-y">{itemsShow}</Table.Body>
    </Table>

    
  );
};
