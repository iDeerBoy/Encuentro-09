import './componentes.css';
import './generales.css';

function Header (){
    return (
        <div className = "header">            
            <h1>Taskinator</h1>
            <ul>
                <li><input type="text" placeholder="texto" /></li>
                <li><input type="text" placeholder="texto" /></li>
                <li><input type="text" placeholder="texto" /></li>
            </ul>
        </div>
    )
}

export default Header;