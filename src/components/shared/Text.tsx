import React, { FC } from 'react';
import styles from '../../styles/Text.module.css';
import { IText } from '../interfaces';

export const Text: FC<IText> = ({ type, children, onClick }) => {
    const className = `${styles[`text-${type}`]}`;
    return (
        <p className={className} onClick={onClick}>
            {children}
        </p>
    );
};
