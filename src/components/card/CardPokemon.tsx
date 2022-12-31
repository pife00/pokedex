import { Card } from "flowbite-react"
import { Label } from "flowbite-react"
interface Props{
    name:string,
    type:string,
    img:string,
}

export const CardPokemon:React.FC<Props> = ({name,type,img}:Props) =>{
    return(
        <Card   >
            <h1 className="text-base sm:text-lg uppercase text-gray-500 font-bold font-PocketMonk  " > {name} </h1>
            <img   src={img} alt="" />
            <p className="font-PocketMonk text-gray-600 dark:text-gray-200" > {type} </p>
            
        </Card>
    )
}