import './styles/Repositorios.css';
import Menu from './Menu';
import Header from './Header';  
import { connect } from "react-redux";

function Repositorio({ user }) {
    return (
        <div>
            <Header qtd={user.public_repos} name="Repositórios" />
            
            <div className="container">
            {user.repos_name.map((element, i) => (
                <div key={i} className="container-repos">
                    <div className="container-yellow">
                        <div className="yellow-detail"></div>
                        <h4>{element}</h4>
                    </div>
                    <p>{user.repos_desc[i]}</p>
                    <div className="icons-repos">
                        <div className="star-repos">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            <p>{user.repos_star[i]}</p>
                        </div>
                        <div className="un-lock">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-unlock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <Menu />
        </div>
    )
}

export default connect(state => ({ user: state }))(Repositorio)
