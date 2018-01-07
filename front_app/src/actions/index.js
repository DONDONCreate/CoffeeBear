import axios from 'axios';
import * as types from './actionTypes';

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

// UserList取得成功
export function getUserSuccess(users) {
    return {
        type: 'GET_USER_SUCCESS',
        users
    };
}

// UserList取得
export function getUser() {
    return function(dispatch) {
        return axios
            .get('/users')
            .then(users => {
                dispatch(getUserSuccess(users.data));
                // console.warn(repos.data);
            })
            .catch(err => {
                throw err;
            });
    };
}

// User追加
export function createUser(text) {
    return function(dispatch) {
        return axios.post('/users', {
              is_payment: false,
              name: text
            },{
              headers: {'Content-Type': 'application/json'}
            })
            .then(user => {
                // dispatch(addUser(text));
                dispatch(getUser());
                console.warn(user);
            })
            .catch(err => {
                throw err;
            });
    };
}

// User情報変更(patch)
export function updateUser(id) {
    return function(dispatch) {
        return axios.patch('/users/' + id)
            .then(user => {
                // dispatch(addUser(text));
                dispatch(getUser());
                console.warn(user);
            })
            .catch(err => {
                throw err;
            });
    };
}

// User情報削除
export function deleteUser(id) {
    return function(dispatch) {
        return axios.delete('/users/' + id)
            .then(user => {
                // dispatch(addUser(text));
                dispatch(getUser());
                console.warn(user);
            })
            .catch(err => {
                throw err;
            });
    };
}
