class Drop {

constructor (x, y, r){

var options = {

restitution : 0.5,
friction : 0.5,
density : 0.5,
isStatic : false

}

this.body = Bodies.circle(x, y, r, options);
World.add(this.body, world)

}

display (){

ellipseMode(RADIUS)
stroke("blue")
fill("lightblue")
push()
translate(this.body.position.x, this.body.position.y)
rotate(this.body.angle)
ellipse(0, 0, r, r);
pop();

}


}

