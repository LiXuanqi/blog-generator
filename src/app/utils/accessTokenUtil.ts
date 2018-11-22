const ACCESS_TOKEN_KEY = "ACCESS_TOKEN";

const getAccessToken = (): string => {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

const setAccessToken = (token: string): void => {
  localStorage.setItem(ACCESS_TOKEN_KEY, token);
}

export {
  getAccessToken,
  setAccessToken
}