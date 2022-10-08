const os = require('os');
const path = require('path');
const tostify = require('toastify-js');

const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('os', {
  homeDir: () => os.homedir(),
});

contextBridge.exposeInMainWorld('path', {
  join: (...args) => path.join(...args),
});

contextBridge.exposeInMainWorld('toastify', {
  toast: (options) => tostify(options).showToast(),
});
