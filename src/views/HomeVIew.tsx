import React, { useState, useContext, createContext, useEffect } from "react";
import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { MyTable } from "../components/table/Table";
import { Pagination } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../components/title/Title";
import { useQuery, gql } from "@apollo/client";
import { SeachInput } from "../components/search/SearchInput";
import { LandPage } from "../components/landpage/LandPage";

export const HomeView = () => {
  const navigate = useNavigate();
  const [fromPage, setFromPage] = useState(0);
  const [toPage, setToPage] = useState(20);
  const [totalPage,setTotalPage] = useState(0)
 

  let { page } = useParams();
  if (page == undefined) page = "1";

  const totalPokemons = async () =>{
    const url =" https://pokeapi.co/api/v2/pokemon/"
    const response = await fetch(url)
    const json = await response.json()
    setTotalPage(Math.ceil(json.count/20))
  }
  

  useEffect(()=>{
    if(totalPage == 0 ){
      totalPokemons()
    }
    
    onPageChange(+page!)
  },[page])
  
  const get_pokemons = gql`  
  query getPokemon {
  pokemon_v2_pokemon(where: {id: {_gte: ${fromPage}, _lte: ${toPage}}}) {
    id
    name
    pokemon_v2_pokemontypes {
      pokemon_v2_type {
        name
      }
    }
  }
}
  `;

  const { loading, error, data } = useQuery(get_pokemons);

  const onPageChange = (pageSelected: number) => {
    
    if(pageSelected == 1){
      setFromPage(0);
      setToPage(20);
      navigate(`/${pageSelected}`);
    }
    if(pageSelected  > 1){
      setFromPage((pageSelected - 1 )  * 20 + 1);
      setToPage(((pageSelected - 1 ) * 20) + 20);
      navigate(`/${pageSelected}`);
    }

  };

  return (
    <ContentCenter>
      <main>
        <>
        <LandPage />
          <div className="text-center">
            <Title title="Pokedex" />
            <div className="flex justify-between" >
            <SeachInput />
            <Pagination className="mb-2"
              currentPage={+page}
              totalPages={totalPage}
              onPageChange={onPageChange}
            />
            </div>
          </div>
          {loading ? <p>Loading...</p> : <MyTable PropsPokemon={data} />}
        </>
      </main>
    </ContentCenter>
  );
};
