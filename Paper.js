class Paper{

constructor(x,y){

    var options={
     
     isStatic:false,
     restitution:0.3,
     friction:0.5,
     density:0.09
    

    }
    this.body=Bodies.circle(x,y,70,options);
    this.radius=70;
    World.add(world,this.body);
    this.image=loadImage("sprites/paper.png");



}
display(){
var pos=this.body.position;
push();
translate(pos.x,pos.y);
fill("white");
stroke("white");
circle(0,0,this.radius);
imageMode(CENTER);
image.scale=0.5;
        image(this.image, 0, 0, this.width, this.height);
pop();
}



}
