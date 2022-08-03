import style from "./Header.module.css";

const Header=()=>{

  const logo=<img src="logo.png" alt="logo"/>
  const title="GOOD FOOD RESTAURANT";



    return(
        <div className={style.header}>
            <div className={style.logo}>{logo}</div>
            <div className={style.title}>{title}</div>
        </div>
    )
}
export default Header;