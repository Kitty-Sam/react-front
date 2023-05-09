import React, { FC } from 'react';
import styles from '../../styles/Input.module.css';
import { IInput } from '../interfaces';

export const Input: FC<IInput> = ({ value, onChange, placeholder, size, type }) => {
    const className = `${styles.input} ${styles[`input-${size}`]}`;
    return <input placeholder={placeholder} className={className} value={value} onChange={onChange} type={type} />;
};
