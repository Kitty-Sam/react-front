import React, { ChangeEvent, useState } from 'react';
import styles from '../styles/AdditionalPanel.module.css';
import { Input } from './shared/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getModal } from '../store/selectors/userSelector';
import { setModal } from '../store/actions/actions';
import { CustomModule } from './CustomModal';
import { AddClient } from './modals/AddClient';

export const AdditionalPanel = () => {
    const [search, setSearch] = useState('');

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };
    const dispatch = useDispatch();

    const onAddClientClick = () => {
        dispatch(setModal({ modal: 'add' }));
    };

    const isLogged = useSelector(getIsLogged);
    const modal = useSelector(getModal);

    return (
        <div className={styles.wrapper}>
            <Input value={search} onChange={onChangeSearch} placeholder={'Type to search...'} size={'s'} type="text" />
            <select className={styles.input}>
                <option>name</option>
                <option>age</option>
                <option>location</option>
            </select>
            {isLogged && (
                <button
                    onClick={onAddClientClick}
                    style={{
                        position: 'absolute',
                        right: -100,
                        top: 50,
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        outline: 'none',
                        backgroundColor: '#188CFB',
                        color: 'white',
                    }}
                >
                    +
                </button>
            )}

            <CustomModule open={modal === 'add'}>
                <AddClient />
            </CustomModule>
        </div>
    );
};
