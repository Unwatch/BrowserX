const ipc = require('electron').ipcRenderer;
// const url = require('url');
// const path = require('path');
// const fs = require("fs");

// var config = require("./config.json");
var config =
{
  "default_url": "www.hao123.com",
  "data": [
    {
      "url": "www.baidu.com",
      "name": "线路一"
    },
    {
      "url": "www.google.com",
      "name": "线路二"
    }
  ]
}

// function init1() {
//   var selector = document.getElementById("urls");
//   var obj = JSON.parse(config);
//   for (var key in obj) {
//     var opt = document.createElement("option");
//     opt.value = key;
//     opt.innerText = key;
//     selector.appendChild(opt);
//   }
// }

function init() {
  var selector = document.getElementById("urls");
  selector.options.length = 0;

  for (j = 0, len = config["data"].length; j < len; j++) {
    // var opt = document.createElement("option");
    // opt.innerText = config["data"][j].name;
    // opt.value = config["data"][j].url;
    selector.options.add(new Option(config["data"][j].name, config["data"][j].url));
  }
}

function LoadUrl(url){
  ipc.send('invokeAction', url);     
} 
