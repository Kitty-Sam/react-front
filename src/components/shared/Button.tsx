import React, { FC } from 'react';
import styles from '../../styles/Button.module.css';
import { IButtonProps } from '../interfaces';

export const Button: FC<IButtonProps> = ({ title, onClick, color, disabled }) => {
    const className = `${styles.ordinaryButton} ${styles[`button-${color}`]}`;

    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {title}
        </button>
    );
};
