// Modules to control application life and create native browser window
const { app, BrowserWindow } = require('electron')
var ipc = require('electron').ipcMain;
// var config = require("./config.json");
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow
// let child
var url = ""
function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({ show: false })//resizable :false,movable :false,maximizable: false ,resizable :false
  // child = new BrowserWindow({parent: mainWindow, modal: false, show: false, frame: false,width:800, height: 600})

  mainWindow.setMenuBarVisibility(false)
  // and load the index.html of the app.
  mainWindow.loadFile('index.html')
  // mainWindow.loadURL('http://www.baidu.com')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
  mainWindow.webContents.on('did-finish-load', function () {
    // mainWindow.show()
    mainWindow.maximize()
    let code = `var webview = document.getElementById("webview");`
    // code += `webview.src="https://stackoverflow.com/";` 
    code += `webview.style="width:`
    code += mainWindow.getSize()[0] - 16
    code += `px; height:`
    code += mainWindow.getSize()[1] - 80
    code += `px"`
    // code.replace("1000","1000")
    // webview.style="width:1000px; height:700px"`
    mainWindow.webContents.executeJavaScript(code)
  })

  ipc.on('invokeAction', function (event, data) {
    let code = `var webview = document.getElementById("webview");`
    code += `webview.src="` 
    if((data.indexOf("https://")===-1)||data.indexOf("http://")===-1)
    {
      code += `https://` 
    }
    code += data 
    code += `";` 
    mainWindow.webContents.executeJavaScript(code)
  });

  mainWindow.on('ready-to-show', function () {
    // child.setSize(mainWindow.getSize()[0]-18, mainWindow.getSize()[1]-60)
    // child.setPosition(mainWindow.getPosition()[0]+9,mainWindow.getPosition()[1]+60)
    // mainWindow.show()
    // child.show()

    // let code = `var webview = document.getElementById("webview");`
    // code += `webview.style="width:`
    // code += mainWindow.getSize()[0]-16
    // code += `px; height:`
    // code += mainWindow.getSize()[1]-125
    // code += `px"`
    // mainWindow.webContents.executeJavaScript(code)
  })

  mainWindow.on('show', function () {
    // let code = `var webview = document.getElementById("webview");`
    // code += `webview.style="width:`
    // code += mainWindow.getSize()[0]-16
    // code += `px; height:`
    // code += mainWindow.getSize()[1]-125
    // code += `px"`
    // mainWindow.webContents.executeJavaScript(code)
  })

  mainWindow.on('resize', function () {
    let code = `var webview = document.getElementById("webview");`
    code += `webview.style="width:`
    code += mainWindow.getSize()[0] - 16
    code += `px; height:`
    code += mainWindow.getSize()[1] - 80
    code += `px"`
    // code.replace("1000","1000")
    // webview.style="width:1000px; height:700px"`
    mainWindow.webContents.executeJavaScript(code)
    // child.setSize(mainWindow.getSize()[0]-18, mainWindow.getSize()[1]-60)
    // child.setPosition(mainWindow.getPosition()[0]+9,mainWindow.getPosition()[1]+60)
    //mainWindow.reload()
    //child.reload()
  })
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
    // child = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
