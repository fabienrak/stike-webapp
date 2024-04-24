import axios, { Axios, AxiosRequestConfig } from 'axios';
// import { getSession } from 'next-auth/react';

interface fetchClientProps {
  method?: string;
  url: string;
  body?: string;
  token?: string;
}

// const axiosServices = axios.create({ baseURL: process.env.NEXT_APP_API_URL });
const axiosServices = axios.create({ 
  baseURL: process.env.NEXT_APP_API_URL,
  responseType: 'json'
});

// ==============================|| AXIOS - FOR MOCK SERVICES ||============================== //


/**
 * Request interceptor to add Authorization token to request
 */
axiosServices.interceptors.request.use(

  async (config) => {
    const session = await getSession();
    // if (session?.token.accessToken) {
    //   config.headers['Authorization'] = `Bearer ${session?.token.accessToken}`;
    // }
    if(session){
      config.headers['Authorization'] = `Bearer ${session?.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  } 
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401 && !window.location.href.includes('/login')) {
      window.location.pathname = '/login';
    }
    return Promise.reject((error.response && error.response.data) || 'Wrong Services');
  }
);

export default axiosServices;

/* export const fetcher = async (args: string | [string, AxiosRequestConfig] ) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.get(url, { ...config });

  return res.data;
};

export const fetcherPost = async (args: string | [string, AxiosRequestConfig]) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosServices.post(url, { ...config });

  return res.data;
}; */

/* export const fetchClient = async (body: string, url: string, token: string) => {
  try {
    const session = await getSession();
    const accessToken = token || session?.accessToken;

    const response = await axiosServices.get(url.toString(), {
      headers : {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer" + accessToken,
      },
      params: {
        body: body || undefined
      }
    });

    if(response.status === 200){
      console.log("****** ca marche my Nigga : ******* " + response)
    }
  } catch (error){
    if(error instanceof Response){
      if(error.status === 401){
        signOut()
      }
    }
  }
} */
