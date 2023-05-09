import axios from 'axios';
import { EditClient } from './sagasActions/actions/editClient';
import { put } from '@redux-saga/core/effects';
import { updateClient } from '../actions/actions';

export function* editClientWorker({ payload }: EditClient) {
    // @ts-ignore
    const token = yield JSON.parse(localStorage.getItem('token'));

    try {
        // @ts-ignore
        const { data } = yield axios.put('http://localhost:3333/clients/edit', payload, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        });

        console.log('data', data);

        yield put(updateClient(data.client));
    } catch (error: any) {
        console.warn(error);
    }
}
