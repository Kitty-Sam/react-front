import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';

import styles from '../../styles/Login.module.css';
import stylesClient from '../../styles/Clients.module.css';
import avatar from '../../assets/avatar.png';
import { fetchCurrentClientAction } from '../../store/sagas/sagasActions/actions/fetchCurrentClient';
import { getCurrentClient } from '../../store/selectors/userSelector';

export interface IProfile {
    id: string;
}

export const Profile: FC<IProfile> = ({ id }) => {
    const client = useSelector(getCurrentClient);

    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };

    useEffect(() => {
        dispatch(fetchCurrentClientAction({ id }));
    }, []);

    const onDeleteClick = () => {
        dispatch(setModal({ modal: 'remove' }));
    };

    const onEditClick = () => {
        dispatch(setModal({ modal: 'edit' }));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.closeBlock} onClick={onCloseClick}>
                x
            </div>
            <div className={styles.formBlock}>
                <div className={styles.buttonsBlock}>
                    <Button title={'Edit profile'} onClick={onEditClick} color={'secondary'} />
                    <Button title={'Delete client'} onClick={onDeleteClick} color={'secondary'} />
                </div>
                <img src={avatar} alt="avatar" className={stylesClient.avatar} />
                <p className={stylesClient.name}>
                    {client?.name}
                    {client?.surname}
                </p>
                <p className={stylesClient.text}>{client?.phone}</p>
                <p className={stylesClient.age}>{client?.age}</p>
            </div>
        </div>
    );
};
