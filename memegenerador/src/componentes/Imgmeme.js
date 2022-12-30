

import html2canvas from 'html2canvas';
import React, {useState} from 'react';

const Imgmeme = ()=>{

    const{imgmemes, setImgmemes}= useState();
    
    const seleccionarImg = (e)=>{
        setImgmemes(e.target.value)
    }
    
    const exportar = (e) =>{
        html2canvas(document.querySelector("#exportarImg")).then(function(canvas) {
           // document.body.appendChild(canvas);
           let img = canvas.toDataURL("memes/jpg");
           let link= document.createElement("a");
           link.download="memepropio.jpg"
           link.href= img;
           link.click();
        });
    }
    
    return (
    <div className = " text-center">
       

        <h3 className=" mt-3 mb-3 text-center">elige un meme</h3>

        <select onChange={seleccionarImg} className="form-select form-selet-lg mb-3 w-50 m-auto" arial-label =".form-select-lg example" name="img">
            <option value={1}>incendio</option>
            <option value={2}>no entendi</option>
            <option value={3}>sorprendido</option>
            <option value={4}>homero</option>
            <option value={5}>jerry</option>
        </select>
        <figure className="text-center" id= "exportarImg">
            <p className="w-100 px-30 position-absolute top-50 start-30 hi text-center"></p>
            <img src={`./memes/${imgmemes}.jpg`}className="figure-img img-fluid mt-3 d-block m-auto" alt="meme"/>

        </figure>

        <button onClick={exportar} type="button" className="btn btn-primary mt-4 mb-4 m-auto">Descargar meme</button>
    </div>
    );
};
export default Imgmeme;