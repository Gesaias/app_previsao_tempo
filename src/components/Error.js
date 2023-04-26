import './styles/Error.css';
import { VscError } from 'react-icons/vsc';

const Error = () => {
    return (
        <div className="container">
            <div id='container-icon' style={{ backgroundColor: 'red' }}><VscError id='icon' /></div>
            <div>Cidade não encontrada! Revise e tente pesquisar novamente.</div>
        </div>
    );
};

export default Error;
