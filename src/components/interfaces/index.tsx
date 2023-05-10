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
    icon?: any;
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

export interface IClients {
    search: string;
    sortType: string;
    selectedValue: string;
}

export interface IClientProps {
    client: IClient;
    id: string;
    setId: (value: string) => void;
}

export interface IDropDown {
    selectedValue: string;
    setSelectedValue: (value: string) => void;
    sortType: string;
    setSortType: (value: string) => void;
}

export interface IAddNewClient {
    name: string;
    surname: string;
    age: string;
    phone: string;
}

export interface IDelete {
    id: string;
}

export interface IEditClient {
    id: string;
}

export interface ILogin {
    email: string;
    password: string;
}

export interface IProfile {
    id: string;
}
