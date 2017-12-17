import axios from 'axios';
import * as types from './actionTypes';

// User追加アクション
let nextTodoId = 0
export const addUser = (text) => ({
    type: 'ADD_USER',
    id: nextTodoId++,
    status: false,
    text
})

export function removeUsers(id) {
    return {
        type: 'REMOVE_USERS',
        id
    };
}

export function changeUserStatus(id) {
    return {
        type: 'CHANGE_USER_STATUS',
        id
    };
}

// ロードが完了した時に呼ばれるアクション
export function loadReposSuccess(repos) {
    return {
        type: types.LOAD_REPOS_SUCCESS,
        repos
    };
}

// 実際にGETを行い，データを取ってくるアクション
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
