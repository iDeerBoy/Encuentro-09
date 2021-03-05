import './componentes.css';
import './generales.css';

function Filtros(){
    return (
        <div className = "filtros">
                <input type="date"/>                
                <input type="date"/>
                <select name="categorias" id="categotias">
                    <option value="casa">casa</option>
                    <option value="acamica">acamica</option>
                    <option value="ocio">ocio</option>
                    <option value="estudios">estudios</option>
                </select>
                <select name="estado" id="estado">
                    <option value="completada">completada</option>
                    <option value="no completada">no completada</option>
                </select>
        </div>
    )
}

export default Filtros;