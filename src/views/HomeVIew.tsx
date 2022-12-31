import { useState, useEffect } from "react";
import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { MyTable } from "../components/table/Table";
import { Pagination } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../components/title/Title";
import { useQuery, gql } from "@apollo/client";
import { InputAutoComplete } from "../components/inputAutocomplete/InputAutoComplete";
import { LandPage } from "../components/landpage/LandPage";
import { usePokemonStore } from "../store/pokemon";
import { get_pokemons } from "../graphql/pokemon";

export const HomeView = () => {
  const dataPokemons = get_pokemons()
  
  const navigate = useNavigate();
  const [totalPage, setTotalPage] = useState(0);

  let { page } = useParams();
  if (page == undefined) page = "1";

  const totalPokemons = async () => {
    const url = " https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url);
    const json = await response.json();
    setTotalPage(Math.ceil(json.count / 20));
  };

  useEffect(() => {
    if (totalPage == 0) {
      totalPokemons();
    }

    onPageChange(+page!);
  }, [page]);

  const { loading, error, data } = useQuery(dataPokemons);
  const storePokemon = usePokemonStore((state) => state.Pokemon);
  
  const toPage = usePokemonStore((state)=>state.toPage)
  const fromPage = usePokemonStore((state)=>state.fromPage)

  const handlerFrom = usePokemonStore((state)=>state.handlerFrom)
  const handlerTo = usePokemonStore((state)=>state.handlerTo)
  const addData = usePokemonStore((state) => state.addData);

  useEffect(() => {
    if (data != undefined) addData(data);
  }, [data]);

  const onPageChange = (pageSelected: number) => {
    if (pageSelected == 1) {
      handlerFrom(0);
      handlerTo(20);
      navigate(`/${pageSelected}`);
    }
    if (pageSelected > 1) {
      handlerFrom((pageSelected - 1) * 20 + 1);
      handlerTo((pageSelected - 1) * 20 + 20);
      navigate(`/${pageSelected}`);
    }
  };

  return (
    <main>
      <LandPage />

      <ContentCenter>
        <>
          <div className="text-center">
            <Title title="Pokedex" />

            <div className="flex justify-between">
              <InputAutoComplete />
              <Pagination
                className="mb-2"
                currentPage={+page}
                totalPages={totalPage}
                onPageChange={onPageChange}
              />
            </div>
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <MyTable PropsPokemon={storePokemon} />
          )}
        </>
      </ContentCenter>
    </main>
  );
};
