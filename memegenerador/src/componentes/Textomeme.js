
import React, {useState} from 'react';
const Textomeme = ()=>{
    
    const{textomeme, setTextomeme}= useState();

   const textoIngresado =(e) =>{
        setTextomeme(e.target.value);
   }
    return (
    <div className = " text-center">
        <h1 className="mt-2 mb-3 text-center">Edita tu meme</h1>

        <h3 className=" mt-3 mb-3 text-center">Ingresa el texto para el meme</h3>
        <input onChange={textoIngresado} className="form-control w-50 m-auto d-block" type="text" placeholder="pon tu frase"name="memetexto" arial-label="default input example"></input>


    </div>
    )
};
export default Textomeme;