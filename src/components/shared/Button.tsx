import React, { FC } from 'react';
import styles from '../../styles/Button.module.css';
import { IButtonProps } from '../interfaces';
import { FiEdit2, FiTrash2 } from 'react-icons/fi';

export const Button: FC<IButtonProps> = ({ title, onClick, color, disabled, icon = undefined }) => {
    const className = `${styles.ordinaryButton} ${styles[`button-${color}`]}`;

    const findIcon = () => {
        if (!icon) {
            return;
        }
        if (icon === 'remove') {
            return <FiTrash2 className={styles.icon} />;
        }

        if (icon === 'edit') {
            return <FiEdit2 className={styles.icon} />;
        }
    };

    const resultedIcon = findIcon();

    return (
        <button onClick={onClick} className={className} disabled={disabled}>
            {resultedIcon} {title}
        </button>
    );
};
