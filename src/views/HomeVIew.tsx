import { useState, useEffect } from "react";
import { ContentCenter } from "../components/contentCenter/ContentCenter";
import { PokemonsShow } from "../components/pokemonShow/PokemonsShow";
import { Pagination } from "flowbite-react";
import { useNavigate, useParams } from "react-router-dom";
import { Title } from "../components/title/Title";
import { useQuery, gql } from "@apollo/client";
import { InputAutoComplete } from "../components/inputAutocomplete/InputAutoComplete";
import { LandPage } from "../components/landpage/LandPage";
import { usePokemonStore } from "../store/pokemon";
import { get_pokemons } from "../graphql/pokemon";
import { PokemonGroup } from "../models/Pokemons";

export const HomeView = () => {
  const dataPokemons = get_pokemons();

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

  const pokemonStore = usePokemonStore((state) => state.PokemonToShow);
  const pokemonPage = usePokemonStore((state) => state.PokemonPage);
  const addDataToShow = usePokemonStore((state) => state.addDataToShow);
  const addDataPage = usePokemonStore((state) => state.addDataPage);
  
  const handlerFrom = usePokemonStore((state) => state.handlerFrom);
  const handlerTo = usePokemonStore((state) => state.handlerTo);

  const updateStore = async (data: PokemonGroup) => {
    if (data != undefined) {
      addDataPage(data);
      addDataToShow(data)
    }
  };

  useEffect(() => {
    updateStore(data);
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

  const pokemonRecieved = (data: PokemonGroup | "") => {
    if (data != undefined && data != ''){
      addDataToShow(data as PokemonGroup);
    } 

    if(data == ''){
      addDataToShow(pokemonPage)
    }
  };

  return (
    <main>
      <LandPage />
      <ContentCenter>
        <>
          <div className="text-center">
            <Title title="Pokedex" />

            <div className="grid gap-1 grid-cols-1 sm:flex sm:justify-between">
              <InputAutoComplete sendPokemon={pokemonRecieved} />

              <div className="hidden md:block">
                <div className=" flex items-center justify-center text-center">
                  <Pagination
                    className="mb-2"
                    layout="pagination"
                    currentPage={+page}
                    totalPages={totalPage}
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
              <div className="sm:hidden block">
                <div className="flex items-center justify-center text-center">
                  <Pagination
                    className="mb-2"
                    layout="table"
                    currentPage={+page}
                    totalPages={totalPage}
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
            </div>
          </div>
          {
          pokemonStore.pokemon_v2_pokemon.length > 0 
          ?<PokemonsShow PokemonStore={pokemonStore} />
          :<p>Loading</p>
          /* loading ? (
            <p className="text-gray-400 m-4" >Loading...</p>
          ) : (
            <PokemonsShow PokemonStore={pokemonStore} />
          ) */}
        </>
      </ContentCenter>
    </main>
  );
};
