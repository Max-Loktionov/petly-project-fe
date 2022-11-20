export const fetchErrorHendler = error => {
  switch (error.status) {
    case 401:
      return error.data.message;
    case 400:
      return "Wrong email or password";
    case 500:
      return "Something wrong, please try later";
    case "FETCH_ERROR":
      return "Chek your connection to the internet";
    default:
      return "Unknown error";
  }
};
