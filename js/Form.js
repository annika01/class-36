class Form{
    constructor(){
         this.input=createInput("Enter your name");
        this.button = createButton("Register");
        this.greeting=createElement("h2")
    }
    display(){
        var title=createElement("h1","Car Racing Game")
        title.position(150,10);
        
        this.input.position(180,170)
       
        this.button.position(200,250)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
         player.name=this.input.value()
            playerCount++
            player.index=playerCount
            player.updateCount(playerCount)
            player.update()
            this.greeting.html ("welcome " +player.name)
            this.greeting.position( 150, 150)
        })
    }
    hide(){
        this.input.hide()
        this.button.hide()

        this.greeting.hide()




        
    }
}