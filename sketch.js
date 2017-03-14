function preload(){
  img1 = loadImage("img1.jpeg");
  img2 = loadImage("img2.jpg");
  img3 = loadImage("img3.jpg");
}

var def1;
function setup() {
  createCanvas(600,600);
  background(51);
  def1 = "to lash out, cut, or thrash about with or as if with an edged blade";
  }

function draw() {
  //rect(100,100,200,250);
  background(51);
  textSize(20);

  image(img1, width/4, height/4, width, height/2);
  text(def1, width/2,height/2, 500,500);
  for(var x = 0; x < width ; x = x + random(10,30)){
    for(var y = 0; y < height ; y = y + random(10,30)){
      text("/", x,y);
    }
  }
  tint(255,100);
  fill(0);
  rect(0,0,20,height);
  rect(width - 20,0,width,height);
  rect(0,0,width,30);
  rect(0,height - 15,width,height);
  image(img2, 0, 0, width/2, height);

  image(img3, width/2, 0, width, 3*height/4);
}


//to lash out, cut, or thrash about with or as if with an edged blade
