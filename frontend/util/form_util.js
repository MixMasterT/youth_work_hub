export const validatePassword = (password, passCheck) => (
  passCheck.length > 5 && password === passCheck
);
