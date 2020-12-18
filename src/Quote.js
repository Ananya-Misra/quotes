import React from 'react';
import axios from "axios";
import {useState} from "react";
import "./App.css"
function Quote(){
    const [state,setState]=useState({states:'Click the button'})
    // console.log(state.states);
    // console.log("hii");
    // console.log("why follow me")
    
   const fetchAdvice=()=>
    {
        axios.get('https://api.adviceslip.com/advice').then((response)=>{
            const{advice}=response.data.slip;
             console.log(advice);
            setState({states:advice});
             
        })
        .catch((error)=>{
            console.log(error);
        });

    };
    
    return(
        <>
          <div className="app">
                <div className="card"><h1 className="quote">{state.states}</h1>
                <button onClick={fetchAdvice}>New quote!!!</button>
                </div>
            </div>
        </>
    );
}
export default Quote;