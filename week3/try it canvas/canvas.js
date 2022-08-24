function ColorChanger() {
    var dd1 = document.getElementById("div1");
    
    var dd2 = document.getElementById("div2");
    
    dd1.className = "blueback";
    dd2.className = "orangeback";
    
    var ctx = dd1.getContext("2d");
    
    ctx.fillStyle = "yellow";
    ctx.fillRect(10, 10, 60, 60);
    ctx.fillRect(80, 10, 60, 60);
    
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText = ("Hello", 15, 45);
  }