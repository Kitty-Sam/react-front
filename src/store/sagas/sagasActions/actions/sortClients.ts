import { SORT_CLIENTS } from '../types';
import { IClient } from '../../../../components/interfaces';

export interface SortClientsPayloadType {
    search: string;
    sortType: string;
    selectedValue: string;
    clients: IClient[];
}

export const sortClientsAction = (payload: SortClientsPayloadType) => ({
    type: SORT_CLIENTS,
    payload,
});

export type SortClients = {
    type: typeof SORT_CLIENTS;
    payload: SortClientsPayloadType;
};
