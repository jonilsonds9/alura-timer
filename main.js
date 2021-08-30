const { app, BrowserWindow } = require('electron');
const path = require('path');

// Add live reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 600
  });

  mainWindow.loadFile(`${__dirname}/app/index.html`);
};

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

