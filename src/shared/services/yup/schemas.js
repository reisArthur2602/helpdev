import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(6).required(),
  username: yup.string().required(),
});

export const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().min(6).required(),
});