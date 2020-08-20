const validatePassword = (password) => {
  const passwordRegex = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
  
  return password.match(passwordRegex);
};

export default validatePassword;