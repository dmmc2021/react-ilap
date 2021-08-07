import React from "react";
import Cursos from "../../components/Cursos/Cursos.jsx";
import Diplomados from "../../components/Diplomados/Diplomados.jsx";


function CursoDiplo(){
    return(
        
        <div className="cur-dip">
        <Cursos/>
        
        <Diplomados />
        </div>
    
    )
}

export default CursoDiplo;