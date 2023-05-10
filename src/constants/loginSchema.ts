import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    // email: yup.string().email().required(),
    password: yup.string().min(4).max(16, 'Password should not exceed 16 chars.').required(),
});

export const addClientSchema = yup.object().shape({
    name: yup.string().required('Please, provide your name!'),
    surname: yup.string().required('Please, provide your surname!'),
    phone: yup.string().required('Please, provide your phone!'),
    age: yup.string().required('Please, provide your age!'),
});
