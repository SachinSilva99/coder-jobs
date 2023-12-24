declare global {
  namespace NodeJS {
    interface ProcessEnv {
      [key: string]: string | undefined;
      PORT?: string;
      MONGO: string;
      // add more environment variables and their types here
    }
  }
}