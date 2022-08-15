import React,{useState} from "react";

const ButtonAmount=()=>{

    
    const [amount,setAmount]=useState(1)

    const decreaseHandler=()=>{
 
        setAmount(amount-1)
  
     }
   
    const increaseHandler =()=>{
 
       setAmount(amount+1)
    }
 
   


    return(
        <div>
            <div>
             <div className="form__amount">
               <button onClick={decreaseHandler}>-</button>
               <span>{amount}</span>
               <button onClick={increaseHandler}>+</button>
             </div>
            </div>
        </div>
    )
}
export default ButtonAmount;