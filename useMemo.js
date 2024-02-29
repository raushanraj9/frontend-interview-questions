import React, { useState } from 'react'

function useMemo() {
    const [counterOne,setcounterOne]=useState(0);
    const [counterTwo,setcounterTwo]=useState(0);

  return (
    <>
    <button onClick={()=>setcounterOne(counterOne+1)}>CounterOne-{counterOne}</button>

    <button onClick={()=>setcounterTwo(counterTwo+1)}>CounterTwo-{counterTwo}</button>
    </>
  )
}

export default useMemo