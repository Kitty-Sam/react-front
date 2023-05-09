import axios from 'axios';
import { LoginUser } from './sagasActions/actions/loginUser';
import { put } from '@redux-saga/core/effects';
import { setIsLogged, setUserLogin } from '../actions/actions';

export function* loginUserWorker({ payload }: LoginUser) {
    try {
        // @ts-ignore
        const { data } = yield axios.post('http://localhost:3333/user/login', payload);
        yield put(setIsLogged({ isLogged: true }));

        yield put(setUserLogin({ login: data.login }));

        yield localStorage.setItem('token', JSON.stringify(data.token));
        yield localStorage.setItem('currentUser', JSON.stringify(data.login));
    } catch (error: any) {
        console.warn(error);
    }
}
