var form,player;
var db,gameState=0;
var playerCount, game;
var allPlayers

function setup(){
db=firebase.database();
  createCanvas(500,500);
game=new Game()
 game.getState()
game.start()
}

function draw(){
  if(playerCount===4){
    game.updateState(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
  
}

