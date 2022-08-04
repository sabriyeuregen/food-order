const Navigation=()=>{

    const isActiveMenu=(data)={
     return data.isActive ? "-active": " "
    }

    return(
       <nav>
        <NavLink to="/home" className={isActiveMenu}>Home</NavLink>
       </nav>
    )
}
export default Navigation;