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