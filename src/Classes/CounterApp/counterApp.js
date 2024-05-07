import './counterApp.css';
import {useState} from 'react';
function CounterApp(){
    let [counter,setCounter]=useState(0);

    return (
        <div style={{display : 'flex',gap:10,alignItems:'center',justifyContent:'center'}}>
            <h4>Counter App</h4>
            <button style={{color:'white',background:'red',padding:10,border:'none',cursor :'pointer'}} disabled={counter === 0} onClick={()=>{
                if(counter > 0){
                    setCounter(counter -1)
                }
            }}>-</button>
            <p>{counter}</p>
            <button style={{color:'white',background:'blue',padding:10,border:'none',cursor:'pointer'}} disabled={counter === 10} onClick={()=>{
                if(counter < 10){
                    setCounter(counter+1)
                }
            }}>+</button>
        </div>
    )
}
export default CounterApp;