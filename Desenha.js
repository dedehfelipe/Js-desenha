function setup() {
    createCanvas(600, 600);
     background("yellow");
  }
  
  function draw() {
   
    stroke("red")
    fill("purple");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 40,40)
    }
  }
  
  
