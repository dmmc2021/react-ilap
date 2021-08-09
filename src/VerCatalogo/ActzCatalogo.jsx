import { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import store from "../../firebase/firebase.js";



const ActzCatalogo = () => {
  
  
  const areaRef = useRef();
  const cursoRef = useRef();
  const costoRef = useRef();
  const modalidadRef = useRef();
  

  const handlerClick = () => {

    const  cursos =
      {
       
        area: areaRef.current.value,
        curso: cursoRef.current.value,
        costo: costoRef.current.value,
        modalidad: modalidadRef.current.value,
        
      }
      
      
    store.collection("cursos").add({
        
    area: areaRef.current.value,
    curso: cursoRef.current.value,
    costo: costoRef.current.value,
    modalidad: modalidadRef.current.value,
        
    })
    .then(() => {
        alert("Curso cargado con exito!");
    })
    .catch((error) => {
        alert("Error cargar: ", error);
    });

      
      
      areaRef.current.value = "";
      cursoRef.current.value = "";
      costoRef.current.value = "";
      modalidadRef.current.value = "";
      
};
  return (
    <section className='actz-cur' >
      <div className='contenedor'>
        <div>
          <h2>Pruebas actualizacion de cursos</h2>
        </div>
        <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
          <Form>
            
            <Form.Group className='mb-3' controlId='formGroupArea'>
              <Form.Label style={{ color: "#000000" }}>Area</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el area del curso' ref={areaRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupcurso'>
              <Form.Label style={{ color: "#000000" }}>curso</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el curso' ref={cursoRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupmodalidad'>
              <Form.Label style={{ color: "#000000" }}>Modalidad</Form.Label>
              <Form.Control type='text' placeholder='Ingrese presencial o virtual' ref={modalidadRef} style={{ width: "100%" }} />
            </Form.Group>
            <Form.Group className='mb-3' controlId='formGroupCosto'>
              <Form.Label style={{ color: "#000000" }}>Costo</Form.Label>
              <Form.Control type='text' placeholder='Ingrese el costo' ref={costoRef} style={{ width: "100%" }} />
            </Form.Group>
                        
           
          </Form>
          <Button variant='primary' onClick={() => handlerClick()}>
            agregar cambio
          </Button>
        </div>
      </div>
    </section>
  );
};
export default ActzCatalogo;
