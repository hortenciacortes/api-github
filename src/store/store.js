import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import history from '../routes/history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middlewares = [
    routerMiddleware(history)
]

const INITIAL_STATE = {
    name: 'HortenciaCorts',
    login: 'hortencia',
    avatar: '',
    email: 'hortencia.cortes@gmail.com',
    location: 'Porto Velho',
    followers: 0,
    following: 0,
    public_repos: 0,
    bio: 'Estudante de FrontEnd',
    repos_url: '',
    repos_name: [],
    repos_desc: [],
    repos_star: 0,
    followers_url: '',
    followers_login: [],
    followers_avatar: [],
    following_url: '',
    following_login: [],
    following_avatar: []
}
function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_USER':
            return {
                ...state,
                name: action.name,
                login: action.login,
                avatar: action.avatar,
                email: action.email,
                location: action.location,
                followers: action.followers,
                following: action.following,
                public_repos: action.public_repos,
                bio: action.bio,
                repos_url: action.repos_url,
                followers_url: action.followers_url,
                following_url: action.following_url
            }
        case 'ADD_REPOS':
            return {
                ...state,
                repos_name: action.repos_name,
                repos_desc: action.repos_desc,
                repos_star: action.repos_star
            }
        case 'ADD_FOLLOWERS':
            return {
                ...state,
                followers_login: action.followers_login,
                followers_avatar: action.followers_avatar,
            }
        case 'ADD_FOLLOWING':
            return {
                ...state,
                following_login: action.following_login,
                following_avatar: action.following_avatar,
            }
        default:
            return state
    }
}

const persistdReducer = persistReducer({
    key: 'root',
    storage
}, reducer)

export const store = createStore(connectRouter(history)(persistdReducer), applyMiddleware(...middlewares))
export const persistdStore = persistStore(store)