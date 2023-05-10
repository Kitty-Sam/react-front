import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Text } from '../shared/Text';

import styles from '../../styles/Login.module.css';
import avatar from '../../assets/avatar.png';

import { addNewClientAction } from '../../store/sagas/sagasActions/actions/addNewClient';
import { addClientSchema } from '../../constants/schemas';
import { Formik } from 'formik';
import { IAddNewClient } from '../interfaces';

export const AddClient = () => {
    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };
    const onAddClientClick = (values: IAddNewClient) => {
        try {
            const payload = {
                name: values.name.trim(),
                surname: values.surname.trim(),
                age: values.age.trim(),
                phone: values.phone.trim(),
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
                <Formik
                    initialValues={{ name: '', surname: '', phone: '', age: '' }}
                    validationSchema={addClientSchema}
                    onSubmit={onAddClientClick}
                >
                    {({ handleChange, handleSubmit, values, errors, touched }) => (
                        <>
                            <div className={styles.avatarBlock}>
                                <Text type={'title'}>New client</Text>
                                <img src={avatar} alt={'avatar'} className={styles.avatar} />
                                <div className={styles.buttonsBlock}>
                                    <Button
                                        type="submit"
                                        title="Save"
                                        onClick={handleSubmit}
                                        color="primary"
                                        disabled={!values.name || !values.surname || !values.age || !values.phone}
                                    />
                                    <Button title="Close" onClick={onCloseClick} color="secondary" type="button" />
                                </div>
                            </div>

                            <div className={styles.formBlock}>
                                <Input
                                    onChange={handleChange('name')}
                                    placeholder="enter name"
                                    size={'m'}
                                    type="text"
                                    name="name"
                                />
                                {errors.name && touched.name && errors.name}
                                <Input
                                    onChange={handleChange('surname')}
                                    placeholder="enter surname"
                                    size={'m'}
                                    type="text"
                                    name="surname"
                                />
                                {errors.surname && touched.surname && errors.surname}
                                <Input
                                    onChange={handleChange('age')}
                                    placeholder="enter age"
                                    size={'m'}
                                    type="text"
                                    name="age"
                                />
                                {errors.age && touched.age && errors.age}
                                <Input
                                    onChange={handleChange('phone')}
                                    placeholder="enter phone"
                                    size={'m'}
                                    type="text"
                                    name="phone"
                                />
                                {errors.phone && touched.phone && errors.phone}
                            </div>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
};
