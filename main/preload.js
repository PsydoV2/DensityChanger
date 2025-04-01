const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("api", {
  checkConfig: (callback) => {
    ipcRenderer.once("config-result", (_, data) => {
      callback(data);
    });
    ipcRenderer.send("check-config");
  },
});
