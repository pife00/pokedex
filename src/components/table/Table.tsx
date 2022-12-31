import React from "react";
import { useNavigate } from "react-router-dom";
import { Table } from "flowbite-react/lib/esm/components";
import { PokemonGroup } from "../../models/Pokemons";

type Props = {
  PropsPokemon: PokemonGroup 
};
export const MyTable: React.FC<Props> = ({ PropsPokemon }: Props) => {
  const navigate = useNavigate();
  const goPagePokemon = (id: number) => {
    navigate(`/choose/${id}`);
  };
  let names = PropsPokemon.pokemon_v2_pokemon;
  let itemsShow = names.map((pokemons) => {
    return (
      <tr
        onClick={() => goPagePokemon(pokemons.id)}
        key={Math.random() * 1000000}
        className="font-PocketMonk bg-white hover:cursor-pointer
        hover:bg-slate-100 
        dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
      >

        <td
          key={pokemons.name}
          className="py-4 px-6 uppercase text-lg border-b-2 "
        >
          {pokemons.name}
        </td>

        <td key={Math.random() * 100000000} className="py-4 px-6 uppercase border-b-2 ">
          {pokemons.pokemon_v2_pokemontypes.length == 0
            ? ""
            : pokemons.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}
        </td>
      </tr>
    );
  });
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {itemsShow}
          
        </tbody>
      </table>
    </div>
  );
};
