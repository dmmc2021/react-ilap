import React from "react"

export const Noticia = ({noticia})=>{
  const { titulo, autor, contenido, fecha, image} = noticia
  return ( 
    <div className="caja-not">
    <div className="caja1">
      <div className="title-not">
        <h2 className='titulo left'>{titulo}</h2>
      </div>

      <div className="body-not">
          <p className='parrafo'>{contenido}</p>
      </div>
        
        <div className='fmt-fecha'>
          <p><b>{autor}</b></p>
          <p><b>{fecha}</b></p>
        </div>
        </div>
        <div className="caja2">

        
        <div>
          <img className="img-not" src={image} alt='noticia' />
        </div>
        </div>

      </div>
     
    )
}



export default Noticia;