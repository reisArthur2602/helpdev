import * as yup from 'yup';

export const registerSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 dígitos')
    .required('A senha é obrigatória'),
  username: yup.string().required('o Nome de usuário é obrigatório'),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email('Email inválido').required('O email é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter no mínimo 6 dígitos')
    .required('A senha é obrigatória'),
});
