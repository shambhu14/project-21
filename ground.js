class Ground  
{
    constructor(x,y,w,h)
    {
        let options = {
            isStatic: true,
        };

        this.body =Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.y = y;
        World.add(world,this.body);

    }

    show(){
        var p = this.body.position;
        push();
        rectMode(CENTER);
        stroke(255);
        fill(0);
        rect(p.x,p.y,this.w,this.h);
        pop();
    }
}