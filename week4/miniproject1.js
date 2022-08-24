var img1 = null;
var img2 = null;
var img3 = null;
var img4 = null;
var canvas = document.getElementById("canvas1");
var file = null;

function fileLoader() {
  file = document.getElementById("uploader");
  img1 = new SimpleImage(file);
  img2 = new SimpleImage(file);
  img3 = new SimpleImage(file);
  img4 = new SimpleImage(file);
  
  img1.drawTo(canvas);
}

function toGray() {
  
  for (var pixel of img2.values()) {
    
    var val = (pixel.getRed() + pixel.getGreen() + pixel.getBlue() ) / 3;
 
    pixel.setRed(val);
    pixel.setGreen(val);
    pixel.setBlue(val);
  img2.drawTo(canvas);
  }
}

function toRed() {
  for (var pixel of img3.values()) {
    
    
    pixel.setRed(255);
  }
  
  img3.drawTo(canvas);
}