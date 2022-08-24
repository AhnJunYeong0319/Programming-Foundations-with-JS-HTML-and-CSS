var img = null;

function uploader() {
  
  var fileinput = document.getElementById("uploader1");
  
  img = new SimpleImage(fileinput);
  
  var canvas = document.getElementById("canvas1");
  
  img.drawTo(canvas);
}

function colorChanger() {
  var width = img.getWidth();
  var height = img.getHeight();
 
  var threshold$height = (height / 7);
  
  var avgValue = 0;
  
  for (var pixel of img.values()) {
    if (pixel.getY() <= threshold$height) {
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(2*avgValue);
        pixel.setGreen(0);
        pixel.setBlue(0);
      }
      
      else {
        pixel.setRed(255);
        pixel.setGreen(2*avgValue - 255);
        pixel.setBlue(2*avgValue - 255);
      }
    
    } else if (threshold$height < pixel.getY() <= threshold$height * 2) {
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(2*avgValue);
        pixel.setGreen(0.8 * avgValue);
        pixel.setBlue(0);
      }
      
      else {
        pixel.setRed(255);
        pixel.setGreen(1.2*avgValue - 51);
        pixel.setBlue(2*avgValue - 255);
      }
      
    } else if (threshold$height * 2< pixel.getY() <= threshold$height * 3) {
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(2*avgValue);
        pixel.setGreen(2*avgValue);
        pixel.setBlue(0);
      }
      
      else {
        pixel.setRed(255);
        pixel.setGreen(255);
        pixel.setBlue(2*avgValue - 255);
      }
      
    } else if (threshold$height * 3 < pixel.getY() <= threshold$height * 4) {
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(0);
        pixel.setGreen(2*avgValue);
        pixel.setBlue(0);
      }
      
      else {
        pixel.setRed(2*avgValue - 255);
        pixel.setGreen(255);
        pixel.setBlue(2*avgValue - 255);
      }
    } else if (threshold$height * 4 < pixel.getY() <= threshold$height * 5) {
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(2 * avgValue);
      }
      
      else {
        pixel.setRed(2 * avgValue - 255);
        pixel.setGreen(2*avgValue - 255);
        pixel.setBlue(255);
      }
    } else if (threshold$height * 5 < pixel.getY() <= threshold$height * 6) {
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(0.8 * avgValue);
        pixel.setGreen(0);
        pixel.setBlue(2 * avgValue);
      }
      
      else {
        pixel.setRed(1.2*avgValue - 51);
        pixel.setGreen(2*avgValue - 255);
        pixel.setBlue(255);
      }
    } else { // 찐막 //
      
      avgValue = ( pixel.getRed() + pixel.getGreen() + pixel.getBlue() )/ 3;
      
      if (avgValue < 128) {
        pixel.setRed(1.6 * avgValue);
        pixel.setGreen(0);
        pixel.setBlue(1.6 * avgValue);
      }
      
      else {
        pixel.setRed(0.4*avgValue + 153);
        pixel.setGreen(2*avgValue - 255);
        pixel.setBlue(0.4*avgValue + 153);
      
    }
  }
    
  var canvas = document.getElementById("canvas1");
  
  img.drawTo(canvas);
}