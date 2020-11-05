var polygan;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ground = new Ground(600,30,1200,20);
  platform=new Ground (150,300,250,170);

  polygan=Bodies.circle(50,200,20);
  World.add(world,polygan);

  slingShot=new Slingshot(this.polygan,{x:100,y:200});


}

function draw() {
  background(255,255,255);  
  drawSprites();
  block1=new Block (200,275,30,40);
  block2=new Block  (230,275,30,40);
  block3=new Block  (260,275,30,40);
  block4=new Block (290,275,30,40);
  block5=new Block (320,275,30,40);
  block6=new Block (350,275,30,40);
  block7=new Block (380,235,30,40);
  block8=new Block (410,235,30,40);
  block9=new BLock (440,235,30,40);
  block10=new Block (480,35,30,40);
  block11=new Block(510,235,30,40);
  block12=new Block (540,195,30,40);
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  
  ground.display();
  platform.display();

  imageMode(CENTER);
  Image(polygan_img,polygan.position.x,polyan.position.y,40,40);
}
