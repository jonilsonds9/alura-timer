const { ipcRenderer } = require('electron');

let linkFechar = document.querySelector('#link-fechar');

linkFechar.addEventListener('click', function () {
  console.log('e pra fechar');
  ipcRenderer.send('fechar_janela_sobre');
});