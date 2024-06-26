// @ts-nocheck
// @ts-ignore
import { QueryModel } from '@app/domain/QueryModel';
import { UserModel } from '@app/domain/UserModel';
const avatarImg = process.env.REACT_APP_ASSETS_BUCKET + '/avatars/avatar5.webp';

const testUser = {
  id: 1,
  fullName: 'Chris',
  lastName: 'Johnson',
  imgUrl: avatarImg,
  username: '@john1989',
  email: {
    name: 'chris.johnson@altence.com',
    verified: true,
  },
  phone: {
    number: '+18143519459',
    verified: false,
  },
  sex: 'male',
  birthday: '01/26/2022',
  lang: 'en',
  country: 'GB',
  city: 'London',
  address1: '14 London Road',
  zipcode: 5211,
  website: 'altence.com',
  socials: {
    twitter: '@altence_team',
    facebook: 'https://facebook.com/groups/1076577369582221',
    linkedin: 'https://linkedin.com/company/altence',
  },
};
import Cookies from 'js-cookie';

export const persistToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

export const persistQuery = (query: QueryModel): void => {
  localStorage.setItem('query', JSON.stringify(query));
};

export const readQuery = (): QueryModel | null => {
  const queryStr = localStorage.getItem('query');
  return queryStr ? JSON.parse(queryStr) : null;
};

export const readToken = (): string | null => {
  console.log('Cookies.get(access_token)', Cookies.get('access_token'));
  return Cookies.get('access_token') || null;
};

export const persistUser = (user: UserModel): void => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const readUser = (): UserModel | null => {
  const userStr = localStorage.getItem('user');
  return userStr ? JSON.parse(userStr) : testUser;
};

export const deleteToken = (): void => {
  Cookies.remove('access_token');
  Cookies.remove('refresh_token');
};
export const deleteUser = (): void => localStorage.removeItem('user');
