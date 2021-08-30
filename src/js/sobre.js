const { ipcRenderer, shell } = require('electron');
const process = require('process');

let linkFechar = document.querySelector('#link-fechar');
let linkYoutube = document.querySelector('#link-youtube');
let versaoElectron = document.querySelector('#versao_electron');

window.onload = function() {
  versaoElectron.textContent = process.versions.electron;
}

linkFechar.addEventListener('click', function () {
  console.log('e pra fechar');
  ipcRenderer.send('fechar_janela_sobre');
});

linkYoutube.addEventListener('click', function () {
  shell.openExternal('https://www.youtube.com/');
});