type Props ={
    children:JSX.Element
}

export const ContentCenter = ({children}:Props) =>{
    return(
        <div className="flex" >
            <div className="basis-1/5" ></div>
            <div className="basis-full ">
                {children}
            </div>
            <div className="basis-1/5" ></div>   
        </div>
    )
}