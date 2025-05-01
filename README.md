# Traffic Density Changer for ETS2 / ATS 🚚

An Electron-based desktop app that allows players of _Euro Truck Simulator 2_ and _American Truck Simulator_ to easily adjust the in-game traffic and pedestrian density settings without editing config files manually.

This project was built for both personal use and as a showcase of practical desktop app development using modern web technologies.

---

## 🧩 Features

- ✅ Automatic detection of ETS2 and ATS configuration files
- 🎚️ Easy adjustment of `g_traffic` and `g_pedestrian` via sliders
- 💾 Config values are read and written directly to `config.cfg`
- 🔒 Fully sandboxed using Electron's `contextBridge`
- 🚫 Disabled UI sections if the corresponding config file is not found
- 🖥️ Fully portable `.exe` version – no installation required

---

## 📸 Screenshots

<!-- Add your own screenshots here later -->
<!-- ![App Screenshot](./assets/screenshot.png) -->

---

## 🚀 Getting Started

### ⚡ Just want to use the app?

If you're only interested in using the app (not developing it), simply grab the generated `.exe`:

```
dist/Traffic Density Changer.exe
```

No installer or setup needed — just copy the `.exe` anywhere and run it.  
Your game’s `config.cfg` will be updated directly in your `Documents` folder.

---

### 🛠 Requirements

- Node.js (LTS recommended)
- Windows OS (tested on Windows 10/11)

### 📦 Install dependencies

```bash
npm install
cd frontend
npm install
```

### 🧪 Run in development mode

```bash
npm run dev
```

This will run the React frontend via Vite and launch Electron in dev mode.

### 📦 Build for production (Portable .exe)

```bash
npm run build
```

The output `.exe` file will be located in `dist/`. You can zip or distribute it directly.

---

## 🧠 How It Works

### Configuration File Detection

On app start, the Electron main process searches for:

```txt
%USERPROFILE%\Documents\American Truck Simulator\config.cfg
%USERPROFILE%\Documents\Euro Truck Simulator 2\config.cfg
```

If either file exists, the corresponding UI section is activated. If not, it remains visually "disabled".

---

### Reading Config Values

When a file is found, the app reads the values of:

- `g_traffic`
- `g_pedestrian`

These are extracted using regular expressions and shown in the sliders.

---

### Changing Values

When the user adjusts sliders and confirms changes, Electron updates the respective `config.cfg` file:

```txt
uset g_traffic "5.0"
uset g_pedestrian "3.0"
```

If the keys don’t exist yet, they will be appended to the file.

---

### Security

- No `nodeIntegration` in the frontend
- All IPC handled via `contextBridge` (preload.js)
- No external internet access

---

## 🧱 Built With

- [Electron](https://www.electronjs.org/)
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript (optional)](https://www.typescriptlang.org/) – supported if needed
- [electron-builder](https://www.electron.build/) – for creating distributable `.exe`

---

## 📁 Project Structure

```
├── frontend/             # React frontend (Vite-based)
│   └── dist/             # Production build
├── main/                 # Electron main process
│   └── main.js
├── preload.js            # Secure IPC bridge
├── package.json          # Electron + builder config
└── dist/                 # Final executable after build
```

---

## 👤 Author

**Sebastian Falter**
📫 [[sfalter.de](https://sfalter.de/)]

---

## 📜 License

MIT – Feel free to use, modify or share.

---

[![Donation](https://sfalter.de/FileHosting/Donation.png)](https://streamlabs.com/psydoooo/tip)
