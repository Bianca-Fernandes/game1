var playerCount =0, allPlayers, armPts, legPts, player, playerCountRef;
var bg, p1, OdragonL, OdragonR;
var form, player, game;
var database;
var gameState = 0;
var player1, punchesR, punchesL;
armPts = 5;
legPts = 10;

function preload(){
  bg = loadImage("images/bgdragon.jpg");
  bg2 = loadImage("images/bg.png");
  p1L = loadImage("images/boyL.png");
  p1R = loadImage("images/boyR.png");
  ODragonL = loadImage("images/orangeL.png")
  ODragonR = loadImage("images/orangeR.png")
  lDragonL = loadImage("images/lightL.png");
  lDragonR = loadImage("images/lightR.png");
  greenL = loadAnimation("images/greenL1.png", "images/greenL2.png");
  greenR = loadAnimation("images/greenR1.png", "images/greenR2.png");
  rightArrow = loadImage("images/rightA.png");
  leftArrow = loadImage("images/leftA.png");
  pic1R = loadImage("images/pic1.png");
  pic1L = loadImage("images/pic1L.png")
  // pic1R = loadAnimation("images/pic1.png", "images/boyR.png");
  // pic1L = loadAnimation("images/pic1L.png", "images/boyL.png");
  pic2R = loadImage("images/pic2R.png");
  pic2L = loadImage("images/pic2.png");
  pic3L = loadImage("images/pic4.png");
  pic3R = loadImage("images/pic4R.png");
  pic4R = loadImage("images/pic5.png");
  pic4L = loadImage("images/pic5L.png");
  pic5L = loadImage("images/pic6.png");
  pic5R = loadImage("images/pic6R.png");
  pic6R = loadImage("images/pic7.png");
  pic6L = loadImage("images/pic7L.png");
  pic7L = loadImage("images/pic8.png");
  pic7R = loadImage("images/pic8R.png");
  pic8R = loadImage("images/pic9.png");
  pic8L = loadImage("images/pic9L.png");
  pic9R = loadImage("images/pic10.png");
  pic9L = loadImage("images/pic10L.png");
}

function setup() {
  createCanvas(1263,628);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
  // form = new Form();
  // player = new Player();
}

function draw() {
  background(bg);
  // form.display();
    
  if(playerCount === 2)
    game.update(1);

  if(gameState === 1){
    clear();
    game.play();
  }

  if(gameState === 2)
    game.end();
  
  drawSprites();
}