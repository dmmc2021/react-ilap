import React from "react";



function NeoContacto(){
    return(
        <section className="pago" id="form-p">
                <div className="contenedorC">
        
                    <form action="" className="form">
                        <div className="container-genp">
                            <h2 className="titulop">Contáctanos</h2>
                            
                            <div className="container-1p">
                                <input className="inputp nombrep" type="text" placeholder="Nombre"></input>
                                <input className="inputp emailp" type="email" placeholder="Email"></input>
                            </div>
                            <div className="container-3p">
                                
                            <label htmlFor="">Pais</label>
                                <select name="pais" id="" className="input pais">
                                    
                                    <option value="+58" className="ven">Venezuela</option>
                                    <option value="+57">Colombia</option>
                                    <option value="+1">Panamá</option>
                                    <option value="+49">U.S.A.</option>
                                    <option value="+54">Argentina</option>
                                    <option value="+297">Aruba</option>
                                    <option value="+61">Australia</option>
                                    <option value="+591">Bolivia</option>
                                    <option value="+55">Brasil</option>
                                    <option value="+1">Canada</option>
                                    <option value="+56">Chile</option>
                                    <option value="+86">China</option>
                                    <option value="+506">Costa Rica</option>
                                    <option value="+53">Cuba</option>
                                    <option value="+599">Curazao</option>
                                    <option value="+593">Ecuador</option>
                                    <option value="+34">España</option>
                                    <option value="+503">El Salvador</option>
                                    <option value="+33">Francia</option>
                                    <option value="+502">Guatemala</option>
                                    <option value="+509">Haiti</option>
                                    <option value="+504">Honduras</option>
                                    <option value="+39">Italia</option>
                                    <option value="+1">Jamaica</option>
                                    <option value="+52">Mexico</option>
                                    <option value="+505">Nicaragua</option>
                                    <option value="+595">Paraguay</option>
                                    <option value="+51">Peru</option>
                                    <option value="+1-809">Rep. Dominicana</option>
                                    <option value="+55">Uruguay</option>
                                    <option value="+">Otros</option>
                                </select>

                                
                                <input type="text" placeholder="Escriba el telefono" className="input"/>
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
                                    <option value="">Certificacion en gestion de credito</option>
                                    <option value="">Finanzas cuantitativas</option>
                                    <option value="">Gerencia bancaria</option>
                                    <option value="">Gerencia integral de credito</option>
                                    <option value="">Gestion del presupuesto publico</option>
                                    <option value="">Gestion integral del talento humano</option>
                                    <option value="">Gestion de riesgo en instituciones financieras</option>
                                    <option value="">Instituciones financieras</option>
                                </select>
                                
                            </div>
                            <div className="boton-cont">

                            <input type="submit" className="cta btn-cont" />
                            </div>

                            
                            
                               </div>
                            </form>
                            </div>
                        </section>
                )
}

export default NeoContacto;

