import './Perfil.css';
import { connect, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
import { Link } from 'react-router-dom';
const axios = require('axios')

function Perfil({ user }) {
    const dispatch = useDispatch()

    function searchRepos() {
        const names = []
        const descriptions = []
        const stars = []
        axios.get(`${user.repos_url}`).then(response => {
            response.data.forEach(item => {
                names.push(item.name)
                descriptions.push(item.description)
                stars.push(item.stargazers_count)
            })
            dispatch({
                type: 'ADD_REPOS',
                repos_name: names,
                repos_desc: descriptions,
                repos_star: stars
            })
            dispatch(push('/repos'))
        })
    }

    function searchFollowers() {
        const login = []
        const avatar = []
        axios.get(`${user.followers_url}`).then(response => {
            console.log(response.data)
            response.data.forEach(item => {
                login.push(item.login)
                avatar.push(item.avatar_url)
            })
            dispatch({
                type: 'ADD_FOLLOWERS',
                followers_login: login,
                followers_avatar: avatar,
            })
            dispatch(push('/followers'))
        })
    }


    function searchFollowing() {
        const login = []
        const avatar = []
        console.log(user.following_url)
        const following = user.following_url.replace('{/other_user}', '')
        axios.get(`${following}`).then(response => {
            response.data.forEach(item => {
                login.push(item.login)
                avatar.push(item.avatar_url)
            })
            dispatch({
                type: 'ADD_FOLLOWING',
                following_login: login,
                following_avatar: avatar,
            })
            dispatch(push('/following'))
        })
    }

    return (
        <div className="container-user">
            <header className="header-perfil">
                <small className="user">#{user.login}</small>
                <Link to="/">
                    Sair
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                </Link>
            </header>
            <img src={user.avatar} alt="avatar" />
            <div className="infos-user">
                <div className="container-yellow">
                    <div className="yellow-detail"></div>
                    <h2>{user.name.toUpperCase()}</h2>
                </div>
                <p>{user.email}</p>
                <p>{user.location}</p>
            </div>
            <div className="infos-account">
                <Link to="followers" onClick={searchFollowers}>
                    <h3>{user.followers}</h3>
                    <p>Seguidores</p>
                </Link>
                <Link to="/following" onClick={searchFollowing}>
                    <h3>{user.following}</h3>
                    <p>Seguindo</p>
                </Link>
                <Link to="/repos" onClick={searchRepos}>
                    <h3>{user.public_repos}</h3>
                    <p>Repos</p>
                </Link>
            </div>
            <div className="infos-bio">
                <div className="container-yellow">
                    <div className="yellow-detail"></div>
                    <h2>BIO</h2>
                </div>
                <p>{user.bio}</p>
            </div>
        </div>
    )
}
export default connect(state => ({ user: state }))(Perfil)