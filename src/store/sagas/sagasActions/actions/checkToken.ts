import { CHECK_TOKEN } from '../types';

export const checkTokenAction = () => ({
    type: CHECK_TOKEN,
});

export type CheckToken = {
    type: typeof CHECK_TOKEN;
};
