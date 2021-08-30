const { ipcRenderer } = require('electron');

let linkSobre = document.querySelector('#link-sobre');

linkSobre.addEventListener('click', function () {
  ipcRenderer.send('abrir_janela_sobre');
});