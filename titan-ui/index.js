"use strict";
const { app, BrowserWindow } = require('electron');
const createWindow = () => {
    const win = new BrowserWindow({
        width: 1240,
        height: 695,
        x: 3880,
        y: 697,
        //skipTaskbar: true, // Show on taskbar
        //alwaysOnTop: true,
        frame: false,
        show: true,
        darkTheme: true
    });
    win.loadFile('html/index.html');
};
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
//# sourceMappingURL=index.js.map