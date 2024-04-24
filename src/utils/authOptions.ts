import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'utils/axios';

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET_KEY,
  providers: [
    CredentialsProvider ({
      // id: 'login',
      // name: 'login',
      id: 'credentials',
      name: "credentials",
      type: "credentials",
      credentials: {
        username: { name: 'username', label: 'Nom d utilisateur', type: 'username', placeholder: 'Nom d utilisateur' },
        password: { name: 'password', label: 'Mot de passe', type: 'password', placeholder: 'Mot de passe' }
      },
      async authorize(credentials, req) {

        try {
          // const user = await axios.post('http://localhost:3333/api/v1/auth/login', {
          const user = await axios.post('http://localhost:3333/api/v1/auth/login', {
            password: credentials?.password,
            username: credentials?.username
          });

          console.log("###### AUTH OPTION ############ : " + JSON.stringify(user));
          return null;
          /* if (user) {
            user.data.user['accessToken'] = user.data.serviceToken;
            return user.data.user;
          } */
        } catch (e: any) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      },
      /* async authorize(credentials) {
        try {
          // const user = await axios.post('http://localhost:3333/api/v1/auth/login', {
          const user = await axios.post('http://localhost:3333/api/v1/auth/login', {
            password: credentials?.password,
            username: credentials?.username
          });

          console.log("###### AUTH OPTION ############ : " + JSON.stringify(user));

          if (user) {
            user.data.user['accessToken'] = user.data.serviceToken;
            return user.data.user;
          }
        } catch (e: any) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      } */
    }),

    CredentialsProvider({
      id: 'register',
      name: 'Register',
      credentials: {
        firstname: { name: 'firstname', label: 'Firstname', type: 'text', placeholder: 'Enter Firstname' },
        lastname: { name: 'lastname', label: 'Lastname', type: 'text', placeholder: 'Enter Lastname' },
        email: { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter Email' },
        company: { name: 'company', label: 'Company', type: 'text', placeholder: 'Enter Company' },
        password: { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter Password' }
      },
      async authorize(credentials) {
        try {
          const user = await axios.post('/api/account/register', {
            firstName: credentials?.firstname,
            lastName: credentials?.lastname,
            company: credentials?.company,
            password: credentials?.password,
            email: credentials?.email
          });

          if (user) {
            users.push(user.data);
            return user.data;
          }
        } catch (e: any) {
          const errorMessage = e?.response.data.message;
          throw new Error(errorMessage);
        }
      }
    })
    
  ],
  callbacks: {
    
    jwt: async ({ token, user, account }) => {
      if (user) {
        // @ts-ignore
        token.accessToken = user.accessToken;
        token.id = user.id;
        token.provider = account?.provider;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        // session.id = token.id;
        // session.provider = token.provider;
        // session.token = token;
      }
      return session;
    }
  },
  session: {
    strategy: 'jwt',
    maxAge: Number(process.env.NEXT_APP_JWT_TIMEOUT!)
  },
  jwt: {
    secret: process.env.NEXT_APP_JWT_SECRET
  },
  pages: {
    signIn: '/login',
    newUser: '/register'
  }
};
