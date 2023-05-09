import { UserActions } from '../actionsTypes';
import {
    SetIsLoggedPayload,
    SetAllClientPayload,
    SetModalPayload,
    SetUserLoginPayload,
    AddNewClientPayload,
    RemoveClientPayload,
    SetCurrentClientPayload,
    UpdateClientPayload,
} from '../../reducers/types';

export const setAllClients = (payload: SetAllClientPayload) => ({
    type: UserActions.SET_ALL_CLIENTS,
    payload,
});

export const setModal = (payload: SetModalPayload) => ({
    type: UserActions.SET_MODAL,
    payload,
});

export const setCurrentClient = (payload: SetCurrentClientPayload) => ({
    type: UserActions.SET_CURRENT_CLIENT,
    payload,
});

export const setIsLogged = (payload: SetIsLoggedPayload) => ({
    type: UserActions.SET_IS_LOGGED,
    payload,
});

export const setUserLogin = (payload: SetUserLoginPayload) => ({
    type: UserActions.SET_USER_LOGIN,
    payload,
});

export const addNewClient = (payload: AddNewClientPayload) => ({
    type: UserActions.ADD_NEW_CLIENT,
    payload,
});

export const removeClient = (payload: RemoveClientPayload) => ({
    type: UserActions.REMOVE_CLIENT,
    payload,
});

export const updateClient = (payload: UpdateClientPayload) => ({
    type: UserActions.UPDATE_CLIENT,
    payload,
});
