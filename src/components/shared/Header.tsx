import React from 'react';
import { ButtonWithIcon } from './ButtonWithIcon';
import styles from '../../styles/Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '../../store/actions/actions';
import { getIsLogged, getModal, getUserLogin } from '../../store/selectors/userSelector';
import { CustomModule } from '../CustomModal';
import { Login } from '../modals/Login';
import { Text } from './Text';
import { Logout } from '../modals/Logout';

export const Header = () => {
    const dispatch = useDispatch();

    const modal = useSelector(getModal);
    const isLogged = useSelector(getIsLogged);
    const login = useSelector(getUserLogin);

    const onSignInClick = () => {
        dispatch(setModal({ modal: 'login' }));
    };

    const onLogOutClick = () => {
        dispatch(setModal({ modal: 'logout' }));
    };

    return (
        <div className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>RichBrains</div>
                <p className={styles.text}>Clients</p>
            </div>
            <div className={styles.buttonBlock}>
                {isLogged ? (
                    <Text type={'info'} onClick={onLogOutClick}>
                        {login}
                    </Text>
                ) : (
                    <ButtonWithIcon title={'Sign in'} onClick={onSignInClick} />
                )}
            </div>
            <CustomModule open={modal === 'login'}>
                <Login />
            </CustomModule>

            <CustomModule open={modal === 'logout'}>
                <Logout />
            </CustomModule>
        </div>
    );
};
