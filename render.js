// render process demo 
const fs = require('fs')
window.onload = function() {
  // [render process demo]
  const btn = this.document.querySelector('#btn')
  const myBabe = this.document.querySelector('#myBabe')
  btn.onclick = function() {
    fs.readFile('xiaojiejie.txt' , (error, data)=> {
      myBabe.innerHTML = data
    })
  }

  // [file 对象]
  const fileDragWrap = document.getElementById('drag-test')
  fileDragWrap.addEventListener('drop', e => {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer.files;
    for (const f of files) {
      // 读取路径:
      console.log('File(s) you dragged here: ', f.path)
      // 读取内容:
      console.log('File(s) content: ', fs.readFileSync(f.path).toString())
    }
  })
  fileDragWrap.addEventListener('dragover', (e) => {
    e.preventDefault();
    e.stopPropagation();
  });
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



