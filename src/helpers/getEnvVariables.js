// src/helpers/getEnvVariables.js
const VITE_API_URL = import.meta.env.VITE_API_URL;

export const getEnvVariables = () => {
  return {
    VITE_API_URL,
  };
};
