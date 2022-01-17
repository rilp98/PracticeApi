import React,{ useState,useEffect } from 'react';
import './App.css';

function App() {
  const [state,setState]=useState('')
  const apiKey= 'cxMGkY9crQgci3JKCHv4YWxe86S6uk7D';
   
  useEffect(()=>{
    const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    peticion.then(resp =>resp.json())
            .then(({data})=>{
              setState(data.images.original.url)
              console.log(data.images.original.url)
              })
  });
  
  return (
    <div className="App">
      <img src={state} alt="imagen" />
    </div>
  )
}

export default App
