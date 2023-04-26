import './styles/SearchIcon.css';
import { BiSearchAlt } from 'react-icons/bi';

export default function SearchIcon() {
    return (
        <div className="container">
            <div id='container-icon'><BiSearchAlt id='icon'/></div>
            <div>Pesquise alguma cidade na barra de pesquisa acima...</div>
        </div>
    );
}
