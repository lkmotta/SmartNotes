const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1200,
    minHeight: 800,
    //fullscreen: true,
    title: 'SmartNotes',
    //icon: path.join(__dirname, 'img/ico/icon.ico'),
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
}

app.whenReady().then(createWindow);
