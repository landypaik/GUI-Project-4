/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
            //(function() { // all of this code sits inside of an IIFE

                var square = function(x, y, color, colorStroke, size, ctx) {

                    this.x = x;
                    this.y = y;
                    this.color = color;
                    this.colorStroke = colorStroke;
                    this.size = size;
                    
                    this.draw = function(ctx) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle= this.colorStroke;
                        ctx.lineWidth=10;
                        ctx.fillStyle=this.color;
                        ctx.fillRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                        ctx.strokeRect(this.x-this.size/2,this.y-this.size/2,this.size,this.size);
                        ctx.restore();
                    };
                    
                    this.contains = function(x,y) {
                    return this.x - this.size/2 <= x && this.x + this.size/2 >= x
                        && this.y - this.size/2 <= y && this.y + this.size/2 >= y;
                    };

                    this.setSize = function(size) {
                        this.size = size;
                        dl.redraw();
                    };

                    this.moveTo = function (x,y){
                        this.x = x;
                        this.y = y;
                        dl.redraw();
                    };
                };
      //  });
                var circle = function(x,y,color,colorStroke, size,ctx) {
                    this.x = x;
                    this.y = y;
                    this.color = color;
                    this.colorStroke = colorStroke;
                    this.size = size;
                    
                    this.draw = function(ctx) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=10;
                        ctx.fillStyle=this.color;
                        ctx.arc(this.x,this.y,this.size/2,0,2*Math.PI);
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();
                    };
                    
                    this.contains = function(x,y) {
                    return this.x - this.size/2 <= x && this.x + this.size/2 >= x
                        && this.y - this.size/2 <= y && this.y + this.size/2 >= y;
                    };

                    this.setSize = function(size) {
                        this.size = size;
                        dl.redraw();
                    };

                    this.moveTo = function (x,y){
                        this.x = x;
                        this.y = y;
                        dl.redraw();
                    };
                };
                
                var star = function(x, y, color, colorStroke, size, ctx) {
                    this.x = x;
                    this.y = y;
                    this.color = color;
                    this.colorStroke = colorStroke;
                    this.size = size;
                    
                    this.draw = function(ctx) {
                        var deg2rad = Math.PI/180;
                        var tan18 = Math.tan(18*deg2rad);
                        var cos18 = Math.cos(18*deg2rad);
                        var sin36 = Math.sin(36*deg2rad);
                        var cos36 = Math.cos(36*deg2rad);
                        
                        var midx = this.size/2;
                        var midy = midx*tan18;
                        var topy = midx/cos18;
                        var botx = topy*sin36;
                        var boty = topy*cos36;
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=10;
                        ctx.fillStyle = this.color;
                        ctx.moveTo(this.x-midx,this.y-midy);
                        ctx.lineTo(this.x+midx,this.y-midy);
                        ctx.lineTo(this.x-botx,this.y+boty);
                        ctx.lineTo(this.x,this.y-topy);
                        ctx.lineTo(this.x+botx,this.y+boty);
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();
                    };
                    
                    this.contains = function(x,y) {
                    return this.x - this.size/2 <= x && this.x + this.size/2 >= x
                        && this.y - this.size/2 <= y && this.y + this.size/2 >= y;
                    };

                    this.setSize = function(size) {
                        this.size = size;
                        dl.redraw();
                    };

                    this.moveTo = function (x,y){
                        this.x = x;
                        this.y = y;
                        dl.redraw();
                    };
                };
                    
                var custom = function(x, y,color, colorStroke, size,ctx) {
                    this.x = x;
                    this.y = y;
                    this.color = color;
                    this.colorStroke = colorStroke;
                    this.size = size;
                    
                    this.draw = function(ctx) {
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=10;
                        ctx.fillStyle=this.color;
                        ctx.arc(this.x,this.y,this.size/2,0,2*Math.PI);
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=3;
                        ctx.fillStyle="white";
                        ctx.arc(this.x,this.y,this.size/2.25,0,2*Math.PI);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle=this.color;
                        ctx.arc(this.x,this.y,this.size/2.5,0,2*Math.PI);
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle="white";
                        ctx.arc(this.x,this.y,this.size/3,0,2*Math.PI);
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();

                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=3;
                        ctx.fillStyle=this.color;;
                        ctx.fillRect(this.x-this.size/4,this.y-this.size/4,this.size/2,this.size/2);
                        ctx.strokeRect(this.x-this.size/4,this.y-this.size/4,this.size/2,this.size/2);
                        ctx.restore();
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle="white";
                        ctx.arc(this.x,this.y,this.size/3.7,0,2*Math.PI);
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();
                        
                        var deg2rad = Math.PI/180;
                        var tan18 = Math.tan(18*deg2rad);
                        var cos18 = Math.cos(18*deg2rad);
                        var sin36 = Math.sin(36*deg2rad);
                        var cos36 = Math.cos(36*deg2rad);
                        
                        var midx = this.size/4.5;
                        var midy = midx*tan18;
                        var topy = midx/cos18;
                        var botx = topy*sin36;
                        var boty = topy*cos36;
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle = this.color;
                        ctx.moveTo(this.x-midx,this.y-midy);
                        ctx.lineTo(this.x+midx,this.y-midy);
                        ctx.lineTo(this.x-botx,this.y+boty);
                        ctx.lineTo(this.x,this.y-topy);
                        ctx.lineTo(this.x+botx,this.y+boty);
                        ctx.closePath();
                        ctx.stroke();
                        ctx.fill();
                        ctx.restore();
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle = "white";
                        var height = this.size;
                        var width = this.size;
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(this.x-width/20, this.y-height/10);
                        ctx.lineTo(this.x+width/20, this.y-height/10);
                        ctx.lineTo(this.x, this.y);
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();
                        
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle = "white";
                        var height = this.size;
                        var width = this.size;
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(this.x+width/20, this.y+height/10);
                        ctx.lineTo(this.x-width/20, this.y+height/10);
                        ctx.lineTo(this.x, this.y);
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();
                     
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle = "white";
                        var height = this.size;
                        var width = this.size;
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(this.x+height/10, this.y+width/20);
                        ctx.lineTo(this.x+height/10, this.y-width/20);
                        ctx.lineTo(this.x, this.y);
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();
    
                        ctx.save();
                        ctx.beginPath();
                        ctx.strokeStyle=this.colorStroke;
                        ctx.lineWidth=5;
                        ctx.fillStyle = "white";
                        var height = this.size;
                        var width = this.size;
                        ctx.beginPath();
                        ctx.moveTo(this.x, this.y);
                        ctx.lineTo(this.x-height/10, this.y-width/20);
                        ctx.lineTo(this.x-height/10, this.y+width/20);
                        ctx.lineTo(this.x, this.y);
                        ctx.stroke();
                        ctx.fill();
                        ctx.closePath();
                    };
                    
                    this.contains = function(x,y) {
                    return this.x - this.size/2 <= x && this.x + this.size/2 >= x
                        && this.y - this.size/2 <= y && this.y + this.size/2 >= y;
                    };

                    this.setSize = function(size) {
                        this.size = size;
                        dl.redraw();
                    };

                    this.moveTo = function (x,y){
                        this.x = x;
                        this.y = y;
                        dl.redraw();
                    };
            };        