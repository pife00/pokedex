type Props ={
    title:string
}

const defaultProps ={
    title:'Esperando Titulo'
}

export const Title = ({title}:Props) => {
  return (
    <h1 className="font-PocketMonk text-3xl font-bold dark:text-gray-400 m-4 uppercase" > {title} </h1>
  )
}

Title.defaultProps = defaultProps