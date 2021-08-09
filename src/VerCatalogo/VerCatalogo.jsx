import React from "react";


export const VerCatalogo = ({cursos})=>{
  const { area, curso, modalidad, costo} = cursos
  
  return ( 
    
        <div className="catalogo">

            <h4 className="titl-area">Area de catalogo de cursos</h4>
            <ul>
                <li><h4>{area}</h4><br></br><h5>{curso}</h5> <b>Modalidad:</b> {modalidad} <b>Costo USD:</b> {costo}</li>
                
            </ul>
            </div>

           
       

        
    
    )
}



export default VerCatalogo;