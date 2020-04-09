// render process demo 
const fs = require('fs')
window.onload = function(){
  const btn = this.document.querySelector('#btn')
  const myBabe = this.document.querySelector('#myBabe')
  btn.onclick = function() {
    fs.readFile('xiaojiejie.txt' , (error, data)=> {
      myBabe.innerHTML = data
    })
  }
}


// [进程 api] 
const getProcessInfo = () => {
  console.log('getCPUUsage()', process.getCPUUsage())
  // percentCPUUsage: 0
  // idleWakeupsPerSecond: 0
  console.log('env', process.env)
  // {ALLUSERSPROFILE: "C:\ProgramData", ANDROID_HOME: "c:\Users\yuyi\AppData\Local\Android\Sdk", APPDATA: "C:\Users\yuyi\AppData\Roaming", asl.log: "Destination=file", COLORTERM: "truecolor", …}
  console.log('arch', process.arch)
  // arch x64
}