function colorChanger() {
    var tmp = document.getElementById("canvas1");
    
    tmp.style.backgroundColor = "red";
  }
  
  function colorPicker() {
    var tmp1 = document.getElementById("canvas1");
    
    var tmp2 = document.getElementById("colpic");
    
    var storage = tmp2.value;
    
    var tmp3 = tmp2.value;
    tmp1.style.backgroundColor = tmp3;
  }
  
  function slider() {
    
    var tmp = document.getElementById("canvas1");
    var context = tmp.getContext("2d");
    
    var value = document.getElementById("slider");
    
    context.fillStyle = "yellow";
    context.fillRect(15, 15, value.value, value.value);
    
    
    // Old ones are not cleared - that's why the size of the rectangle doesn't change
  }