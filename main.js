const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Add live reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  // mainWindow.webContents.openDevTools()
  mainWindow.loadFile(`${__dirname}/app/index.html`);
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir_janela_sobre', () => {
  if (sobreWindow == null) {
    sobreWindow = new BrowserWindow({ 
      width: 300,
      height: 200
    });

    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }

  sobreWindow.loadFile(`${__dirname}/app/sobre.html`);
});