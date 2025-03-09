const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const widthMinima = (width / 2); // metade da tela
  const heightMinima = height;
  
  const win = new BrowserWindow({
    minWidth: widthMinima,
    minHeight: heightMinima,
    //fullscreen: true,
    autoHideMenuBar: true, // 'alt' para mostrar a barra de menu
    title: 'SmartNotes',
    icon: path.join(__dirname, 'img/logo.ico'), // ícone da aplicação
    webPreferences: {
      nodeIntegration: true,
    },
  });

  win.maximize(); // maximizando a janela por padrão
  win.loadURL(`file://${path.join(__dirname, 'index.html')}`);
}

app.whenReady().then(createWindow);
