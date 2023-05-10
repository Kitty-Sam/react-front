import React, { FC, useEffect, useState } from 'react';
import { FiChevronDown, FiArrowDown, FiArrowUp } from 'react-icons/fi';
import styles from '../../styles/DropDown.module.css';
import { IDropDown } from '../interfaces';

export const options = [
    { id: 1, title: 'Name' },
    { id: 2, title: 'Date of birth' },
    { id: 3, title: 'Telephone' },
];

export const Dropdown: FC<IDropDown> = ({ selectedValue, setSelectedValue, sortType, setSortType }) => {
    const [showMenu, setShowMenu] = useState(false);

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue;
        }
        return 'Select...';
    };

    useEffect(() => {
        const handler = () => setShowMenu(false);
        window.addEventListener('click', handler);

        return () => {
            window.removeEventListener('click', handler);
        };
    });

    const onInputClick = (e: any) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const onItemClick = (item: string) => () => {
        setSelectedValue(item);
    };

    const isSelected = (item: string) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue === item;
    };

    const onDivClick = (event: any) => {
        setSortType(event.target.innerText);
    };

    return (
        <div className={styles.dropDawnContainer}>
            <div onClick={onInputClick} className={styles.dropDawnInput}>
                <div>
                    <FiArrowDown />
                    <FiArrowUp />
                    {''} Sort by: {getDisplay()}
                </div>
                <FiChevronDown />
            </div>
            {showMenu && (
                <div className={styles.dropDownMenu}>
                    {options.map((option) => (
                        <div
                            className={`${styles.dropDawnItem} ${isSelected(option.title) && 'selected'}`}
                            key={option.id}
                            onClick={onItemClick(option.title)}
                        >
                            <div
                                className={styles.roundButton}
                                style={{
                                    backgroundColor: isSelected(option.title) ? '#188CFB' : 'white',
                                }}
                            />
                            <div>{option.title}</div>
                        </div>
                    ))}
                    <div className={styles.buttonsContainer}>
                        <div
                            className={styles.sortButton}
                            style={{
                                backgroundColor: sortType.includes('Ask') ? 'white' : undefined,
                            }}
                        >
                            <FiArrowUp />
                            <div onClick={onDivClick}>Ask</div>
                        </div>
                        <div
                            className={styles.sortButton}
                            style={{
                                backgroundColor: sortType.includes('Desk') ? 'white' : undefined,
                            }}
                        >
                            <FiArrowDown />
                            <div onClick={onDivClick}>Desk</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
