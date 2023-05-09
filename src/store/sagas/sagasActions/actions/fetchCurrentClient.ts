import { FETCH_CURRENT_CLIENT } from '../types';

export interface FetchCurrentClientPayloadType {
    id: string;
}

export const fetchCurrentClientAction = (payload: FetchCurrentClientPayloadType) => ({
    type: FETCH_CURRENT_CLIENT,
    payload,
});

export type FetchCurrentClient = {
    type: typeof FETCH_CURRENT_CLIENT;
    payload: FetchCurrentClientPayloadType;
};
