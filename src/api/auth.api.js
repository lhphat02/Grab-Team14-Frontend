import { httpApi } from '@app/api/http.api';

export const login = (loginPayload) => { 
  console.log('aaaa', loginPayload);
  httpApi.post('auth/signin', { ...loginPayload }).then(({ data }) => data)};

export const signUp = (signUpData) => {
  console.log('signUpData', signUpData);
  return httpApi.post('auth/signup', { ...signUpData }).then(({ data }) => data);
};

export const resetPassword = (resetPasswordPayload) =>
  httpApi.post('auth/reset-password', { ...resetPasswordPayload }).then(({ data }) => data);

export const verifySecurityCode = (securityCodePayload) =>
  httpApi.post('verifySecurityCode', { ...securityCodePayload }).then(({ data }) => data);

export const setNewPassword = (newPasswordData) =>
  httpApi.post('setNewPassword', { ...newPasswordData }).then(({ data }) => data);
