export const authValidation = {
  email: [
    {
      required: true,
      message: "Please enter your email address!",
    },
    {
      pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      message: "Must be a valid email",
    },
  ],
  password: [
    {
      required: true,
      message: "Please entter a password!",
    },
    {
      pattern: /^[a-zA-Z0-9_.+-]{6,30}$/,
      message: "password must be atleast six characters",
    },
  ],
};

export const appValidation = {
  requiredField: (fieldName) => {
    return [{ required: true, message: `please enter ${fieldName}` }];
  },
};