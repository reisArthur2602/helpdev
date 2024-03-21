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

export const clientSchema = yup.object().shape({
  name: yup.string().required('o nome é obrigatório'),
  cnpj: yup
    .string()
    .test('len', 'São necessários 14 dígitos', (val) => val.length === 14)
    .required('o CNPJ é obrigatório'),
  adress: yup.string().required('o endereço é obrigatório'),
  email: yup.string().required('O email é obrigatório').email('Email inválido'),
  telefone: yup
    .string()
    .test('len', 'São necessários 11 dígitos', (val) => val.length === 11)
    .required('O telefone é obrigatório'),
});

export const orderSchema = yup.object().shape({
  client: yup.string().required('Cliente é obrigatório'),
  status: yup.string().required('Status é obrigatório'),
  subject: yup.string().required('Assunto é obrigatorio'),
  complement: yup.string(),
});


