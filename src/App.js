import './App.css';
import './Componentes/componentes.css';
import './Componentes/generales.css';
import Header from "./Componentes/header.jsx";
import Filtros from "./Componentes/filtros.jsx";
//import Resultados from "./Componentes/resultados.jsx";
import Pendientes from "./Componentes/pendientes.jsx";
import tareas from "./Componentes/tareas.jsx"

document.body.style.backgroundColor = "#dbeeff";

function App() {
  return (
    <div className = "App">
      <Header />
      <Filtros />
      <div className = "resultados">
            {/* {tareas.map(i =>{
              <Pendientes tareas = {i}/>
            })} */}

            <Pendientes tareas = {tareas[0]}/>
            <Pendientes tareas = {tareas[1]}/>
            <Pendientes tareas = {tareas[2]}/>
            <Pendientes tareas = {tareas[3]}/>
            <Pendientes tareas = {tareas[4]}/>
            <Pendientes tareas = {tareas[5]}/>
            <Pendientes tareas = {tareas[6]}/>
      </div>
    </div>
  );
}

export default App;
