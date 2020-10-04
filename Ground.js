class Ground {
    constructor(h){
        this.body =Bodies.rectangle(width/2, height-20, width, h, {isStatic:true});
        World.add(world,this.body);
        this.height = h;
        this.width = width;
    }
    display(){
        rectMode(CENTER);
        push();
        //fill("yellow");
        rect(this.body.position.x, this.body.position.y,this.width ,this.height  );
        pop();
    }
}