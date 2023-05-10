import { SortClients } from './sagasActions/actions/sortClients';
import { put } from '@redux-saga/core/effects';
import { setAllClients } from '../actions/actions';

export function* sortClientsWorker({ payload }: SortClients) {
    const { selectedValue, sortType, clients } = payload;

    if (sortType === 'Ask' && selectedValue === 'Name') {
        const sortedClients = clients.sort((a: any, b: any) => a.name.localeCompare(b.name));
        yield put(setAllClients({ allClients: sortedClients }));
        return;
    }

    if (sortType === 'Dsk' && selectedValue === 'Name') {
        const sortedClients = clients.sort((a: any, b: any) => b.name.localeCompare(a.name));
        yield put(setAllClients({ allClients: sortedClients }));
        return;
    }

    yield put(setAllClients({ allClients: clients }));

    try {
    } catch (error: any) {
        console.warn(error);
    }
}
