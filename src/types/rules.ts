import { Rule } from 'antd/es/form';
import { EMAIL_REGEX } from './regex';

export const emailRules: Rule[] = [
  {
    required: true,
    message: 'Поле не должно быть пустым!',
  },
  { pattern: EMAIL_REGEX, message: 'Пожалуйста, введите корректный адрес электронной почты!' },
];
