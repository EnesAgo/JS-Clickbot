#!/usr/bin/env node

var robot = require("robotjs"); //robot js
var sleep = require("./sleep");

(async function(){


await sleep(5000);
console.log("Starting");

while(true) {

let mousePos = robot.getMousePos();

console.log(new Date().getSeconds());
console.log(secconds+5 == new Date().getSeconds());

if(mousePos.x == 0 && mousePos.y == 0){
  break;
}

robot.mouseClick();
// await sleep(100);
}

})();
