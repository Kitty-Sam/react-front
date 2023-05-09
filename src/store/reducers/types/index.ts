import { IClient } from '../../../components/interfaces';
import { UserActions } from '../../actions/actionsTypes';

export interface SetAllClientPayload {
    allClients: IClient[];
}

export type SetAllClients = {
    type: typeof UserActions.SET_ALL_CLIENTS;
    payload: SetAllClientPayload;
};

export interface SetModalPayload {
    modal: 'login' | 'logout' | 'add' | 'remove' | 'profile' | 'edit' | null;
}

export type SetModal = {
    type: typeof UserActions.SET_MODAL;
    payload: SetModalPayload;
};

export interface SetIsLoggedPayload {
    isLogged: boolean;
}

export type SetIsLogged = {
    type: typeof UserActions.SET_IS_LOGGED;
    payload: SetIsLoggedPayload;
};

export interface SetUserLoginPayload {
    login: string;
}

export type SetUserLogin = {
    type: typeof UserActions.SET_USER_LOGIN;
    payload: SetUserLoginPayload;
};

export interface SetCurrentClientPayload {
    currentClient: IClient;
}

export type SetCurrentClient = {
    type: typeof UserActions.SET_CURRENT_CLIENT;
    payload: SetCurrentClientPayload;
};

export interface AddNewClientPayload {
    name: string;
    surname: string;
    id: string;
    phone: string;
    age: string;
}

export type AddNewClient = {
    type: typeof UserActions.ADD_NEW_CLIENT;
    payload: AddNewClientPayload;
};

export interface RemoveClientPayload {
    id: string;
}

export type RemoveClient = {
    type: typeof UserActions.REMOVE_CLIENT;
    payload: RemoveClientPayload;
};

export interface UpdateClientPayload {
    name: string;
    surname: string;
    id: string;
    phone: string;
    age: string;
}

export type UpdateClient = {
    type: typeof UserActions.UPDATE_CLIENT;
    payload: UpdateClientPayload;
};

export type ActionsType =
    | SetAllClients
    | SetModal
    | SetIsLogged
    | SetUserLogin
    | AddNewClient
    | RemoveClient
    | SetCurrentClient
    | UpdateClient;
