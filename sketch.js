const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var maxDrops = 10
var i;
var drops = [];


function preload(){
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world; 
    u = new umbrella(200,200,50,50)
    
    
    
}

function draw(){
 background("white")
  u.display();
 Engine.update(engine);  
 if(frameCount%1===0){
    drops.push(new Drops(random(width/2-1200, width/2+40), 10,10));
    
    } 
   for (var j = 0; j < drops.length; j++) {
    drops[j].display();
    }
} 


