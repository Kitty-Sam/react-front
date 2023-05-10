import axios from 'axios';
import { FetchCurrentClient } from './sagasActions/actions/fetchCurrentClient';
import { put } from '@redux-saga/core/effects';
import { setCurrentClient } from '../actions/actions';
import { toast } from 'react-toastify';
import { errorOptions } from '../../constants/options';

export function* fetchCurrentClientWorker({ payload }: FetchCurrentClient) {
    try {
        // @ts-ignore
        const token = yield JSON.parse(localStorage.getItem('token'));

        const { data } = yield axios.post(
            'http://localhost:3333/clients/get',
            { id: payload.id },
            {
                headers: {
                    Authorization: token,
                    'Content-Type': 'application/json',
                },
            },
        );

        yield put(setCurrentClient({ currentClient: data.client }));
    } catch (error: any) {
        console.warn(error);
        yield toast.error('Something went wrong!', errorOptions);
    }
}
