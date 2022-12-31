import { TextInput } from "flowbite-react";
import { useState } from "react";
import { list } from '../../assets/list'

export const InputAutoComplete = () => {
  const [showList, setShowList] = useState(false);
  
  const searchPokemon = (msg: string) => {
    let arr:any[] = []
    
    list.forEach(el=>{
      if(el.name.match(msg)!= null){
        arr.push(el)
      }
      
    })
    console.log(arr)
  }
  return (
    <div className="mt-1 ">

      <TextInput
        onChange={(e) => searchPokemon(e.target.value)}
        onBlur={() => setShowList(false)}
        onFocus={() => setShowList(true)}
        type="text"
        placeholder="Pikachu"
      />
      {showList ? (
        <div className="absolute text-left h-32   w-44 bg-white overflow-auto">
          {list.map((el) => (
            <div key={el.name} className="ml-3 text-gray-500 mx-1 cursor-pointer hover:bg-gray-100">
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
