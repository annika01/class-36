class Game{
constructor(){

}

getState(){
    db.ref("gameState").on("value", function(data){
        gameState=data.val()
    })
}

updateState(state){
    db.ref("/").update({
        gameState: state
    })
}
start() {
    if(gameState=== 0){
        player=new Player();
player.getCount()
        form=new Form()
 form.display()

    }
}
play(){
form.hide()
Player.getPlayerInfo()
if( allPlayers!==undefined){
    var dp= 130
    for(var plr in allPlayers){
        if(plr==="player"+player.index){
           fill("red")  
           
        }
        else{
            fill("black")
        }
        text(allPlayers[plr].name+"-"+allPlayers[plr].distance,120,dp)
        dp=dp+20
    }

}
if(keyDown(UP_ARROW)&& player.index!==null){
    player.distance+=50
    player.update()
}

}
}