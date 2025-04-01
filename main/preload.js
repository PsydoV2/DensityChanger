const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  checkConfig: (callback) => {
    ipcRenderer.once("checkConfigResult", (_, data) => {
      callback(data);
    });
    ipcRenderer.send("checkConfig");
  },
  readAtsValuesFromConfig: (callback) => {
    ipcRenderer.once("readAtsValuesFromConfigResult", (_, data) => {
      callback(data);
    });
    ipcRenderer.send("readAtsValuesFromConfig");
  },
  readEtsValuesFromConfig: (callback) => {
    ipcRenderer.once("readEtsValuesFromConfigResult", (_, data) => {
      callback(data);
    });
    ipcRenderer.send("readEtsValuesFromConfig");
  },
  setAtsValues: (values) => ipcRenderer.send("setAtsValues", values),
  setEtsValues: (values) => ipcRenderer.send("setEtsValues", values),
});
