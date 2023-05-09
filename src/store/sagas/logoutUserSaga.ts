import { put } from '@redux-saga/core/effects';
import { setIsLogged } from '../actions/actions';

export function* logoutUserWorker() {
    try {
        yield put(setIsLogged({ isLogged: false }));
        yield localStorage.clear();
    } catch (error: any) {
        console.warn(error);
    }
}
