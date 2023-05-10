import React, { FC } from 'react';
import { IClientProps } from './interfaces';
import styles from '../styles/Clients.module.css';
import avatar from '../assets/avatar.png';
import { setModal } from '../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUserLogin } from '../store/selectors/userSelector';

export const Client: FC<IClientProps> = ({ client, setId }) => {
    const login = useSelector(getUserLogin);

    const dispatch = useDispatch();

    const onPickItemClick = (id: string) => async () => {
        if (!login) {
            return;
        }
        setId(id);
        dispatch(setModal({ modal: 'profile' }));
    };

    return (
        <div className={styles.client} onClick={onPickItemClick(client.id)}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <p className={styles.name}>
                {client.name} {client.surname}
            </p>
            <p className={styles.text}>{client.phone}</p>
            <p className={styles.age}>{client.age}</p>
        </div>
    );
};
