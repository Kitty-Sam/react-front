import { EDIT_CLIENT } from '../types';

export interface EditClientPayloadType {
    name: string;
    surname: string;
    age: string;
    phone: string;
    id: string;
}

export const editClientAction = (payload: EditClientPayloadType) => ({
    type: EDIT_CLIENT,
    payload,
});

export type EditClient = {
    type: typeof EDIT_CLIENT;
    payload: EditClientPayloadType;
};
