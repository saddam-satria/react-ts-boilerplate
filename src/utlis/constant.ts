export const MODE = import.meta.env.MODE;
export const DEV = import.meta.env.DEV;
export const BASE_URL = import.meta.env.BASE_URL;
export const PROD = import.meta.env.PROD;
export const SSR = import.meta.env.SSR;

export const SERVER_URL: string = import.meta.env.VITE_API_URL || 'http://localhost:3000';
export const API_KEY: string = import.meta.env.VITE_API_KEY;
export const SECRET_KEY: string = import.meta.env.VITE_SECURE_LOCAL_STORAGE_HASH_KEY;
export const API_URL: string = DEV ? 'http://localhost:3000/api/v1' : SERVER_URL;
export const API_HEADER_KEY: string = import.meta.env.VITE_API_HEADER_KEY || 'x-api-key';
export const SESSION_STORAGE_KEY = import.meta.env.VITE_SESSION_STORAGE_KEY || '_SESSION';
export const AUTH_HEADER_KEY = import.meta.env.VITE_AUTH_HEADER_KEY || 'bearer';
export const LANG: 'id' | 'en' = import.meta.env.VITE_LANG || 'id'; // Bahasa
