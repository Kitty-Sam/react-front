import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/Clients.module.css';
import avatar from '../assets/avatar.png';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllClients, getModal } from '../store/selectors/userSelector';
import { checkTokenAction } from '../store/sagas/sagasActions/actions/checkToken';
import { setModal } from '../store/actions/actions';
import { CustomModule } from './CustomModal';
import { Profile } from './modals/Profile';
import { Delete } from './modals/DeleteClient';
import { EditClient } from './modals/EditClient';

export interface IClients {
    search: string;
}
export const Clients: FC<IClients> = ({ search }) => {
    const [id, setId] = useState('');
    const clients = useSelector(getAllClients, shallowEqual);
    const modal = useSelector(getModal);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkTokenAction());
    }, []);

    const onPickItemClick = (id: string) => async () => {
        setId(id);
        dispatch(setModal({ modal: 'profile' }));
    };

    const listOfFilteredClients = clients
        .filter((client) => client.name.includes(search))
        .map((client) => (
            <div key={client.id + client.name} className={styles.client} onClick={onPickItemClick(client.id)}>
                <img src={avatar} alt="avatar" className={styles.avatar} />
                <p className={styles.name}>
                    {client.name}
                    {client.surname}
                </p>
                <p className={styles.text}>{client.phone}</p>
                <p className={styles.age}>{client.age}</p>
            </div>
        ));

    const listOfClients = clients.map((client) => (
        <div key={client.id + client.name} className={styles.client} onClick={onPickItemClick(client.id)}>
            <img src={avatar} alt="avatar" className={styles.avatar} />
            <p className={styles.name}>
                {client.name}
                {client.surname}
            </p>
            <p className={styles.text}>{client.phone}</p>
            <p className={styles.age}>{client.age}</p>
        </div>
    ));

    return (
        <>
            <div className={styles.wrapper}>{listOfFilteredClients.length ? listOfFilteredClients : listOfClients}</div>
            {modal === 'profile' && (
                <CustomModule open={modal === 'profile'}>
                    <Profile id={id} />
                </CustomModule>
            )}
            {modal === 'remove' && (
                <CustomModule open={modal === 'remove'}>
                    <Delete id={id} />
                </CustomModule>
            )}

            {modal === 'edit' && (
                <CustomModule open={modal === 'edit'}>
                    <EditClient id={id} />
                </CustomModule>
            )}
        </>
    );
};
