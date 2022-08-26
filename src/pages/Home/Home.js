import pizzaimg from "../../assets/photos/pizzaimg.jpg";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.home}>
      <div>
        <img className={style.home__img} src={pizzaimg} alt="" />
      </div>
      <h3 className={style.home__title}>Happy Fast Food</h3>
    </div>
  );
};
export default Home;
