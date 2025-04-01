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

var atsCfgPath = path.join(
  os.homedir(),
  "Documents",
  "American Truck Simulator",
  "config.cfg"
);
var etsCfgPath = path.join(
  os.homedir(),
  "Documents",
  "Euro Truck Simulator 2",
  "config.cfg"
);

ipcMain.on("checkConfig", (event) => {
  const result = {
    ats: fs.existsSync(atsCfgPath),
    ets: fs.existsSync(etsCfgPath),
  };

  event.reply("checkConfigResult", result);
});

ipcMain.on("readAtsValuesFromConfig", (event) => {
  if (!fs.existsSync(atsCfgPath)) {
    console.warn("config.cfg nicht gefunden:", filePath);
    return null;
  }

  let traffic;
  let pedestrian;
  let matchTraffic;
  let matchPedestrian;

  const content = fs.readFileSync(atsCfgPath, "utf-8");

  matchTraffic = content.match(/uset\s+g_traffic\s+"([\d.]+)"/);

  if (matchTraffic && matchTraffic[1]) {
    traffic = Math.round(parseFloat(matchTraffic[1]));
  } else {
    traffic = 1;
  }

  matchPedestrian = content.match(/uset\s+g_pedestrian\s+"([\d.]+)"/);

  if (matchPedestrian && matchPedestrian[1]) {
    pedestrian = Math.round(parseFloat(matchPedestrian[1]));
  } else {
    traffic = 1;
  }

  const result = {
    traffic: traffic,
    pedestrian: pedestrian,
  };

  event.reply("readAtsValuesFromConfigResult", result);
});

ipcMain.on("readEtsValuesFromConfig", (event) => {
  if (!fs.existsSync(etsCfgPath)) {
    console.warn("config.cfg nicht gefunden:", filePath);
    return null;
  }

  let traffic;
  let pedestrian;
  let matchTraffic;
  let matchPedestrian;

  const content = fs.readFileSync(etsCfgPath, "utf-8");

  matchTraffic = content.match(/uset\s+g_traffic\s+"([\d.]+)"/);

  if (matchTraffic && matchTraffic[1]) {
    traffic = Math.round(parseFloat(matchTraffic[1]));
  } else {
    traffic = 1;
  }

  matchPedestrian = content.match(/uset\s+g_pedestrian\s+"([\d.]+)"/);

  if (matchPedestrian && matchPedestrian[1]) {
    pedestrian = Math.round(parseFloat(matchPedestrian[1]));
  } else {
    traffic = 1;
  }

  const result = {
    traffic: traffic,
    pedestrian: pedestrian,
  };

  event.reply("readEtsValuesFromConfigResult", result);
});
