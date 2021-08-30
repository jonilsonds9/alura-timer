const { app, BrowserWindow } = require('electron');
const path = require('path');

// Add live reload
require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

app.on('ready', () => {
  console.log('Aplicação iniciada');

  let mainWindow = new BrowserWindow({
    width: 600,
    height: 400
  });

  mainWindow.loadURL(`file://${__dirname}/app/index.html`);

});

