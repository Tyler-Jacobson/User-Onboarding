import * as yup from 'yup'

export default yup.object().shape({
    name: yup.string()
        .required('Username is required'),
    email: yup
        .string()
        .email('Email must be valid')
        .required('Email is required'),
    password: yup.string()
        .required('Password is required')
        .min(5, 'Minimum length is 5'),
    checkbox: yup.boolean()
        .required('You must accept the terms of service')
})