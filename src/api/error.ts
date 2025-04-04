// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const errorCatch = (error: any) => {
  const message = error?.response?.data?.message;

  return message ? (typeof message === 'object' ? message[0] : message) : error.message;
};
