import { ReactNode } from 'react';

export interface IClient {
    id: string;
    name: string;
    surname: string;
    age: string;
    phone: string;
}

export interface ICustomModule {
    open: boolean;
    children: any;
}

export interface IButtonProps {
    title: string;
    onClick: () => void;
    color: string;
    disabled?: boolean;
    type?: string;
}

export interface IButtonWithIconProps {
    title: string;
    onClick: () => void;
}

export interface IInput {
    value?: string;
    onChange: (e: any) => void;
    placeholder: string;
    size: string;
    type: string;
    name?: string;
}

export interface IText {
    type: string;
    children: ReactNode;
    onClick?: () => void;
}
