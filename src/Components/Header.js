import { Link } from "react-router-dom";
import './styles/Header.css';

function Header({ qtd, name }) {
    return (
        <header className="header">
            <Link to="/perfil">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
            </Link>
            <h2>{qtd} {name}</h2>
        </header>
    )
}

export default Header