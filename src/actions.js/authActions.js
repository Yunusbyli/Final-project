import { LOGIN, LOGOUT } from './types';

export const login = (username, password) => {
  // Burada backend API-nə asinxron çağrı göndərərək daxil olma prosesini həyata keçirin
  // Backend-dən gələn məlumatlara əsasən, LOGIN aksiyonunu tətbiq edin
  return {
    type: LOGIN,
    payload: {
      username,
      password,
    },
  };
};

export const logout = () => {
  // Burada backend API-nə asinxron çağrı göndərərək çıxış prosesini həyata keçirin
  // Backend-dən gələn məlumatlara əsasən, LOGOUT aksiyonunu tətbiq edin
  return {
    type: LOGOUT,
  };
};
