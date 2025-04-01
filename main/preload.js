const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("api", {
  // sichere Funktionen bereitstellen
});
