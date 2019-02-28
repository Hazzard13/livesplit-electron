const {app, BrowserWindow} = require('electron');
const Store = require('electron-store');
const store = new Store();
let mainWindow;
let bounds = {x:0, y:0, width:330, height:800};

// Fixes it for Windows 10, noticed much more stable performance in OBS Linux as well.
app.disableHardwareAcceleration();

function createWindow () {


    cwd = __dirname;
    if (process.platform === "win32") {
        ico = cwd+"/icons/icon.ico"; 
    } else if (process.platform === "darwin") {
        ico = cwd+"/icons/icon.icns";
    }else {
        ico = cwd+"/icons/icon.png";
    } 
    console.log(ico);

    // Check for Saved Bounds 
    if (typeof store.get('config') !== 'undefined' && typeof store.get('config').bounds !== 'undefined' && store.get('config').bounds !== null) {
        bounds = store.get('config').bounds;
    }
    
    const windowConfig = {
        title:"LiveSplit Electron",
        icon:ico,
        width:bounds.width,
        height:bounds.height,
        x:bounds.x,
        y:bounds.y,
        minWidth:50, 
        minHeight:50, 
        menu:null,
        toolbar:false,
        maximizable:false,
        minimizable:false,
        fullscreen:false,
        webPreferences:{nodeIntegration:true}
    };

    mainWindow = new BrowserWindow(windowConfig);
    mainWindow.setMenu(null);

    // Our Controller File
    mainWindow.loadFile('app/index.html');

    // Track Movement and Resize
    mainWindow.on('resize', trackWindow);
    mainWindow.on('move', trackWindow);

    // Save our Window Bounds for Next Session
    mainWindow.on('closed', function () {

        // Save Bounds on Exit
        store.set('config', {bounds:bounds});

        mainWindow = null;

    })

    
}

function trackWindow() {
    bounds = mainWindow.getBounds();
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit();
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow();
    }
});


