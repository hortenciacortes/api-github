import { connect } from "react-redux";
import Menu from './Menu';
import Header from "./Header";

function Following({ user }) {
    return (
        <div>
            <Header qtd={user.following} name="Seguindo" />
            
            <div className="container">
            {user.following_avatar.map((element, i) => (
                <div key={i} className="container-follow">
                    <div className="container-yellow">
                        <div className="yellow-detail"></div>
                        <div className="infos-follow">
                            <img src={element} alt="avatar" />
                            <p>#{user.following_login[i]}</p>
                            <a href="/perfil">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <Menu />
        </div>
    )
}

export default connect(state => ({ user: state }))(Following)
