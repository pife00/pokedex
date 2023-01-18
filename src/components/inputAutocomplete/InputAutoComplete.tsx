import { TextInput } from "flowbite-react";
import { useEffect, useState, useRef, MouseEvent, RefObject } from "react";
import { list } from "../../assets/list";
import { findById } from "../../graphql/pokemon";
import { useQuery } from "@apollo/client";
import { PokemonGroup } from "../../models/Pokemons";

interface Lista {
  id: number;
  name: string;
}

type Props = {
  sendPokemon: (data: PokemonGroup|'') => void;
};

export const InputAutoComplete: React.FC<Props> = ({ sendPokemon }: Props) => {
  const [showList, setShowList] = useState(false);
  const [findList, setFindList] = useState<Lista[]>(list);
  const [queryId, setQueryId] = useState(0);

  const suggestionListRef: RefObject<HTMLDivElement> = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null)
  const { loading, error, data } = useQuery(findById(queryId));

  useEffect(() => {
    if (data != undefined) sendPokemon(data);
  }, [data]);

  const searchPokemon = (msg: string) => {
    if(msg != ''){
      let arr: any[] = [];
      let lowerMsg = msg.toLowerCase()
      list.forEach((el) => {
        if (el.name.match(lowerMsg) != null) {
          arr.push(el);
        }
      });
      setFindList(arr);
    }else{
      sendPokemon('')
    }

  };

  const choosePokemon = (data: Lista) => {
    setShowList(false);
    inputRef.current!.value=data.name
    setQueryId(data.id);
  };

  function handleDocumentMouseDown(event: MouseEvent) {
    if (
      !suggestionListRef.current ||
      !suggestionListRef.current.contains(event.target as Node)
    ) {
      setShowList(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown",(event)=>{
      if (
        !suggestionListRef.current ||
        !suggestionListRef.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    } );
    return () => {
      document.removeEventListener("mousedown", (event)=>{
        if (
          !suggestionListRef.current ||
          !suggestionListRef.current.contains(event.target as Node)
        ) {
          setShowList(false);
        }
      });
    };
  }, []);

  return (
    <div className="mt-1 ">
      <TextInput
      ref={inputRef}
        onChange={(e) => searchPokemon(e.target.value)}
        onFocus={() => setShowList(true)}
        type="text"
        placeholder="Pikachu"
      />
      {showList ? (
        <div
          ref={suggestionListRef}
          className="absolute text-left max-h-32 rounded-sm   w-44 bg-white overflow-auto"
        >
          {findList.map((el) => (
            <div
              onClick={() => choosePokemon(el)}
              key={el.name}
              className=" text-lg p-1 ml-3 text-gray-500 mx-1 cursor-pointer hover:bg-gray-100"
            >
              {el.name}
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
