/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var canvas = document.getElementById("mainCanvas");
            dl.log = true;
            dl.setup(canvas);
var ctx = canvas.getContext("2d");
var imgData = ctx.getImageData(0,0,canvas.width,canvas.height);

var painting = false;
var changed = false;
            
resizeCanvas();

window.addEventListener('resize', resizeCanvas,false);

var focusObject;
var x;
var y;
var distance;

function resizeCanvas() {
                //this demonstrates the advanced redraw functionality
                //the mergeImageData function is in the imageDataUtil script linked above.
                imgData = ctx.getImageData(0,0,canvas.width,canvas.height);
                canvas.height = window.innerHeight;
                canvas.width = window.innerWidth;
                ctx.putImageData(imgData,0,0);
                dl.redraw();
            }

"use strict";
            
           (function() {
                var states = {
                  IDLE: 0,
                  DRAW: 1,
                  DRAG: 2,
                  DELETE: 3,
                };
                
                    var state = states.IDLE;
                    function mouseDown(event) {
                        if (brushType.value === "delete") {
                                console.log("delete selected");
                                state = states.DELETE;
                            } else {
                                state = states.IDLE;
                            }
                        x = event.clientX - canvas.offsetLeft;
                        y = event.clientY - canvas.offsetTop;
                        var color = brushColor.value;
                        var colorStroke = strokeColor.value;
                        var type = brushType.value;
                        var size;

                        switch(state) {
                            case states.IDLE:
                                
                                if (dl.getObjectContaining(x,y) === null && type === "square") {
                                    var squareObj = new square(x, y, color, colorStroke, size, ctx);
                                    console.log("made a square");
                                    console.log(colorStroke);
                                    focusObject = squareObj;
                                    dl.addGraphicalObject(focusObject);
                                    state = states.DRAW;
                                } else if (dl.getObjectContaining(x,y) === null && type === "circle") {
                                    var circleObj = new circle(x, y, color, colorStroke, size, ctx);
                                    console.log(circleObj);
                                    console.log("made a circle");
                                    focusObject = circleObj;
                                    dl.addGraphicalObject(focusObject);
                                    state = states.DRAW;
                                } else if (dl.getObjectContaining(x,y) === null && type === "star") {
                                    console.log("star");
                                    var starObj = new star(x, y, color, colorStroke, size, ctx);
                                    console.log(starObj);
                                    console.log("made a star");
                                    focusObject = starObj;
                                    dl.addGraphicalObject(focusObject);
                                    state = states.DRAW;
                                } else if (dl.getObjectContaining(x,y) === null && type === "custom") {
                                    console.log("custom");
                                    var customObj = new custom(x, y, color, colorStroke, size, ctx);
                                    console.log(customObj);
                                    console.log("made a custom");
                                    focusObject = customObj;
                                    dl.addGraphicalObject(focusObject);
                                    state = states.DRAW;
                                } else {
                                    console.log("Object present");
                                    focusObject = dl.getObjectContaining(x,y);
                                    state = states.DRAG;
                                }
                                break;
                            case states.DRAW:
                                return;
                                break;
                            case states.DRAG:
                                return;
                                break;
                            case states.DELETE:
                                {
                                    console.log("Object exist and brush delete");
                                    focusObject = dl.getObjectContaining(x,y);
                                    console.log(focusObject);
                                    dl.removeGraphicalObject(focusObject);
                                    state = states.DELETE;
                                }
                        }
                    };
                    
                    function mouseUp(event) {
                        switch(state) {
                            case states.IDLE:
                                state = states.IDLE;
                                break;
                            case states.DRAW:
                                console.log("Draw MouseUp");
                                focusObject = null;
                                state = states.IDLE;
                                break;
                            case states.DRAG:
                                console.log("Drag MouseUp");
                                focusObject = null;
                                state = states.IDLE;
                                break;
                            case states.DELETE:
                                return;
                                break;
                            default :
                                alert("you did something impossible!");
                                break;
                        }
                    };
                    
                    function mouseMove(event) {
                        switch(state) {
                            case states.IDLE:
                                return;
                                break;
                            case states.DRAW:
                                console.log("drawing");
                                var  NewX = event.clientX - canvas.offsetLeft;
                                var NewY = event.clientY - canvas.offsetTop;
                                var xDiff = NewX - x;
                                var yDiff = NewY - y;
                                console.log(xDiff);
                                console.log(yDiff);
                                var distance = Math.sqrt(Math.pow(xDiff,2)+Math.pow(yDiff,2));
                                console.log(distance);
                                console.log(focusObject);
                                focusObject.setSize(distance);
                                state = states.DRAW;
                                break;
                            case states.DRAG:
                                console.log("dragging");
                                var NewX = event.clientX - canvas.offsetLeft;
                                var NewY = event.clientY - canvas.offsetTop;
                                var xDiff = NewX - x;
                                var yDiff = NewY - y;
                                var superX = focusObject.x + xDiff;
                                var superY = focusObject.y + yDiff;
                                focusObject.moveTo(superX,superY);
                                
                                x = NewX;
                                y = NewY;
                                
                                state = states.DRAG;
                                break;
                            case states.DELETE:
                                return;
                                break;
                            default :
                                alert("you did something impossible!");
                                break;
                        }
                    };
                canvas.addEventListener("mousedown",mouseDown);
                canvas.addEventListener("mouseup",mouseUp);
                canvas.addEventListener("mousemove",mouseMove);
         })();
         
         
         