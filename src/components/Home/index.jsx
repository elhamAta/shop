import React, { useState } from 'react'

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";

const Home = () => {
    const [number,setNumber] = useState()
    const handleNum = () =>{
      for (let i = 0; i < 100000000; i++){}
      return number * 2
    }
    
    return(
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <div>
                <input type="number" 
                value={number}
                onChange={(event) => {
                    setNumber(parseInt(event.target.value));
                }}
                style={{
                    width:'200px',
                    height:'100px',
                    border:'1px solid'
                }}
                />
                {handleNum()}
            </div>
        </div>
    )
}

export default Home