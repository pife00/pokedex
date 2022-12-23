import React, { useState, useContext, createContext, useEffect } from "react";
import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { MyTable } from "../components/table/Table";
import { Pagination } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../components/title/Title";
import { useQuery, gql } from '@apollo/client';


interface pokemons {
  name: string;
  url: string;
}


export const HomeView = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [fromPage,setFromPage] = useState(0)
  const [toPage,setToPage] = useState(0)

  const get_pokemons = gql`  
  query getPokemon {
  pokemon_v2_pokemon(where: {id: {_gte: ${fromPage}, _lte: ${toPage}}}) {
    id
    name
    pokemon_v2_pokemontypes(where: {id: {_gte: 0, _lte: 20}}) {
      pokemon_v2_type {
        name
      }
    }
  }
}
`;

  const [pageCounts, setPageCounts] = useState(0);
  const { loading, error, data } = useQuery(get_pokemons);
  console.log(data)
  const onPageChange = () =>{

  }

  let { page } = useParams()
  if (page == undefined) {
    page = "1"
  }
  const navigation = useNavigate()

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <ContentCenter>
      <main>
        <div >
          <div className="text-center">
            <Title title="Pokedex" />
          </div>
          {/* <MyTable PropsPokemon={data} /> */}
          <Pagination
            currentPage={+page}
            totalPages={pageCounts}
            onPageChange={onPageChange}
          />
        </div>

      </main>
    </ContentCenter>
  );
};
