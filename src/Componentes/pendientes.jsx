import './componentes.css';
import './generales.css';

function Pendientes(props) {
    return (
        <div className = "pendientes">
            <div className = "info-pendientes">
                <h4>{props.tareas.nombre}</h4>
                <p>{props.tareas.fecha}</p>
                <p>categoria:</p>
                <span>{props.tareas.categoria}</span>
            </div>
            <div className = "check">
                <input type="checkbox"/>
            </div>
        </div>
    )
};

export default Pendientes;