setTimeout(()=> {
  // alert(document.querySelector('#s_lg_img').src)
  // 重写搜索按钮事件:
  document.querySelector('#su').onclick = () => {
    alert('click the search btn')
  }
}, 1000)