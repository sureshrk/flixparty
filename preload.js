const {contextBridge,ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('versions', {
    electron: () => process.versions.electron,
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    ares: () => process.versions.ares,
   ping: () => ipcRenderer.invoke('ping')
    
})