import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import { Col, Form , Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";





function Contacto(){
  const nombreRef= useRef();
  const emailRef= useRef();
  const tlfRef= useRef();
  const itemPaisRef= useRef();
  const itemCursoRef= useRef();
  const itemDiplomadoRef= useRef();
  const handlerOnChange=()=> {
    tlfRef.value = this.value;
    if((this.value).trim() !== '') {
      tlfRef.disabled = false;
    } else {
      tlfRef.disabled = true
    }
  }
  const handlerClick = () => {

  const contacto =
      [{
        id: uuidv4,
        nombre: nombreRef.current.value,
        email: emailRef.current.value,
        codigoArea: itemPaisRef.current.value,
        telefono: tlfRef.current.value,
        curso: itemCursoRef.current.value,
        diplomado: itemDiplomadoRef.current.value,
      }]
      console.log(JSON.stringify(contacto,null,2))


   
   
    /*tlfRef.onkeyup = function(e) {
      var nums_v = this.value.match(/\d+/g);
        if (nums_v != null) {
          this.value = '+'+((nums_v).toString().replace(/,/, ''));
        } else {
          this.value = itemPaisRef.value;
        }
    }*/

      nombreRef.current.value= "";
      emailRef.current.value= "";
      itemPaisRef.current.value= "";
      tlfRef.current.value= "";
      itemCursoRef.current.value= "";
      itemDiplomadoRef.current.value= "";
  };
    return(
        <footer id="contacto">
        <div className="contenedor redux">
            <h2 className="titulo">Contáctanos</h2>
            <Form>
              <Form.Group className='mb-3' controlId='formGroupNombre'>
                <Form.Label style={{ color: "#000000" }}>Nombre</Form.Label>
                <Form.Control type='text' placeholder='Ingrese nombre completo' ref={nombreRef} style={{ width: "100%" }} />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupEmail'>
                <Form.Label style={{ color: "#000000" }}>Email</Form.Label>
                <Form.Control type="email" placeholder='Ingrese email Ejemplo abc@xyz.xx' ref={emailRef} style={{ width: "100%" }} />
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGrroupCodigo" xs={2} md={2}>
                  <Form.Label style={{ color: "#000000" }}>Código de area</Form.Label>
                  <Form.Select aria-label="Default select example" ref={itemPaisRef} onChange={()=>handlerOnChange()} >
                    <option value="">Pais</option>
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
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId='formGroupTlf'>
                  <Form.Label style={{ color: "#000000" }}>Teléfono</Form.Label>
                  <Form.Control  type='text' placeholder='Ingrese teléfono. Ejemplo 1234567' ref={tlfRef} style={{ width: "100%" }} />
                </Form.Group>
              </Row>  
              <Form.Group className='mb-3' controlId='formGroupCursos'>
                <Form.Label style={{ color: "#000000" }}>Cursos</Form.Label>
                <Form.Select aria-label="Default select example" ref={itemCursoRef} style={{ width: "100%" }} >
                  <option value="">Seleccione un curso</option>
                  <option value="C001">Certificacion en gestion integral de credito</option>
                  <option value="C002">Contabilidad</option>
                  <option value="C003">Desarrollo personal - Laboral</option>
                  <option value="C004">Desarollo Supervisorio</option>
                  <option value="C005">Finanzas</option>
                  <option value="C006">Gestion integral del talento humano</option>
                  <option value="C007">Informatica</option>
                  <option value="C008">Seguridad y salud laboral</option>
                  <option value="C009">Legal</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className='mb-3' controlId='formGroupDiplomado'>
                <Form.Label style={{ color: "#000000" }}>Diplomados</Form.Label>
                <Form.Select aria-label="Default select example" ref={itemDiplomadoRef} style={{ width: "100%" }} >
                  <option value="">Seleccione un diplomado</option>
                  <option value="D001">Certificacion en gestion de credito</option>
                  <option value="D002">Finanzas cuantitativas</option>
                  <option value="D003">Gerencia bancaria</option>
                  <option value="D004">Gerencia integral de credito</option>
                  <option value="D005">Gestion del presupuesto publico</option>
                  <option value="D006">Gestion integral del talento humano</option>
                  <option value="D007">Gestion de riesgo en instituciones financieras</option>
                  <option value="D008">Instituciones financieras</option>
                </Form.Select>
              </Form.Group>
            </Form>
            <Button variant='primary' onClick={() => handlerClick()}>
            Enviar
            </Button> 
        </div>
        </footer>
    )
}

export default Contacto;