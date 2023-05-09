import axios from 'axios';
import { AddNewClient } from './sagasActions/actions/addNewClient';
import { put } from '@redux-saga/core/effects';
import { addNewClient } from '../actions/actions';

export function* addNewClientWorker({ payload }: AddNewClient) {
    // @ts-ignore
    const token = yield JSON.parse(localStorage.getItem('token'));

    try {
        // @ts-ignore
        const { data } = yield axios.post('http://localhost:3333/clients/add', payload, {
            headers: {
                Authorization: token,
                'Content-Type': 'application/json',
            },
        });

        console.log('data', data);

        yield put(addNewClient(data.client));
    } catch (error: any) {
        console.warn(error);
    }
}
