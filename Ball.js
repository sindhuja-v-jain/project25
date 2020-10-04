class Ball {
constructor (x , y, diameter){
    var options ={
        isStatic :false ,
        restitution :0.3,
        friction : 0.5,
        density : 1.2 
    }
this.body = Bodies.circle(x , y, diameter , options);
this.diameter=diameter;
World.add(world , this.body);
this.image= loadImage("paper.png");// c25
}
display(){
    push();
    //fill("pink");
    //circle(this.body.position.x,this.body.position.y,this.diameter );
   image(this.image, this.body.position.x,  this.body.position.y , this.diameter+10, this.diameter+10)// c25
    pop();
}
}