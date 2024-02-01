export const initialLocalStorage = () => {
  const accountInLocalStorage = localStorage.getItem("account");
  const singOutInLocalStorage = localStorage.getItem("sign-out");
  let parsedAccount;
  let parsedSignOut;

  if (!accountInLocalStorage) {
    localStorage.setItem("account", JSON.stringify({}));
    parsedAccount = {};
  } else {
    parsedAccount = JSON.parse(accountInLocalStorage);
    console.log("Cuenta en login", parsedAccount);
  }

  if (singOutInLocalStorage) {
    localStorage.setItem("sign-out", JSON.stringify(false));
    parsedSignOut = false;
  } else {
    parsedSignOut = JSON.parse(singOutInLocalStorage);
    console.log("Usuario loggeado:", parsedSignOut);
  }
};
