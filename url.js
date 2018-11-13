const ipc = require('electron').ipcRenderer;
const url = require('url');
const path = require('path');
const fs = require("fs");

var config = require("./config.json");

function init(){    
    var selector = document.getElementById("urls");  
    var obj = JSON.parse(config); 
    for(var key in obj){  
     var opt = document.createElement("option");  
     opt.value = key;  
     opt.innerText = key;  
     selector.appendChild(opt);  
    }  
  }  