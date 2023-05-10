import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';
import { Text } from '../shared/Text';

import styles from '../../styles/Login.module.css';
import { clearClientAction } from '../../store/sagas/sagasActions/actions/clearClient';
import { IDelete } from '../interfaces';

export const Delete: FC<IDelete> = ({ id }) => {
    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };

    const onDeleteClick = () => {
        try {
            dispatch(clearClientAction({ id }));
            dispatch(setModal({ modal: null }));
        } catch (e: any) {
            console.log('error', e.message);
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.closeBlock} onClick={onCloseClick}>
                x
            </div>
            <div className={styles.formBlock}>
                <Text type={'title'}>Delete</Text>
                <Text type={'secondary'}>Are you sure you want to delete client?</Text>
                <Button title="Yes, delete" onClick={onDeleteClick} color="primary-error" />
                <Button title="No, close" onClick={onCloseClick} color="secondary" />
            </div>
        </div>
    );
};
