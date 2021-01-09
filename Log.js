class Log
{
    constructor(x,y,height,angle)
    {
        var log_options={
            restitution:0.0, //bounciness
            friction:1.5,
            density: 1.5,
            //isStatic: true
        }
        this.body=Bodies.rectangle(x,y,10,height,log_options);//physics engine body is hidden
        this.width=10;
        this.height=height;
        Matter.Body.setAngle(this.body,angle);
        this.image=loadImage("wood2.png")
        World.add(world,this.body);
    }

    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);//point at which it tilts itself
        rotate(angle); // the angle in which it tilts
       // rectMode(CENTER);
       imageMode(IMAGE);
          //rect(200,200,50,50);
          strokeWeight(3);//border line
          fill('red'); //border colour
       // rect(0,0,this.width,this.height);//plane figure - two D figure
       image(this.image,this.width,this.height)
        pop();
    }
}