import { AppStoreType } from '../reducers/rootReducer';

export const getAllClients = (state: AppStoreType) => state.user.allClients;
export const getModal = (state: AppStoreType) => state.user.modal;
export const getIsLogged = (state: AppStoreType) => state.user.isLogged;
export const getUserLogin = (state: AppStoreType) => state.user.login;
export const getCurrentClient = (state: AppStoreType) => state.user.currentClient;
