const {app, Menu, webFrame, BrowserWindow} = require('electron');
const Store = require('electron-store');
const store = new Store();
let mainWindow;

let bounds = {x:0, y:0, width:330, height:800};

// Fixes it for Windows 10, noticed much more stable performance in OBS Linux as well.
app.disableHardwareAcceleration();

const menuTemplate = [
    {
        label: 'View',
        submenu: [
            { role: 'reload' },
            { role: 'forcereload' },
            { type: 'separator' },
            { role: 'resetzoom' },
            { role: 'zoomin', accelerator:'=' },
            { role: 'zoomout', accelerator:'-' }
        ]
    },
    {
        role: 'window',
        submenu: [
            { role: 'minimize' },
            { role: 'close' }
        ]
    }
];
const menu = Menu.buildFromTemplate(menuTemplate);

function createWindow () {


    cwd = __dirname;
    if (process.platform === "win32") {
        ico = cwd+"/icons/icon.ico"; 
    } else if (process.platform === "darwin") {
        ico = cwd+"/icons/icon.icns";
    }else {
        ico = cwd+"/icons/icon.png";
    } 

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
        toolbar:false,
        maximizable:false,
        minimizable:false,
        fullscreen:false,
        autoHideMenuBar:true,
        webPreferences:{nodeIntegration:true}
    };

    mainWindow = new BrowserWindow(windowConfig);
    mainWindow.setMenu(menu);

    // Our Controller File
    mainWindow.loadFile('app/index.html');

    // Track Movement and Resize
    mainWindow.on('resize', trackWindow);
    mainWindow.on('move', trackWindow);

    // Save our Window Bounds for Next Session
    mainWindow.on('closed', function () {

        console.log('here');

        // Save Bounds on Exit
        store.set('config', {bounds:bounds});

        mainWindow = null;

    })

    /*Shortcut.register(mainWindow, 'F1', () => {
        let zoom = webFrame.getZoomFactor();
        console.log(zoom);
        webFrame.setZoomFactor(zoom+.25);
    });*/

    mainWindow.on('keyup', function(e) {
        console.log(e);
    });
    
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


