import {useState} from 'react'
export default function Counter(){
    
    const [counter,setCounter] = useState(0);

    const handleAdd = ()=>{
        let newCounter = counter + 1;
        setCounter(newCounter);
    }

    function handleReduce(){
        const newCounter = counter-1;
        setCounter(newCounter)
    }

    // console.log(counter);
    
    
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}