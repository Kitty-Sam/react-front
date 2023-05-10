import axios from 'axios';
import { AddNewClient } from './sagasActions/actions/addNewClient';
import { put } from '@redux-saga/core/effects';
import { addNewClient } from '../actions/actions';
import { errorOptions, successOptions } from '../../constants/options';
import { toast } from 'react-toastify';

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

        yield put(addNewClient(data.client));
        // @ts-ignore
        yield toast.success('New client was added successfully', successOptions);
    } catch (error: any) {
        yield toast.error('Something went wrong!', errorOptions);
        console.warn(error);
    }
}
