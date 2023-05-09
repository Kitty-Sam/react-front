import { LOGIN_USER } from '../types';

export interface LoginUserPayloadType {
    login: string;
    password: string;
}

export const loginUserAction = (payload: LoginUserPayloadType) => ({
    type: LOGIN_USER,
    payload,
});

export type LoginUser = {
    type: typeof LOGIN_USER;
    payload: LoginUserPayloadType;
};
