import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router';
import axios from "axios";

function Pesquisar(login) {
    const history = useHistory()
    const dispatch = useDispatch()
    useEffect(() => {
        if (login != undefined) {
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
                console.log('errouuuuuu')
            })
        }
    })
}

export default Pesquisar
