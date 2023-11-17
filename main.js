const { app, BrowserWindow } = require('electron');
const path = require('path');
const { ipcMain } = require('electron');
const memoryInterface = require('./src/scripts/memoryInterface.js'); // Adjust the path as necessary


function createWindow() {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1200,
        height: 900,
        webPreferences: {
            preload: path.join(__dirname, 'src/scripts/preload.js'), // Assuming you have a preload.js
            nodeIntegration: false, // It's a security practice to keep this false
            contextIsolation: true // Protect against prototype pollution
        }
    });

    // Load the index.html of the app.
    mainWindow.loadFile('src/index.html');

    // Open the DevTools. You can comment this out in production
    //mainWindow.webContents.openDevTools();

    
    ipcMain.on('toggle-memory-value', () => {
        memoryInterface.toggleMemory();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('read-memory', async (event, params) => {
    // Handle the read memory operation
});

ipcMain.on('write-memory', (event, params) => {
    // Handle the write memory operation
});
