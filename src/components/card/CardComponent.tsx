import { Card } from "flowbite-react"

export const CardComponent = () => {
    return (
        <Card className="max-w-sm " >
            <div className="text-center" >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Icon
            </h5>

            </div>
            <div className="text-center"  >
            <p className="font-normal text-gray-700 dark:text-gray-400">
                HP 
                45
            </p>

            </div>
        </Card>
    )
}