class Bin
 {
    constructor(x, y, width, height)
     {
      var options = 
      {
          isStatic:true,
          restitution:0.3,
          fricition:0.5,
          density:1.2
      }
      this.leftbody = Bodies.rectangle(770,350,20,200, options);
      this.rightbody = Bodies.rectangle(950,350,20,200, options);
      this.bottombody = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("dustbingreen.png")
      this.width = width;
      this.height = height;
      
      World.add(world, this.leftbody);
      World.add(world, this.rightbody);
      World.add(world, this.bottombody);
    }
    display()
    {
      var posb =this.bottombody.position;
      imageMode(CENTER);
      
      image(this.image,posb.x, posb.y-80, this.width, this.height+200);
    }
  }