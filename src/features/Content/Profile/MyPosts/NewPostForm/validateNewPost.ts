import * as Yup from 'yup';


export const validateNewPost = Yup.object().shape({
    message: Yup.string().required('Please enter message')
});