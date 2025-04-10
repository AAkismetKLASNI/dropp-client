export const VALIDATION_AUTH = {
  email: {
    required: { value: true, message: 'Email должен быть заполнен' },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Некорректный адрес электронной почты',
    },
    maxLength: {
      value: 254,
      message: 'Email должен быть не более 254 символов',
    },
  },
  password: {
    required: { value: true, message: 'Пароль должен быть заполнен' },
    minLength: { value: 6, message: 'Пароль должен быть не менее 6 символов' },
    maxLength: {
      value: 25,
      message: 'Пароль должен быть не более 25 символов',
    },
  },
};

export const VALIDATION_PICTURE = {
  path: {
    required: true,
  },
  originalName: {
    required: true,
    maxLength: {
      value: 64,
      message: 'Название должно быть не более 64 символов',
    },
  },
};
