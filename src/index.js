import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./components/Header/Header.jsx";
import Impulsa from "./components/Impulsa/Impulsa.jsx";
import Ofrecemos from "./components/Ofrecemos/Ofrecemos.jsx"
import Galeria from "./components/Galeria/Galeria.jsx"
import Inscribete from "./components/Inscribete/Inscribete.jsx"
import CrearNoticia from "./components/Noticia/CrearNoticia.jsx"
import Container from "./components/Container/Container.jsx"
import Contacto from "./components/Contacto/Contacto.jsx"
import CursoDiplo from "./components/CursoDiplo/CursoDiplo.jsx"
/*import Login from "./components/Menu/Login.jsx"*/
/*import ActzCatalogo from "./components/VerCatalogo/ActzCatalogo.jsx"*/
/*import ContainerCat from "./components/VerCatalogo/ContainerCat"*/
import Pago from "./components/Pago/Pago.jsx"

import "./css/estilo.css";
import './css/bootstrap.min.css';
import "./firebase/firebase"


const divRoot = document.querySelector("#root");

ReactDOM.render([<Header />,<Impulsa />, <Ofrecemos />, <CursoDiplo/>, <Galeria />, <Container />, <Inscribete />, <Contacto />, <CrearNoticia />, <Pago />], divRoot)
