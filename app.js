var app = require('app');  // Module to control application life.  
var BrowserWindow = require('browser-window');  // Module to create native browser window.
var express = require('express');
var logger = require('morgan');
const {app, autoUpdater, BrowserWindow, dialog, Menu, Tray} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

function startExpress()
{
  var app = express();

  app.use(logger('combined'));
  app.set('views', __dirname + '/front/main.html');
  app.set('view engine', 'ejs');
  app.use(express.static(__dirname + '/font'));

  app.get('/', function(req, res) {
    res.render(__dirname + '/font/main.html');
  });

  app.listen(3000);
}

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600});

  win.webContents.openDevTools();
  win.setMenu(null);

  win.loadURL('file://' + __dirname + '/front/main.htm');
  
  win.on('close', function(event) {
    if (!app.isQuiting) {
      event.preventDefault()
      win.hide();
    }
  });

  win.on('minimize',function(event) {
  });
}

// Quit when all windows are closed.
app.on('window-all-closed', function() {  
  if (process.platform != 'darwin')
    app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', function() {
  startExpress()
  createWindow();
});