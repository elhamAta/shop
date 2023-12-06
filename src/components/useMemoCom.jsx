import React, { useState } from 'react'

function useMemo() {
    const [number,setNumber] = useState()
    const handleNum = () =>{
      for (let i = 0; i < 100000; i++){}
      return number * 2
    }
  return (
    <div>
        <input type="text" 
          value={number}
          onChange={(event) => {
            setNumber(parseInt(event.target.value));
          }}
         />
         {handleNum}
    </div>
  )
}

export default useMemo