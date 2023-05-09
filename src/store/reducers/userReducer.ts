import { IClient } from '../../components/interfaces';
import { UserActions } from '../actions/actionsTypes';
import { ActionsType } from './types';

export interface IUserInitState {
    allClients: IClient[];
    modal: 'login' | 'logout' | 'add' | 'remove' | 'profile' | 'edit' | null;
    isLogged: boolean;
    login: string;
    currentClient: IClient;
}

const initialState: IUserInitState = {
    allClients: [],
    modal: null,
    isLogged: false,
    login: '',
    currentClient: {} as IClient,
};

export const userReducer = (state = initialState, action: ActionsType): IUserInitState => {
    switch (action.type) {
        case UserActions.SET_ALL_CLIENTS: {
            return { ...state, allClients: action.payload.allClients };
        }

        case UserActions.SET_MODAL: {
            return { ...state, modal: action.payload.modal };
        }

        case UserActions.SET_IS_LOGGED: {
            return { ...state, isLogged: action.payload.isLogged };
        }

        case UserActions.SET_USER_LOGIN: {
            return { ...state, login: action.payload.login };
        }

        case UserActions.SET_CURRENT_CLIENT: {
            return { ...state, currentClient: action.payload.currentClient };
        }

        case UserActions.ADD_NEW_CLIENT: {
            const { name, surname, id, phone, age } = action.payload;
            const newClient = {
                name,
                surname,
                id,
                phone,
                age,
            };

            return { ...state, allClients: [...state.allClients, newClient] };
        }

        case UserActions.UPDATE_CLIENT: {
            const { name, surname, id, phone, age } = action.payload;

            return {
                ...state,
                allClients: state.allClients.map((client) => {
                    if (id === client.id) {
                        return { ...client, name, surname, phone, age };
                    } else {
                        return client;
                    }
                }),
            };
        }

        case UserActions.REMOVE_CLIENT: {
            const { id } = action.payload;

            return { ...state, allClients: state.allClients.filter((client) => client.id !== id) };
        }

        default:
            return state;
    }
};
