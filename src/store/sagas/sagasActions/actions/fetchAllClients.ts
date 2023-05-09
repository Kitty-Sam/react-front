import { FETCH_ALL_CLIENTS } from '../types';

export const fetchAllClientsAction = () => ({
    type: FETCH_ALL_CLIENTS,
});

export type FetchAllClients = {
    type: typeof FETCH_ALL_CLIENTS;
};
