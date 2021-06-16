const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies;
  
  function setup() {
     createCanvas(400,400);
     engine = Engine.create();
     myworld = engine.world;
    var obj_options = {
      isStatic : true 
    }
    var options={
      restitution : 1
    }
     ground = Bodies.rectangle (200,390,400,30, obj_options);
      World.add(myworld,ground);

      ball = Bodies.circle(150,150,30,options);
      World.add(myworld,ball);

      // console.log(ground); 
      // console.log(ground.type); 
      // console.log(ground.position.x);
      //  console.log(ground.position.y);
       } 
function draw() { 
  background('red'); 
  Engine.update(engine) ; 
  rectMode(CENTER); 
  rect(ground.position.x , ground.position.y , 400,30);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30);

 drawSprites();
}