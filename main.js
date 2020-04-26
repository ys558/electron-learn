const { app, BrowserWindow } = require('electron')

function createWindow() {
  // 创建浏览器窗口:
  let window = new BrowserWindow({
    width: 800,
    height: 600,
    // 让 node可在渲染进程中使用:
    // allow node in render process: 
    webPreferences: { 
      nodeIntegration: true,
      webviewTag: true,
    },

    
  })

  // [常用主程序事件] webCOntents类生命周期:
  // [常用主程序事件] 导航完成
  window.webContents.on('did-finish-load', ()=> console.log('>>>> did-finish-load'))
  // [常用主程序事件] dom读取完成:
  window.webContents.on('dom-ready', ()=> console.log('>>>> dom-ready'))

  // 加载index.html文件:
  window.loadFile('index.html')
  
  window.on('closed', ()=> window = null)
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(()=>{
  // [常用主程序事件] 初始化程序:
  console.log('>>>> whenReady')
  createWindow()
})

// Quit when all windows are close
app.on('window-all-closed', ()=> {
  // [常用主程序事件] 退出主程序事件:
  console.log('>>>> window-all-closed')
  // 在macOs上, 除非用户cmd + Q确定地退出, 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') app.quit()
})


app.on('activate', ()=> {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if(BrowserWindow.getAllWindows().length === 0) createWindow()
})

