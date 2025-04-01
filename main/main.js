const { app, BrowserWindow, ipcMain } = require("electron");
const fs = require("fs");
const path = require("path");
const os = require("os");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    resizable: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const startUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : `file://${path.join(__dirname, "../frontend/dist/index.html")}`;

  win.loadURL(startUrl);
}

app.whenReady().then(() => {
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on("check-config", (event) => {
  const atsPath = path.join(
    os.homedir(),
    "Documents",
    "American Truck Simulator",
    "config.cfg"
  );
  const etsPath = path.join(
    os.homedir(),
    "Documents",
    "Euro Truck Simulator 2",
    "config.cfg"
  );

  const result = {
    ats: fs.existsSync(atsPath),
    ets: fs.existsSync(etsPath),
  };

  event.reply("config-result", result);
});
