import React, { useState } from "react";
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './styles/Login.css'

function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [login, setLogin] = useState('')
  function pesquisar() {
    axios.get(`https://api.github.com/users/${login}`).then(response => {
      dispatch({
        type: 'ADD_USER',
        name: response.data.name,
        login: response.data.login,
        avatar: response.data.avatar_url,
        email: response.data.email,
        location: response.data.location,
        followers: response.data.followers,
        following: response.data.following,
        public_repos: response.data.public_repos,
        bio: response.data.bio,
        repos_url: response.data.repos_url,
        followers_url: response.data.followers_url,
        following_url: response.data.following_url,
      })
      history.push('/perfil')
    }).catch(() => {
      const message = document.querySelector('.message')
      message.innerHTML = 'Usuário Inválido'
    });
  }

  return (
    <div className="container-login">
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
      <input type="text" placeholder="Usuário" value={login} onChange={e => setLogin(e.target.value)} required />
      <small className="message"></small>
      <button className="login" onClick={pesquisar}>
        ENTRAR
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </button>
    </div>
  )
}

export default Login;
