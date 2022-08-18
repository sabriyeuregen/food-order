import style from "./Contact.module.css";

const Contact=(props)=>{
   

    return(
        <div className={style.contact}>
          <h2> Bize Yazın</h2>
          <br></br>
          <p>Mail : corporate@littlecaesars.com.tr</p>   
          <br></br> 
          <h2>Bizi Arayın</h2>
          <br></br>
          <p>Telefon +90 212 000 00 00 </p>
          <br></br>
          <h2>Adres</h2>
          <br></br>
          <p>Bağcılar/İstanbul</p>
        </div>
        
    )
}
export default Contact;