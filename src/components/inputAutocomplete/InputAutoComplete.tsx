import { TextInput } from "flowbite-react";
import { Label } from "flowbite-react";
import { useState } from "react";

export const InputAutoComplete = () => {
  const lista = [
    "Pikachu",
    "Charizard",
    "Moltres",
    "Raichu",
    "bulbasour",
    "Charmander",
    "Latias",
    "Pikachu",
    "Charizard",
    "Moltres",
    "Raichu",
    "bulbasour",
    "Charmander",
    "Latias",
  ];
  const [showList, setShowList] = useState(false);
  return (
    <div className="mt-1 ">

      <TextInput
        onBlur={() => setShowList(false)}
        onFocus={() => setShowList(true)}
        type="text"
        placeholder="Pikachu"
      />
      {showList ? (
        <div className="absolute text-left h-32   w-44 bg-white overflow-auto">
          {lista.map((el) => (
            <div className="ml-3 text-gray-500 mx-1 cursor-pointer hover:bg-gray-100">
              {el}
            </div>
          ))}
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
};
