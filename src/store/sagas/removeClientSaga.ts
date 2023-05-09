import axios from 'axios';
import { put } from '@redux-saga/core/effects';
import { removeClient } from '../actions/actions';
import { ClearClient } from './sagasActions/actions/clearClient';

export function* removeClientWorker({ payload }: ClearClient) {
    // @ts-ignore
    const token = yield JSON.parse(localStorage.getItem('token'));

    try {
        // @ts-ignore
        const { data } = yield axios.delete(`http://localhost:3333/clients/remove?id=${payload.id}`, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        });

        console.log('data', data);

        yield put(removeClient({ id: payload.id }));
    } catch (error: any) {
        console.warn(error);
    }
}
