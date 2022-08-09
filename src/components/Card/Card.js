const Card=(props)=>{

    return(
        <div>
       <div>{props.name}</div>
       <div>{props.price}</div> 
       <div>{props.contents}</div>
        </div>
    )
}
export default Card;