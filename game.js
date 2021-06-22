class Game{
    constructor(){
    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref('/').update({
          gameState: state
        });
      }

      async start(){
        if(gameState === 0){
          player = new Player();
          var playerCountRef = await database.ref('playerCount').once("value");
          
          if(playerCountRef.exists()){
            playerCount = playerCountRef.val();
            player.getCount();
          }
           form = new Form()
           form.display();
        }
        player1 = createSprite(618, 444);
        player1.addImage("p1", p1R);             
    }  

    play(){
        form.hides();

        Player.getPlayerInfo();
        player.getRank();


        if(allPlayers !== undefined){
            background(bg2);
            // player1.x = 618;
            // player1.y = 314;
        }
        if(keyDown(LEFT_ARROW)&& player.index !== null){     
          player1.changeImage(pic1L);
      }

        if(keyDown(RIGHT_ARROW)&& player.index !== null){
          player1.changeImage(pic1R);
            
//             var rand = Math.round(random(1,9));
//           switch(rand){
//             case 1: player1.changeImage(pic1R);
//             break;
//             case 2: player1.changeImage(pic2R);
//             break;
//             case 3: player1.changeImage(pic3R);
//             break;
//             case 4: player1.changeImage(pic4R);
//             break;
//             case 5: player1.changeImage(pic5R);
//             break;
//             case 6: player1.changeImage(pic6R);
//             break;
//             case 7: player1.changeImage(pic7R);
//             break;
//             case 8: player1.changeImage(pic8R);
//             break;
//             case 9: player1.changeImage(pic9R);
//             break;
//             default:break; 
// } 
      }

       // if(player1.isTouching(OdragonR) || player1.isTouching(ODragonL)){
          //   OdradonR.destroy();
          // }

        if(frameCount%60 == 0){
           OdragonR = createSprite(1270, 444);
           OdragonR.velocityX = -15;
           OdragonR.addImage(ODragonL);
           OdragonR.scale = 0.7;
        }

        if(frameCount%40==0){
          OdragonL = createSprite(0, 440);
           OdragonL.velocityX = 15;
           OdragonL.addImage(ODragonR);
           OdragonL.scale = 0.7;
        }   
    }
  
    end(){
      console.log("Game Over")
    }
  }
