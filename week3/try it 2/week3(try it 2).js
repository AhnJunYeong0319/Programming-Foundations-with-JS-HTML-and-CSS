function changeColor() {
    var divElement1 = document.getElementById("div1");
    var divElement2 = document.getElementById("div2");
    
    divElement1.className = "blueback";
    divElement2.className = "orangeback";
  }
  
  function changeText() {
    var El1 = document.getElementById("div1");
    var El2 = document.getElementById("div2");
    
    El1.innerHTML = "Now div 1 is changed!"
    El2.innerHTML = "Now div 2 is changed!"
  }