import restaurantImg from "../../assets/photos/restaurantbranding.jpg";
import pizzaImg from "../../assets/photos/pizza.jpg";
import largeImg from "../../assets/photos/largeimg.jpg";

import style from "./Home.module.css";

const Home=()=>{

    /*<div><img className={style.home__pizzaImg} src={pizzaImg} alt=""/></div>*/

    return(
        <div className={style.home}>
            
            <div className={style.home__images}>
            <div><img className={style.home__img} src={largeImg} alt=""/></div>
            
            </div>
            <div className={style.home__title}>Sana Özel Kampanyalar</div>
            <div className={style.home__campaignCards}>
               
            </div>
        </div>
    )
}
export default Home;