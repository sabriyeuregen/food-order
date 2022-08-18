import DATA from "../../DATA/data.json"
import Card from "../Card/Card";
import style from "./Menu.module.css";



const Menu=(props)=>{
 
 

   const foodsList= DATA.map(food=><Card key={food.id} image={<img src={food.image} style={{objectFit :"contain"}} width="200" height="300" alt=""/>} name={food.name} price={food.price} description={food.description}/>)

    return(
        <div >
        
             <div className={style.foods__list}>{foodsList}</div>
        
            
        </div>
    )
}
export default Menu;