declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_WEATHER_API_URL: string;
      REACT_APP_WEATHER_APP_ID: string;
    }
  }
}

export {};
