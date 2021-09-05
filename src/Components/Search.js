import { connect, useDispatch } from 'react-redux';
import { push } from 'connected-react-router';
const axios = require('axios')

function SearchH({ user }){
    const dispatch = useDispatch()
  // function searchRepos() {
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
        // dispatch(push('/repos'))
    })
  // }
  
  // function searchFollowers() {
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
        // dispatch(push('/followers'))
    })
  // }
  
  
  // function searchFollowing() {
    const loginFollowing = []
    const avatarFollowing = []
    console.log(user.following_url)
    const following = user.following_url.replace('{/other_user}', '')
    axios.get(`${following}`).then(response => {
        response.data.forEach(item => {
          loginFollowing.push(item.login)
          avatarFollowing.push(item.avatar_url)
        })
        dispatch({
            type: 'ADD_FOLLOWING',
            following_login: loginFollowing,
            following_avatar: avatarFollowing,
        })
        // dispatch(push('/following'))
    })
  // }
  // return ''
}

function Search({ user }){
  SearchH({ user })
  return ''
}

export default connect(state => ({ user: state }))(Search)