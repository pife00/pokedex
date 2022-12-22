import React, { useState, useContext, createContext, useEffect } from "react";
import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { MyTable } from "../components/table/Table";
import { Pagination } from "flowbite-react";
import { useNavigate,useParams } from "react-router-dom";
import { Title } from "../components/title/Title";

interface pokemons {
  name: string;
  url: string;
}

export const HomeView = () => {
  const [pokemons, setPokemons] = useState<pokemons[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(0);
  let {page} = useParams()
  if(page == undefined){
    page = "1"
  }
  const navigation = useNavigate()

  const getData = async () => {
    setCurrentPage(page)
    let url = "https://pokeapi.co/api/v2/pokemon";
    const response = await fetch(url);
    const json = await response.json();
    setPageCounts(Math.ceil(json.count / 20));
    setPokemons(json.results);
  };

  useEffect(() => {

    if(page != null){
      nexPage(+page)
    }
    else{
      getData();
    }
  }, [page]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    navigation(`/${page}`)
    //nexPage(page);
  };

  const nexPage = async (page: number) => {
    let goPage = 0;
    let url = "";

    if (page == 1) {
      url = "https://pokeapi.co/api/v2/pokemon";
    }

    if (page == 2) {
      goPage = 20;
      url = `https://pokeapi.co/api/v2/pokemon?offset=${goPage}&limit=20`;
    }

    if (page > 2) {
      goPage = page * 20;
      url = `https://pokeapi.co/api/v2/pokemon?offset=${goPage}&limit=20`;
    }

    

    const response = await fetch(url);
    const json = await response.json();
    setPageCounts(Math.ceil(json.count / 20));
    setPokemons(json.results);
  };

  return (
    <ContentCenter>
      <main>
      <div >
        <div className="text-center">
        <Title title="Pokedex"  />
        </div>
        <MyTable PropsPokemons={pokemons} />
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
