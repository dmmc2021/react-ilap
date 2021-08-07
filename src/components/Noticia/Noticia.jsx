import React from "react"

export const Noticia = ({noticia})=>{
  const { titulo, autor, contenido, fecha, image} = noticia
  return ( 
    <section className='info-last'>
      <div className='contenedor last-section'>
        <div className='contenedor-textos-main'>
          <h2 className='titulo left'>{titulo}</h2>
          <p className='parrafo'>{contenido}</p>
        </div>
        <div className='fmt-fecha'>
          <div>{autor}</div>
          <div>{fecha}</div>
        </div>
        <img src={image} alt='noticia' />
      </div>
    </section>
    )
}



export default Noticia;