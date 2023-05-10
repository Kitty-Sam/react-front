import React, { ChangeEvent, FC, useTransition } from 'react';
import styles from '../styles/AdditionalPanel.module.css';
import { Input } from './shared/Input';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLogged, getModal } from '../store/selectors/userSelector';
import { setModal } from '../store/actions/actions';
import { CustomModule } from './CustomModal';
import { AddClient } from './modals/AddClient';

export interface IAdditionalPanel {
    search: string;
    setSearch: (value: string) => void;
}
export const AdditionalPanel: FC<IAdditionalPanel> = ({ setSearch, search }) => {
    const [_isPending, startTransition] = useTransition();

    const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        startTransition(() => {
            setSearch(e.target.value);
        });
    };
    const dispatch = useDispatch();

    const onAddClientClick = () => {
        dispatch(setModal({ modal: 'add' }));
    };

    const isLogged = useSelector(getIsLogged);
    const modal = useSelector(getModal);

    return (
        <div className={styles.wrapper}>
            <Input value={search} onChange={onChangeSearch} placeholder={'Type to search...'} size={'s'} type="text" />
            <select className={styles.input}>
                <option>name</option>
                <option>age</option>
                <option>location</option>
            </select>
            {isLogged && (
                <button onClick={onAddClientClick} className={styles.roundButton}>
                    +
                </button>
            )}

            <CustomModule open={modal === 'add'}>
                <AddClient />
            </CustomModule>
        </div>
    );
};
