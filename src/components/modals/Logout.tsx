import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';

import { Text } from '../shared/Text';

import styles from '../../styles/Login.module.css';
import { logoutUserAction } from '../../store/sagas/sagasActions/actions/logoutUser';

export const Logout = () => {
    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };

    const onSignOutClick = () => {
        dispatch(setModal({ modal: null }));
        dispatch(logoutUserAction());
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.closeBlock} onClick={onCloseClick}>
                x
            </div>
            <div className={styles.formBlock}>
                <Text type={'title'}>Sign out</Text>
                <Text type={'secondary'}>Are you sure you want to sign out?</Text>
                <Button title="Yes, sign out" onClick={onSignOutClick} color="primary" />
                <Button title="No, close" onClick={onCloseClick} color="secondary" />
            </div>
        </div>
    );
};
