/**

 */
'use strict';

function setup() {
  createCanvas(720, 720);
  noCursor();

}

function draw() {
}

function keyPressed() {
  if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
