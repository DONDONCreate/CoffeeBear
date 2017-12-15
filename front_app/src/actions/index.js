import axios from 'axios';
import * as types from './actionTypes';

let nextTodoId = 0
export const addUser = (text) => ({
    type: 'ADD_USER',
    id: nextTodoId++,
    status: 'Employee',
    text
})

export function loadReposSuccess(repos) {
    return {
        type: types.LOAD_REPOS_SUCCESS,
        repos
    };
}

export default function loadRepos() {
    return function(dispatch) {
        return axios
            .get('https://api.github.com/users/DDCreationStudios/repos')
            .then(repos => {
                dispatch(loadReposSuccess(repos.data));
                // console.warn(repos.data);
            })
            .catch(err => {
                throw err;
            });
    };
}
