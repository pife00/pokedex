import { Card } from "flowbite-react"
import { useState,useEffect } from "react"

type Props = {
    stats: {
        base_stat: number
        pokemon_v2_stat: {
            name: string
        }
    }
}

export const CardComponent: React.FC<Props> = ({ stats }) => {
    const defense = '<svg class="h-16 w-16 text-blue-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>'
    const hp = '<svg class="h-16 w-16 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>'
    const special_attack = '<svg class="h-16 w-16 text-yellow-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>'
    const special_defense = '<svg class="h-16 w-16 text-blue-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" /></svg>'
    const attack = '<svg class="h-16 w-16 text-orange-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 19l15 -15l3 3l-6 6l2 2a14 14 0 0 1 -14 4" /></svg>'
    const speed = '<svg class="h-16 w-16 text-yellow-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>'

    const [showIcon,setShowIcon] = useState('')
    
    useEffect(()=>{
        let data = stats.pokemon_v2_stat.name
        if(data == 'defense') setShowIcon(defense)
        if(data == 'hp') setShowIcon(hp)
        if(data == 'attack') setShowIcon(attack) 
        if(data == 'speed') setShowIcon(speed) 
        if(data == 'special-attack') setShowIcon(special_attack) 
        if(data == 'special-defense') setShowIcon(special_defense) 
        
        
    },[showIcon])
    return (
        <Card className="w-28 rounded-md " >
            <div className="text-center" >
                <h5 className="uppercase text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                <div dangerouslySetInnerHTML={{ __html: showIcon }} />
                <small className="text-xs font-normal" > {
                stats.pokemon_v2_stat.name
                } </small>
                </h5>

            </div>
            <div className="text-center"  >
                <p className="text-2xl font-bold text-gray-700 dark:text-gray-400">
                    {stats.base_stat}
                </p>

            </div>
        </Card>
    )
}