import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const initialValues = {
  email: '',
  password: '',
};
