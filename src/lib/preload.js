const os = require('os');
const path = require('path');
const tostify = require('toastify-js');

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('os', {
  homeDir: () => os.homedir(),
});

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('toastify', {
  toast: (options) => tostify(options).showToast(),
});

contextBridge.exposeInMainWorld('ipcRenderer', {
  send: (channel, data) => ipcRenderer.send(channel, data),
  on: (channel, callback) => ipcRenderer.on(channel, (event, ...args) => callback(...args)),
});
