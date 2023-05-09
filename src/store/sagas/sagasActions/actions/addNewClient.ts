import { ADD_CLIENT } from '../types';

export interface AddNewClientPayloadType {
    name: string;
    surname: string;
    age: string;
    phone: string;
}

export const addNewClientAction = (payload: AddNewClientPayloadType) => ({
    type: ADD_CLIENT,
    payload,
});

export type AddNewClient = {
    type: typeof ADD_CLIENT;
    payload: AddNewClientPayloadType;
};
