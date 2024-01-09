import validator from "validator";

export const isEmailValid = (email: string) => {
  return validator.isEmail(email);
};


export const isPasswordValid = (password:string) => {
  const minLength = 6;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/;
  return password.length >= minLength && passwordRegex.test(password);
};

