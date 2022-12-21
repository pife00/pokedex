import React, { useState, useContext, createContext, useEffect } from "react";
import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { MyTable } from "../components/table/Table";
import { Pagination } from "flowbite-react";

interface pokemons {
  name: string;
  url: string;
}

export const HomeView = () => {
  const [pokemons, setPokemons] = useState<pokemons[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCounts, setPageCounts] = useState(0);

  useEffect(() => {
    const getData = async () => {
      let url = "https://pokeapi.co/api/v2/pokemon";

      const response = await fetch(url);
      const json = await response.json();
      setPageCounts(Math.ceil(json.count / 20));
      setPokemons(json.results);
    };

    getData();
    console.log("I run everytime my condition is changed");
  }, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    nexPage(page);
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
      <div>
        <div className="text-center">
        <h2 className="5xl font-semibold"> Pokemon Tabla </h2>

        </div>
        <MyTable PropsPokemons={pokemons} />
        <Pagination
          currentPage={currentPage}
          totalPages={pageCounts}
          onPageChange={onPageChange}
        />
      </div>
    </ContentCenter>
  );
};
