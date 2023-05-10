import axios from 'axios';
import { EditClient } from './sagasActions/actions/editClient';
import { put } from '@redux-saga/core/effects';
import { updateClient } from '../actions/actions';
import { toast } from 'react-toastify';
import { errorOptions, successOptions } from '../../constants/options';

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

        yield put(updateClient(data.client));
        // @ts-ignore
        yield toast.success('This client was updated successfully', successOptions);
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!', errorOptions);
    }
}
