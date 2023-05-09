import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Text } from '../shared/Text';

import styles from '../../styles/Login.module.css';
import avatar from '../../assets/avatar.png';

import { addNewClientAction } from '../../store/sagas/sagasActions/actions/addNewClient';
export const AddClient = () => {
    const [name, setName] = useState('name');
    const [surname, setSurname] = useState('surname');
    const [phone, setPhone] = useState('11111');
    const [age, setAge] = useState('12.02.1993');

    const onChangeNameClick = (e: any) => {
        setName(e.target.value);
    };

    const onChangeSurnameClick = (e: any) => {
        setSurname(e.target.value);
    };

    const onChangeAgeClick = (e: any) => {
        setAge(e.target.value);
    };

    const onChangePhoneClick = (e: any) => {
        setPhone(e.target.value);
    };

    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };
    const onAddClientClick = () => {
        try {
            const payload = {
                name,
                surname,
                age,
                phone,
            };

            dispatch(addNewClientAction(payload));

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
            <div className={styles.avatarMain}>
                <div className={styles.avatarBlock}>
                    <Text type={'title'}>New client</Text>
                    <img src={avatar} alt={'avatar'} className={styles.avatar} />
                    <div className={styles.buttonsBlock}>
                        <Button
                            title="Save"
                            onClick={onAddClientClick}
                            color="primary"
                            disabled={!name || !surname || !age || !phone}
                        />
                        <Button title="Close" onClick={onCloseClick} color="secondary" />
                    </div>
                </div>
                <div className={styles.formBlock}>
                    <Input value={name} onChange={onChangeNameClick} placeholder="enter name" size={'m'} type="text" />
                    <Input
                        value={surname}
                        onChange={onChangeSurnameClick}
                        placeholder="enter surname"
                        size={'m'}
                        type="text"
                    />
                    <Input value={age} onChange={onChangeAgeClick} placeholder="enter age" size={'m'} type="text" />
                    <Input
                        value={phone}
                        onChange={onChangePhoneClick}
                        placeholder="enter phone"
                        size={'m'}
                        type="text"
                    />
                </div>
            </div>
        </div>
    );
};
