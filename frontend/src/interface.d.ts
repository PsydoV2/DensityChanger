export {};

declare global {
  interface Window {
    api: {
      checkConfig: (
        callback: (result: { ats: boolean; ets: boolean }) => void
      ) => void;
      readAtsValuesFromConfig: (
        callback: (result: { traffic: int; pedestrian: int }) => void
      ) => void;
      readEtsValuesFromConfig: (
        callback: (result: { traffic: int; pedestrian: int }) => void
      ) => void;
      setAtsValues: (values: { traffic: number; pedestrian: number }) => void;
      setEtsValues: (values: { traffic: number; pedestrian: number }) => void;
    };
  }
}
