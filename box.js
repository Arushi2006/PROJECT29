class Box
{
  constructor(x,y,width,height)
  {
    this.image=loadImage("sprites/wood1.png");
  }  
  display()
  {
    image(this.image,this.body.position.x,this.body.position.y,50,50);
  }
}
