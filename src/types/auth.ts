import { ReactNode } from 'react';

// THIRD - PARTY
// import firebase from 'firebase/compat/app';

// ==============================|| TYPES - AUTH  ||============================== //

export type GuardProps = {
  children: ReactNode;
};

export type UserProfile = {
  id?: string;
  email?: string;
  avatar?: string;
  image?: string;
  name?: string;
  role?: string;
  tier?: string;
};

export type TUser = {
  id?:  string,
  fullName?: string,
  username?: string,
  password?: string,
}

/* export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: UserProfile | null;
  token?: string | null;
} */
export interface AuthProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: TUser | null;
  token?: string | null;
}


export interface AuthActionProps {
  type: string;
  payload?: AuthProps;
}

// export type FirebaseContextType = {
//   isLoggedIn: boolean;
//   isInitialized?: boolean;
//   user?: UserProfile | null | undefined;
//   logout: () => Promise<void>;
//   login: () => void;
//   firebaseRegister: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
//   firebaseEmailPasswordSignIn: (email: string, password: string) => Promise<firebase.auth.UserCredential>;
//   firebaseGoogleSignIn: () => Promise<firebase.auth.UserCredential>;
//   firebaseTwitterSignIn: () => Promise<firebase.auth.UserCredential>;
//   firebaseFacebookSignIn: () => Promise<firebase.auth.UserCredential>;
//   resetPassword: (email: string) => Promise<void>;
//   updateProfile: VoidFunction;
// };

// export type AWSCognitoContextType = {
//   isLoggedIn: boolean;
//   isInitialized?: boolean;
//   user?: UserProfile | null | undefined;
//   logout: () => void;
//   login: (email: string, password: string) => Promise<void>;
//   register: (email: string, password: string, firstName: string, lastName: string) => Promise<unknown>;
//   resetPassword: (verificationCode: string, newPassword: string) => Promise<any>;
//   forgotPassword: (email: string) => Promise<void>;
//   updateProfile: VoidFunction;
// };

// export interface InitialLoginContextProps {
//   isLoggedIn: boolean;
//   isInitialized?: boolean;
//   user?: UserProfile | null | undefined;
// }

export interface JWTDataProps {
  userId: string;
}

export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  user?: TUser | null | undefined;
  logout: () => void;
  login: (username: string, password: string) => Promise<void>;
  register: (full_name: string, username: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: VoidFunction;
};

// export type Auth0ContextType = {
//   isLoggedIn: boolean;
//   isInitialized?: boolean;
//   user?: UserProfile | null | undefined;
//   logout: () => void;
//   login: () => void;
//   resetPassword: (email: string) => Promise<void>;
//   updateProfile: VoidFunction;
// };
