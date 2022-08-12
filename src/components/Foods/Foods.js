import DATA from "../../DATA/data.json"
import Card from "../Card/Card";
import style from "./Foods.module.css";

const Foods=(props)=>{

   
    return(
        <div className={style.foods}>
         {
            DATA.map(food=><Card key={food.id} image={ <img style={{ objectFit: "contain" }} width="200" height="200" src={food} key={food} alt="" />} name={food.name} price={food.price} contents={food.contents}/>)
         }
        
        </div>
    )
}
export default Foods;