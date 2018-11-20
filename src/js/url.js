const ipc = require('electron').ipcRenderer;
// const url = require('url');
// const path = require('path');
// const fs = require("fs");

// var config = require("./config.json");

//设置地址栏宽度
// var width = window.innerWidth;
// var select = document.getElementById('urls');
// select.style.width = "500px";
// $(".sel_wrap").on("change", function () {
//   var o;
//   var opt = $(this).find('option');
//   opt.each(function (i) {
//     if (opt[i].selected == true) {
//       o = opt[i].innerHTML;
//     }
//   })
//   $(this).find('label').html(o);
// }).trigger('change');

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
  $.getJSON("http://www.ddd.vip/dataInterface.php?type=client", function (req) {
    $.each(req, function (key, val) {
      if (key == "default_url") {
        LoadUrl(val);
      }
      else if(key == "data") {
        var selector = document.getElementById("urls");
        selector.options.length = 0;     
        $.each(val, function (key_data, val_data) {
          selector.options.add(new Option(val_data.name, val_data.url));
        });
      }
    });
  });
}

function init_bak() {
  var selector = document.getElementById("urls");
  selector.options.length = 0;

  for (j = 0, len = config["data"].length; j < len; j++) {
    // var opt = document.createElement("option");
    // opt.innerText = config["data"][j].name;
    // opt.value = config["data"][j].url;
    selector.options.add(new Option(config["data"][j].name, config["data"][j].url));
  }

  ipc.send('invokeAction', config["default_url"]);
}

function LoadUrl(url) {
  ipc.send('invokeAction', url);
} 
