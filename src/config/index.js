import config from '../../config.json';

const env = process.env.NODE_ENV || 'development';

const dev = process.env.NODE_ENV !== 'production';
export const reduxDevTools = dev ? (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) : undefined;

const envConfig = config[env];

export const BASE_URL = envConfig['BASE_URL'];
export const API_URL = envConfig['API_URL'];

export const options = {
  credentials: 'include',
  headers: {
    'x-auth-token': 'dummy-token',
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
}