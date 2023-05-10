import axios from 'axios';
import { put } from '@redux-saga/core/effects';
import { removeClient } from '../actions/actions';
import { ClearClient } from './sagasActions/actions/clearClient';
import { toast } from 'react-toastify';
import { errorOptions, successOptions } from '../../constants/options';

export function* removeClientWorker({ payload }: ClearClient) {
    // @ts-ignore
    const token = yield JSON.parse(localStorage.getItem('token'));

    try {
        yield axios.delete(`http://localhost:3333/clients/remove?id=${payload.id}`, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        });

        // @ts-ignore
        yield toast.success('This client was removed successfully', successOptions);

        yield put(removeClient({ id: payload.id }));
    } catch (error: any) {
        yield toast.error('Something went wrong!', errorOptions);
        console.warn(error);
    }
}
