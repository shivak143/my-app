import { useMemo, useState } from "react"

export function MemoHook(){

    let [counter,setCounter] = useState(1);
    let num1 = 20
    let num2 = 50

    let sum = useMemo(
        ()=>{
            console.log("memo hook is called")
            return num1 + num2
        },[num1,num2]
    )
return(
    <>
    <h2>Memo Hook</h2>
    <p>sum : {sum}</p>
    <p>counter : {counter}</p>
    <button onClick={()=>{
        setCounter(counter+1)
    }}>update</button>
    </>
)
}