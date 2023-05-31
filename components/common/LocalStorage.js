
import Cookies from 'js-cookie';

export const setLocalStorageItem = (key, value) => {
  Cookies.set(key, value);
};

export const getLocalStorageItem = (key) => {
  return Cookies.get(key);
};

export const removeLocalStorageItem = (key) => {
  Cookies.remove(key);
};
