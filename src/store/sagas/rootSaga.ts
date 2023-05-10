import { takeLatest } from '@redux-saga/core/effects';
import {
    ADD_CLIENT,
    CHECK_TOKEN,
    CLEAR_CLIENT,
    EDIT_CLIENT,
    FETCH_ALL_CLIENTS,
    FETCH_CURRENT_CLIENT,
    LOGIN_USER,
    LOGOUT_USER,
    SORT_CLIENTS,
} from './sagasActions/types';
import { fetchAllClientsWorker } from './fetchAllClientsSaga';
import { loginUserWorker } from './loginUserSaga';
import { addNewClientWorker } from './addNewClientSaga';
import { checkTokenWorker } from './checkTokenSaga';
import { logoutUserWorker } from './logoutUserSaga';
import { removeClientWorker } from './removeClientSaga';
import { fetchCurrentClientWorker } from './fetchCurrentClientSaga';
import { editClientWorker } from './editClientSaga';
import { sortClientsWorker } from './sortClientsSaga';
export function* watchClickSaga() {
    yield takeLatest(FETCH_ALL_CLIENTS, fetchAllClientsWorker);
    yield takeLatest(LOGIN_USER, loginUserWorker);
    yield takeLatest(ADD_CLIENT, addNewClientWorker);
    yield takeLatest(CHECK_TOKEN, checkTokenWorker);
    yield takeLatest(LOGOUT_USER, logoutUserWorker);
    yield takeLatest(CLEAR_CLIENT, removeClientWorker);
    yield takeLatest(FETCH_CURRENT_CLIENT, fetchCurrentClientWorker);
    yield takeLatest(EDIT_CLIENT, editClientWorker);
    yield takeLatest(SORT_CLIENTS, sortClientsWorker);
}

export default function* rootSaga() {
    yield watchClickSaga();
}
