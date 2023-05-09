import { put } from '@redux-saga/core/effects';
import { setIsLogged, setUserLogin } from '../actions/actions';

export function* checkTokenWorker() {
    try {
        // @ts-ignore
        const token = yield JSON.parse(localStorage.getItem('token'));

        // @ts-ignore
        const currentUser = yield JSON.parse(localStorage.getItem('currentUser'));

        if (!token) {
            yield put(setIsLogged({ isLogged: false }));
            return;
        }

        yield put(setIsLogged({ isLogged: true }));
        yield put(setUserLogin({ login: currentUser }));
    } catch (error: any) {
        console.warn(error);
    }
}
