import React from "react";
import Button from 'react-bootstrap/Button';


function Pago(){
    return(
        <section className="pago" id="form-p">
                <div className="contenedorp">
        
                    <form action="" className="form">
                        <div className="container-genp">
                            <h2 className="titulop">Notificación de pago</h2>
                            
                            <div className="container-1p">
                                <input className="inputp nombrep" type="text" placeholder="Nombre"></input>
                                <input className="inputp emailp" type="email" placeholder="Email"></input>
                            </div>
                            <div className="container-2p">
                               
                                
                                <label className="cursop" for="curso">Selección de Curso</label>
                                
                                <select className="inputp">
                                    <option value="">Certificacion en gestion integral de credito</option>
                                    <option value="">Contabilidad</option>
                                    <option value="">Desarrollo personal - Laboral</option>
                                    <option value="">Desarollo Supervisorio</option>
                                    <option value="">Finanzas</option>
                                    <option value="">Gestion integral del talento humano</option>
                                    <option value="">Informatica</option>
                                    <option value="">Seguridad y salud laboral</option>
                                    <option value="">Legal</option>
                                </select>
            
                                <label className="diplomadop" for="diplomado">Seleccion de Diplomado</label>
                                
                                <select  className="inputp" id="diplomado">
                                    <label for=""><option value="">Certificacion en gestion de credito</option></label>
                                    <label for=""><option value="">Finanzas cuantitativas</option></label>
                                    <label for=""><option value="">Gerencia bancaria</option></label>
                                    <label for=""><option value="">Gerencia integral de credito</option></label>
                                    <label for=""><option value="">Gestion del presupuesto publico</option></label>
                                    <label for=""><option value="">Gestion integral del talento humano</option></label>
                                    <label for=""><option value="">Gestion de riesgo en instituciones financieras</option></label>
                                    <label for=""><option value="">Instituciones financieras</option></label>
                                </select>
                                
                            </div>
                                <label  for="banco" className="banc">Banco</label>
                            
                            <div className="container-3p">
                                <div className="b1">
                                <select className="inputp banco">
                                    <option value="">Banesco</option>
                                    <option value="">Mercantil</option>
                                    <option value="">Venezuela</option>
                                    <option value="">B.O.D.</option>
                                    <option value="">Bicentenario</option>
                                    <option value="">Banco Nacional de Credito</option>
                                   </select>
                                </div>

                                <div className="b2">
                                    <input className="inputp mont" type="number" placeholder="Monto"></input>
                                
                                    <input className="inputp ref" type="number" placeholder="Referencia"></input>
                                </div>
                            </div>
                                 <div className="container-4p">
                                 <input type="submit" className="cta" />
                               </div> 
                            </div>
                    </form>
                </div>
            </section>
   
    
        
    )
}

export default Pago;