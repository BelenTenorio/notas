import { useState } from "react";
function App() {
  //Declaración de state: "hooks"
  const [inputState, setInputState] =  useState({
    titulo: "",
    fecha: "",
    nota: "",
  }); //valor inicial del State


  const initialState = JSON.parse (localStorage.getItem("notas")) || [];

  const [notas, setNotas] = useState(initialState);


  const handleInputChange= (event) => { 
    setInputState({
    ...inputState,
    [event.target.name]: event.target.value,
    });
   };
 //botón limpiar
  const handleInputClean = () => { 
    setInputState({
        titulo: "",
        fecha: "",
        nota: "",
    });
   }; 

   let arregloNotas = JSON.parse(localStorage.getItem("notas")) || [];

   const handleClickGuardar = () =>{
    setNotas([...notas, inputState])
    localStorage.setItem("notas", JSON.stringify(notas));
    handleInputClean();
   };

   const handleBorrarNota = (index) => {
    const nuevoArreglo = [];
    arregloNotas.ForEach((nota, i) => {
      if (i !== index){
        nuevoArreglo.push(nota);
      }
    });
    localStorage.setItem("notas", JSON.stringify(nuevoArreglo));
    arregloNotas = [...nuevoArreglo];
   };

   const handleClickLimpiarLista = () => {
    setNotas([]);
    localStorage.setItem("notas",JSON.stringify([]));
  }

  return (
    <div className="App container">
      <div className="row"> 
        <div className="col"> 
            <h3>Lista</h3> 
            {
              arregloNotas.length === 0 &&
              "No hay notas"
            }
            {
              arregloNotas.length !== 0 && ( 
              <ol>
              {arregloNotas.map((item)=>{
                return(
                <li> {item.titulo}({item.fecha})&nbsp;
                <i class="bi bi-x-circle-fill"
                onClick={handleBorrarNota}
                style={{
                  color: "red",
                  fontSize: "0.75rem",
                  cursor: "pointer",
                }}></i>
                </li> 
                );
              })}
                </ol>
            )}



              <button
              type="button"
              className="btn btn-primary"
              onClick={handleClickLimpiarLista}
              disabled={notas.length === 0}
              >
                Limpiar Lista
              </button>




        </div>
        <div className="col">
      <h3>Notas</h3>
      <label className="mb-2" style={{ width:"100%" }}>
        Título 
          <input 
            id="titulo" 
            name="titulo" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.titulo}
            style={{ width:"100%" }} 
            />
      </label>   
      <br />    
      <label className="mb-2" style={{ width:"100%" }}>
        Fecha
          <input 
            id="fecha" 
            name="fecha" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.fecha} 
            style={{ width:"100%" }}
            />          
      </label>
      <br />
      <label className="mb-2" style={{ width:"100%" }}>
        Nota
          <input 
            id="nota" 
            name="nota" 
            type="text" 
            onChange={handleInputChange}
            value={inputState.nota} 
            style={{ width:"100%" }}
            />          
      </label>
      <hr />         
    <div className="mt-2 me-2 mt-2 row">
      <div className="col"> 
      <span className="row me-1">
        <button 
            type="button"
            className="btn btn-primary" 
            onClick={handleInputClean}
        >
            Limpiar
        </button> 
      </span>
      </div>
    <div className="col">
      <span className="row ms-1">   
        <button 
            type="button" 
            className="btn btn-primary" 
            onClick={handleClickGuardar}
            disabled={
              inputState.titulo === "" ||
              inputState.fecha === "" ||
              inputState.nota === "" 
            }
        >
        Guardar
      </button>
      </span>
    </div>

    </div>      
    </div>
    </div>


    </div>
  );
}

export default App;