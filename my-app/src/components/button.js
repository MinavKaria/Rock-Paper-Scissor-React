import { useState } from 'react';
export default function Button()
{
    const [count, setCount] = useState(0);
    function handleClick() 
    {
        setCount(count + 1);
    }
    function handleClickminus() 
    {
        setCount(count - 1);
    }
    return(
        <div>
            <button onClick={handleClick}>Increase</button>
            <button onClick={handleClickminus}>Decrease</button>
            <br></br>
            <h1>{count}</h1>
        </div>
        
       
        
          
    );
}