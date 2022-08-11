import DATA from "../../DATA/data.json"
import Card from "../Card/Card";

const Foods=(props)=>{

     //const images=DATA.map((image => <img style={{ objectFit: "contain" }} width="200" height="200" src={image} key={image} alt="foodImg"/>))

    return(
        <div>
         {
            DATA.map(food=><Card key={food.id} img={food.img} name={food.name} price={food.price} contents={food.contents}/>)
         }
        
        </div>
    )
}
export default Foods;