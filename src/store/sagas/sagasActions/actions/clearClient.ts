import { CLEAR_CLIENT } from '../types';

export interface ClearClientPayloadType {
    id: string;
}

export const clearClientAction = (payload: ClearClientPayloadType) => ({
    type: CLEAR_CLIENT,
    payload,
});

export type ClearClient = {
    type: typeof CLEAR_CLIENT;
    payload: ClearClientPayloadType;
};
