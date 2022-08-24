// Programming Exercise : Modifying Images

// 1.
var img = new SimpleImage("hilton.jpg");
print(img);


var width = img.getWidth();

print(width);

for (var pixel of img.values()) {
    
    if ( pixel.getX() < (width/3) ) {
        pixel.setRed(255);
    } 
    
    else {
        
        if ( pixel.getX() > (width/3) * 2) {
            pixel.setBlue(255);
        }
        else {
            
            pixel.setGreen(255);
        }


        
    }
}

print(img);

// 2.

var img = new SimpleImage("chapel.png");

function swapRedGreen(pixel) {
    
    var red = pixel.getRed();
    var green = pixel.getGreen();
    
    pixel.setRed(green);
    pixel.setGreen(red);
    
}

for (var pixel of img.values()) {
    swapRedGreen(pixel)
}

print(img);

// 3.

var img = new SimpleImage("duke_blue_devil.png");

function ColorChanger(image) {
    
    for (var pixel of image.values() ) {
        
        var red = pixel.getRed()
        var green = pixel.getGreen()
        var blue = pixel.getBlue()
        
        if (red == 255){
            
            if (green == 255) {
                
                if (blue == 255) {
                    continue;
                }
                
                else {
                    pixel.setRed(255);
                    pixel.setGreen(255);
                    pixel.setBlue(0);
                }
                
            }
            
            else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(0);
            }
        
        }
        
        else {
            pixel.setRed(255);
            pixel.setGreen(255);
            pixel.setBlue(0);
        }
        
    }
    
    return image;
    
}


print(ColorChanger(img));

// Advanced
// part 2.

var img = new SimpleImage(200,200);
for (var px of img.values()){
  var x = px.getX();
  var y = px.getY();
  if (x < img.getWidth()/2){
    px.setRed(255);
  }
  if (y>img.getHeight()/2){
    px.setBlue(255);
  }
  else {
      
      if (x < img.getWidth()/2) {
          continue;
      }
      else {
          px.setGreen(255);
      }
    
  }
}
print (img);

// part 3.

var img = new SimpleImage("smallpanda.png");


function setBlack(pixel){
    pixel.setRed(0);
    pixel.setGreen(0);
    pixel.setBlue(0);
}


for (var pixel of img.values()) {
    
    var x = pixel.getX();
    var y = pixel.getY();
    
    if ( (x <= 10) || (x >= img.getWidth()- 10)) {
        setBlack(pixel);
    }
    
    else {
        if ( (y <= 10) || ( y >= img.getHeight() - 10)) {
            setBlack(pixel);
        }
        else {
            continue;
        }
    }
    
}

print(img);