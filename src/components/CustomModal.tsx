import React, { FC } from 'react';
import { Modal } from 'react-overlays';
import styles from '../styles/Custom.module.css';
import { ICustomModule } from './interfaces';

export const CustomModule: FC<ICustomModule> = ({ open, children }) => {
    const renderBackdrop = (props: any) => <div className={styles.backDrop} {...props} />;

    return (
        <Modal className={styles.modal} show={open} renderBackdrop={renderBackdrop}>
            <div className={styles.modalCentered}>
                <div className={styles.modalView}>{children}</div>
            </div>
        </Modal>
    );
};
