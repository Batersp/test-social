import * as Yup from 'yup';


export const validateLogin = Yup.object().shape({
    name: Yup.string().required('Please enter name').min(3, 'minimum 3 characters '),
    password: Yup.string().required('Please enter password').min(3, `Minimum 3 characters long`),
});