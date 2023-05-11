import { put } from '@redux-saga/core/effects';
import { setIsLogged } from '../actions/actions';
import { toast } from 'react-toastify';
import { errorOptions, successOptions } from '../../constants/options';

export function* logoutUserWorker() {
    try {
        yield put(setIsLogged({ isLogged: false }));
        yield localStorage.clear();

        // @ts-ignore
        yield toast.success('You successfully logged in', successOptions);
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!', errorOptions);
    }
}
