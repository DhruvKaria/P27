class Roof{

    constructor (x,y,width,height){
        var option ={
            isStatic:true,
            friction:0,
            restitution:1,
            density:0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        fill ("orange")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop ()
    }
}