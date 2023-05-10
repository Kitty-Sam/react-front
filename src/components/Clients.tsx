import React, { FC, useEffect, useState } from 'react';
import styles from '../styles/Clients.module.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getAllClients, getModal } from '../store/selectors/userSelector';
import { checkTokenAction } from '../store/sagas/sagasActions/actions/checkToken';
import { CustomModule } from './CustomModal';
import { Profile } from './modals/Profile';
import { Delete } from './modals/DeleteClient';
import { EditClient } from './modals/EditClient';
import { sortClientsAction } from '../store/sagas/sagasActions/actions/sortClients';
import { Client } from './Client';
import { IClients } from './interfaces';

export const Clients: FC<IClients> = ({ search, sortType, selectedValue }) => {
    const [id, setId] = useState('');
    const clients = useSelector(getAllClients, shallowEqual);
    const modal = useSelector(getModal);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(sortClientsAction({ search, sortType, selectedValue, clients }));
    }, [search, sortType, selectedValue]);

    useEffect(() => {
        dispatch(checkTokenAction());
    }, []);

    const listOfFilteredClients = clients
        .filter((client) => client.name.includes(search))
        .map((client) => <Client key={client.id + client.name} client={client} id={id} setId={setId} />);

    const listOfClients = clients.map((client) => (
        <Client key={client.id + client.name} client={client} id={id} setId={setId} />
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
