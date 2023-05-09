import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Text } from '../shared/Text';
import { loginUserAction } from '../../store/sagas/sagasActions/actions/loginUser';

import styles from '../../styles/Login.module.css';

export const Login = () => {
    const [email, setEmail] = useState('richbrains');
    const [password, setPassword] = useState('richbrains_test');

    const onChangeEmailClick = (e: any) => {
        setEmail(e.target.value);
    };

    const onChangePasswordClick = (e: any) => {
        setPassword(e.target.value);
    };

    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };
    const onLoginClick = () => {
        try {
            const payload = {
                login: email.trim(),
                password: password.trim(),
            };
            dispatch(loginUserAction(payload));
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
                <Text type={'title'}>Sign in</Text>
                <Input value={email} onChange={onChangeEmailClick} placeholder="enter email" size={'m'} type="text" />
                <Input
                    value={password}
                    onChange={onChangePasswordClick}
                    placeholder="enter password"
                    size={'m'}
                    type="password"
                />
                <Button title="Sign in" onClick={onLoginClick} color="primary" disabled={!email || !password} />
                <Button title="Close" onClick={onCloseClick} color="secondary" />
            </div>
        </div>
    );
};
