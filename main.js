// console.log('Hello from Electron 👋')
//const {app, BrowserWindow } = require('electron');
//Following is for better typechecking
const { app, BrowserWindow,ipcMain } = require('electron/main');
const  path  = require('path');

const createWindow = () => {


    const win = new BrowserWindow({
        width:600,
        height:800,
        webPreferences: {
           preload: path.join(__dirname,'./preload.js')
        }
    });
    win.loadFile('index.html');

    return win;
};

app.whenReady().then(()=>{
    //WhenReady async load Promise Resolved
    ipcMain.handle('ping',() => 'pong');
    createWindow();
    
    app.on('window-all-closed', () => {
        console.log("window-all-closed");
        if (process.platform !== 'darwin') {
            
            app.quit();
        }
      
    })

    app.on('activate', () => {
        console.log("activate");
        if (BrowserWindow.getAllWindows().length === 0) {
            
            createWindow();
        }
    })


}).catch((err) => {
    //WhenRead async load Promise rejected
    console.log("App fatal error occurred and promise rejected:\n",err);
})
