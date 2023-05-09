import { LOGOUT_USER } from '../types';

export const logoutUserAction = () => ({
    type: LOGOUT_USER,
});

export type LogoutUser = {
    type: typeof LOGOUT_USER;
};
