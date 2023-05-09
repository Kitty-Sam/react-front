import React, { FC } from 'react';
import styles from '../../styles/Button.module.css';
import { FiLogIn } from 'react-icons/fi';
import { IButtonWithIconProps } from '../interfaces';

export const ButtonWithIcon: FC<IButtonWithIconProps> = ({ title, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <FiLogIn className={styles.icon} /> {title}
        </button>
    );
};
