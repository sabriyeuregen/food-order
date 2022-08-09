import DATA from "../DATA/data.json";
import Card from "../Card/Card";

const Foods=(props)=>{



    return(
        <div>
         {
            DATA.map(food=><Card key={food.id} name={food.name} price={food.price} contents={food.contents}/>)
         }
        </div>
    )
}
export default Foods;