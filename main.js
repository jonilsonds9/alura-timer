const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

// Add live reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.webContents.openDevTools()
  mainWindow.loadFile(`${__dirname}/src/index.html`);
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
      height: 230,
      parent: mainWindow,
      modal: true,
      alwaysOnTop: true,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    });

    sobreWindow.on('closed', () => {
      sobreWindow = null;
    });
  }

  sobreWindow.loadFile(`${__dirname}/src/sobre.html`);
});

ipcMain.on('fechar_janela_sobre', () => {
  sobreWindow.close();
});