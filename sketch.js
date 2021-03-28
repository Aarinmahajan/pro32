  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Constraint = Matter.Constraint;

  var engine, world;
  var holder,ground;
  var stand1,stand2;
  var bird;
  var slingShot;
  var polygon_img;
  function preload(){
    polygon_img=loadImage("polygon.png");
  }
  function setup() {
    createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
    ground = new Ground();
    stand1 = new Stand(390,300,450,10);
  
    //set 1
    //level one
    block1 = new Block(300,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    //level two
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40);
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    //level three
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    //top
    block16 = new Block(390,155,30,40);
    //set 2
    //level one
    blocks1 = new Block(520,275,30,40);
    blocks2 = new Block(550,275,30,40);
    blocks3 = new Block(580,275,30,40);
    blocks4 = new Block(610,275,30,40);
    blocks5 = new Block(630,275,30,40);
    //level two
    blocks6 = new Block(550,235,30,40);
    blocks7 = new Block(580,235,30,40);
    blocks8 = new Block(610,235,30,40);
    //top
    blocks9 = new Block(580,195,30,40);
    //set 3
    //level one
    cube1 = new Block(660,275,30,40);
    cube2 = new Block(690,275,30,40);
    cube3 = new Block(720,275,30,40);
    //level two
    cube4 = new Block(675,235,30,40);
    cube5 = new Block(705,235,30,40);
    //top
    cube6 = new Block(690,195,30,40);
    

    bird = new Bird(200,50);
    slingShot = new Slingshot(this.ball,{x:100,y:200});

  }
  function draw() {
    background(56,44,44); 

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");
    block13.display();
    block14.display();
    block15.display();
    fill("grey");
    block16.display();
    fill("skyblue");
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    fill("turquoise");
    blocks6.display();
    blocks7.display();
    blocks8.display();
    fill("pink")
    blocks9.display();
    fill("pink")
    cube1.display();
    cube2.display();
    cube3.display();
    fill("grey")
    cube4.display();
    cube5.display();
    fill("skyblue")
    cube6.display();

    bird.display();
    fill("gold");
    imageMode(CENTER)
    image(polygon_img ,ball.position.x,ball.position.y,40,40);

    slingShot.display();
  }
  function mouseDragged(){
    if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  }
  }

  function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
  }

  function keyPressed(){
    if(keyCode===32){
      slingShot.attach(bird.body)
    }
  }

