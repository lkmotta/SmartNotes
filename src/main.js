const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    minWidth: 1280,
    minHeight: 720,
    //fullscreen: true,
    title: 'SmartNotes',
    icon: path.join(__dirname, 'img/notepad_icon_24px.png'), // icon temporário
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.maximize(); // maximizando a janela por padrão
  win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
}

app.whenReady().then(createWindow);
