// THIS IS THE BRIDGE BETWEEN RENDERER.JS (your DOM/Button/UI/UI Interaction handling) AND MAIN.JS (your actual functionality that can securely call other javascript files such as memoryInterface.js)

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    // Expose a function to read memory
    readMemory: (params) => ipcRenderer.invoke('read-memory', params),

    // Expose a function to write memory
    writeMemory: (params) => ipcRenderer.invoke('write-memory', params),

    toggleMemoryValue: () => ipcRenderer.send('toggle-memory-value')

    // You can add more functions here as needed
});

// Note: ipcRenderer.invoke and ipcRenderer.send can be used for asynchronous and synchronous communication
// with the main process, respectively. Adjust as needed based on your application's requirements.
