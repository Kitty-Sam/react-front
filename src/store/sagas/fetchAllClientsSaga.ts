import { put } from '@redux-saga/core/effects';
import { setAllClients } from '../actions/actions';
import axios from 'axios';

export function* fetchAllClientsWorker() {
    try {
        // @ts-ignore
        const { data } = yield axios.get('http://localhost:3333/clients');
        yield put(setAllClients({ allClients: data.clients }));
    } catch (error: any) {
        console.warn(error);
    }
}
