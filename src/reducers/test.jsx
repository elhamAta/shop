import { func } from "prop-types";
import React from "react";
import { createStore } from 'redux'


// const createStore = (reducer) => {
//     let state
//     let listeners =[]

//     const dispatch = (action) => {
//         state = reducer(state,action)
//         listeners.forEach(listener => listener())
//     }

//     const getState = () => state

//     const subscribe = (listener) => { //هرموقع تغییری در stateداشته باشیم listenerاجرا میشه 
//         listeners.push(listener)
//         return() => (
//             listeners = listeners.filter(l => l !== listener)
//         )
//     }
//     dispatch({})
    
//     return{dispatch,getState,subscribe}
// }

function counter ( state = 0, action){
    switch (action.type) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
    
        default:
           return state
    }
}
const store = createStore(counter)



function Counter({value,onIncrement,onDecrement}) {
    return(
        <>
        <p>{value}</p>
        <div style={{
            
        }}>

        </div>
        <button className="btn" onClick={onIncrement}>increment</button>
        <button className="btn" onClick={onDecrement}>onDecrement</button>
        </>
    ) 
}

const Test = () =>{
    return(
        <div className="main">  
            <h1>counter</h1>
            <Counter value={store.getState()}
                    onIncrement={()=> store.dispatch({type:'increment'})}
                    onDecrement={()=> store.dispatch({type:'decrement'})}
             />
        </div>
        
    )
    
}
const unsubscribe = store.subscribe(()=> console.log(store.getState()))
unsubscribe()
export default Test