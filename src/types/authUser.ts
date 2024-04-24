import { ReactNode } from 'react';

// ==============================|| TYPES - AUTH  ||============================== //

export type GuardProps = {
  children: ReactNode;
};

export type TUser = {
  id?:  string,
  fullName?: string,
  username?: string,
  password?: string,
}

export type TUserAuth = {
  id?: string,
  username?:  string,
  accessToken?: string,
  typeToken?: string,
  expiredAt: string;
}