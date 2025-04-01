export {};

declare global {
  interface Window {
    api: {
      checkConfig: (
        callback: (result: { ats: boolean; ets: boolean }) => void
      ) => void;
    };
  }
}
