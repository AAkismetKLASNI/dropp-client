export const VALIDATION_AUTH = {
  email: {
    required: { value: true, message: 'Email must be filled in' },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Incorrect email address',
    },
    maxLength: {
      value: 254,
      message: 'Email must be no more than 254 characters long.',
    },
  },
  password: {
    required: { value: true, message: 'Password must be filled in' },
    minLength: { value: 6, message: 'Password must be at least 6 characters long' },
    maxLength: {
      value: 25,
      message: 'Password must be no more than 25 characters long',
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
      message: 'Name must be no more than 64 characters long',
    },
  },
};
