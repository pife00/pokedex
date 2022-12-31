import create from "zustand";
import { devtools, persist } from "zustand/middleware";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { PokemonGroup, Sprites } from "../models/Pokemons";

interface PokemonStore {
  Pokemon: PokemonGroup;
  PokemonSprites: Sprites[]
  addData: (data: PokemonGroup) => void;
  addSprites:(data:any)=>void
}

interface PokemonPage {
  toPage: number,
  fromPage: number,
  handlerTo: (by: number) => void,
  handlerFrom: (by: number) => void

}

export const usePokemonStore = create<PokemonStore & PokemonPage>()(
  devtools(
    persist(
      (set) => ({
        Pokemon: {
          pokemon_v2_pokemon: [
            {
              name: "",
              id: 0,
              pokemon_v2_pokemontypes: [
                {
                  pokemon_v2_type: {
                    name: "",
                  },
                },
              ],
            },
          ],
        },
        PokemonSprites:[ {
          front_default: "",
          back_default: "",
          other: {
            dream_world: {
              front_default: "",
            },
            "official-artwork": {
              front_default: "",
            },
            home: {
              front_default: ""
            }

          },
        }],

          fromPage: 0,
          toPage: 20,
          addSprites: (data) => set((state) => ({ PokemonSprites: data })),
          addData: (data) => set((state) => ({ Pokemon: data })),
          handlerFrom: (by) => set((state) => ({ fromPage: by })),
          handlerTo: (by) => set((state) => ({ toPage: by }))
        }),

      {
        name: "pokemon-storage",
      }
    )
  )
);

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("Store", usePokemonStore);
}
