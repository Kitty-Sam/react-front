import React, { ChangeEvent, FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Text } from '../shared/Text';

import styles from '../../styles/Login.module.css';
import avatar from '../../assets/avatar.png';

import { getCurrentClient } from '../../store/selectors/userSelector';
import { editClientAction } from '../../store/sagas/sagasActions/actions/editClient';
import { clearClientAction } from '../../store/sagas/sagasActions/actions/clearClient';

export interface IEditClient {
    id: string;
}
export const EditClient: FC<IEditClient> = ({ id }) => {
    const client = useSelector(getCurrentClient);

    const [name, setName] = useState(client.name);
    const [surname, setSurname] = useState(client.surname);
    const [phone, setPhone] = useState(client.phone);
    const [age, setAge] = useState(client.age);

    const onChangeNameClick = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeSurnameClick = (e: ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    };

    const onChangeAgeClick = (e: ChangeEvent<HTMLInputElement>) => {
        setAge(e.target.value);
    };

    const onChangePhoneClick = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(e.target.value);
    };

    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };
    const onEditClientClick = () => {
        try {
            const payload = {
                name,
                surname,
                age,
                phone,
                id,
            };

            dispatch(editClientAction(payload));
            dispatch(setModal({ modal: null }));
        } catch (e: any) {
            console.log('error', e.message);
        }
    };

    const onDeleteClientClick = () => {
        dispatch(clearClientAction({ id }));
        dispatch(setModal({ modal: null }));
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.closeBlock} onClick={onCloseClick}>
                x
            </div>
            <div className={styles.avatarMain}>
                <div className={styles.avatarBlock}>
                    <Text type={'title'}>Edit client</Text>
                    <img src={avatar} alt={'avatar'} className={styles.avatar} />
                    <div className={styles.buttonsBlock}>
                        <Button
                            title="Save"
                            onClick={onEditClientClick}
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
                    <Button title="Delete client" onClick={onDeleteClientClick} color="secondary" />
                </div>
            </div>
        </div>
    );
};
