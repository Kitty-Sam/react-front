import React from 'react';
import { useDispatch } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { Button } from '../shared/Button';
import { Input } from '../shared/Input';
import { Text } from '../shared/Text';
import { loginUserAction } from '../../store/sagas/sagasActions/actions/loginUser';

import styles from '../../styles/Login.module.css';
import { Formik } from 'formik';
import { loginSchema } from '../../constants/loginSchema';

export interface ILogin {
    email: string;
    password: string;
}

export const Login = () => {
    // const [email, setEmail] = useState('richbrains');
    // const [password, setPassword] = useState('richbrains_test');

    const dispatch = useDispatch();
    const onCloseClick = () => {
        dispatch(setModal({ modal: null }));
    };
    const onLoginClick = (values: ILogin) => {
        try {
            const payload = {
                login: values.email.trim(),
                password: values.password.trim(),
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
            <Formik
                initialValues={{ email: 'richbrains', password: 'richbrains_test' }}
                validationSchema={loginSchema}
                onSubmit={onLoginClick}
            >
                {({ handleChange, handleSubmit, values, errors, touched }) => (
                    <form className={styles.formBlock}>
                        <Text type={'title'}>Sign in</Text>
                        <Input
                            onChange={handleChange('email')}
                            placeholder="enter email"
                            size={'m'}
                            type="text"
                            name="email"
                        />
                        {errors.email && touched.email && errors.email}
                        <Input
                            onChange={handleChange('password')}
                            placeholder="enter password"
                            size={'m'}
                            type="password"
                            name="password"
                        />
                        {errors.password && touched.password && errors.password}
                        <Button
                            type="submit"
                            title="Sign in"
                            onClick={handleSubmit}
                            color="primary"
                            disabled={!values.email || !values.password}
                        />
                        <Button title="Close" onClick={onCloseClick} color="secondary" type="button" />
                    </form>
                )}
            </Formik>
        </div>
    );
};
