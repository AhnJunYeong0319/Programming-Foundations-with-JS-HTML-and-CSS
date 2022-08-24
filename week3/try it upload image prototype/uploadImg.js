function upload() {
    var imgcanvas = document.getElementById("canvas1")
    var fileInput = document.getElementById("fileUploader");
    var image = new SimpleImage(fileInput);
    
    image.drawTo(imgcanvas);
  }