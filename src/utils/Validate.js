export const checkValidSignIn = (email, pwd) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPwdValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(
    pwd
  );

  if (!isEmailValid) return "Email is not valid";
  if (!isPwdValid) return "Password is not valid";

  return null;
};

export const checkValidSignUp = (email, pwd, cnfrmPwd) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPwdValid = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(
    pwd
  );
  const isPwdMatch = pwd === cnfrmPwd;

  if (!isEmailValid) return "Email is not valid";
  if (!isPwdValid) return "Password is not valid";
  if (!isPwdMatch) return "Passwords do not match";

  return null;
};
