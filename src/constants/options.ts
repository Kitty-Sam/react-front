import { ToastOptions, ToastPosition } from 'react-toastify';

export const errorOptions: ToastOptions = {
    position: 'top-center' as ToastPosition,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
};

export const successOptions = {
    position: 'top-center' as ToastPosition,
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'colored',
};
