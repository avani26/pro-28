class Stone{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0.0,
            friction:1,
           }
           this.r=r;
    this.body= Matter.Bodies.circle(x,y,r,options);
    this.image=loadImage("stone.png");
    World.add(world,this.body);
        }
       display(){
           var pos=this.body.position;
           var angles=this.body.angle;
           push();
           translate(pos.x,pos.y);
           rotate(angles);
           image(this.image,pos.x,pos.y,this.r,this.r)
           pop();
       } 
    }