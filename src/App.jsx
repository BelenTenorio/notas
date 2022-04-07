import { useState } from "react";

function App() {
  

  const[InputState, setInputSTate] = useState({
    titulo:"",
    fecha: "",
    nota:"",
  });


  const handleInputChange = (event) => {
    setInputSTate({
      ...InputState,
      [event.target.name]: event.target.value,
    });
  };

  const handleResetClick = () => {
    setInputSTate({titulo:"", fecha:"", nota:""});
  } 

  return (
    <div className="App">
      <h3>Notas</h3>
      <label htmlFor='Nota'>Notas</label>

      <input
      id='nota' 
      name='nota' 
      type="text" 
      onChange={handleInputChange}   
      value={InputState.nota} ></input>
    <label htmlFor='Fecha'>Fechas</label>
      <input 
      id='fecha' 
      name='fecha' 
      type="text" 
      onChange={handleInputChange}   
      value={InputState.fecha} ></input>
      <label htmlFor='Titulo'>Titulo</label>
 
      <input 
      id='titulo' 
      name='titulo' 
      type="text" 
      onChange={handleInputChange}   
      value={InputState.titulo} ></input>
        <button type="button" class="btn btn-primary" onClick={handleResetClick}>
        Eliminar
        </button>
    </div>
  );

  
}
export default App;
