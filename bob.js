class Bob{

    constructor (x,y,radius){
        var option ={
            isStatic:true,
            friction:0,
            restitution:1,
            density:0.8
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        push ()
        translate (pos.x,pos.y)
        rotate (this.body.angle)
        fill ("orange")
        ellipseMode(RADIUS)
        ellipse(0,0,this.radius,this.radius)
        pop ()
    }
}