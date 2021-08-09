import React from "react";
import Button from 'react-bootstrap/Button';
import { FaFeatherAlt } from 'react-icons/fa';
import { FaRegClone } from 'react-icons/fa';

function Ofrecemos(){
    return(
        <section className="cards contenedor">
        <h2 className="titulo">Te ofrecemos:</h2>
        <div className="content-cards">
            <article className="card">
                <FaRegClone className="pluma"/>
                <h3>Cursos</h3>
                <p>Ofrecemos el diseño, la coordinación y la ejecución de cursos, conferencias y programas de adiestramiento</p>
                <Button variant="outline-primary" href="#cursos" size="lg" className="botonCard">+ info</Button>
            </article>
            <article className="card">
                <FaFeatherAlt className="pluma"/>
                <h3>Diplomados</h3>
                <p>Nuestros diplomados avalados por la Universidad Central de Venezuela (UCV) se certifican mediante evaluacion continua</p>
                <Button variant="outline-primary" href="#diplomado" size="lg" className="botonCard">+ info</Button>
            </article>
        </div>
    </section>
   
    
    
        
    )
}

export default Ofrecemos;