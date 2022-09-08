import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6).required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Confirm your password.')
    .oneOf([yup.ref('password')], "Your passwords don't match."),
  role: yup.string().required(),
});

export const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  role: 'admin',
};
