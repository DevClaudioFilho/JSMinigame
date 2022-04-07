let player={
    size:{
        width: 20,
        height: 20
    },
    position:{
        x: 10,
        y: 10
    },
    control:{
        up:false,
        rigth:false,
        down:false,
        left:false
    }
}

let enemy={
    size:{
        width: 20,
        height: 20
    },
    position:{
        x: 470,
        y: 470
    },
    control:{
        up:false,
        rigth:false,
        down:false,
        left:false
    }
}

let moverate = 10

let player1 = document.getElementById("player")
let enemy1 = document.getElementById("enemy")

function keyPressPlayer(key) {
    if(key === "ArrowLeft"){
        player.control.left= true
    }
    if(key === "ArrowRight"){
        player.control.rigth= true
    }
    if(key === "ArrowUp"){
        player.control.up= true
    }
    if(key === "ArrowDown"){
        player.control.down= true
    }  
};

function keyUnpressPlayer(key) {
    if(key === "ArrowLeft"){
        player.control.left= false
    }
    if(key === "ArrowRight"){
        player.control.rigth= false
    }
    if(key === "ArrowUp"){
        player.control.up= false
    }
    if(key === "ArrowDown"){
        player.control.down= false
    }  
};

function movimentPlayer() {
    if(player.control.left){
        player.position.x=  player.position.x - moverate 
        if(player.position.x < 0){player.position.x = 499}
    }
    
   if(player.control.rigth){
       player.position.x=  player.position.x + moverate 
       if(player.position.x > 499){player.position.x = 0}
   }

    if(player.control.up){
        player.position.y= player.position.y - moverate
        if(player.position.y < 0){player.position.y = 499}     
    }

   if(player.control.down){
        player.position.y= player.position.y + moverate 
        if(player.position.y > 499){player.position.y = 0}    
   }
};

function refreshPositionPlayer() {
    let xx = player.position.x - (player.size.width/2)
    let yy = player.position.y - (player.size.height/2)
   
    let transform = "translate(" + xx + " " + yy + ")";

    player1.setAttribute("transform",transform)
}

function keyPressEnemy(key) {
    if(key === "KeyA"){
        enemy.control.left= true
    }
    if(key === "KeyD"){
        enemy.control.rigth= true
    }
    if(key === "KeyW"){
        enemy.control.up= true
    }
    if(key === "KeyS"){
        enemy.control.down= true
    }  
};

function keyUnpressEnemy(key) {
    if(key === "KeyA"){
        enemy.control.left= false
    }
    if(key === "KeyD"){
        enemy.control.rigth= false
    }
    if(key === "KeyW"){
        enemy.control.up= false
    }
    if(key === "KeyS"){
        enemy.control.down= false
    }  
};

function movimentEnemy() {
    if(enemy.control.left){
        enemy.position.x=  enemy.position.x - moverate 
        if(enemy.position.x < 0){enemy.position.x = 499}
    }
    
   if(enemy.control.rigth){
       enemy.position.x=  enemy.position.x + moverate 
       if(enemy.position.x > 499){enemy.position.x = 0}
   }

    if(enemy.control.up){
        enemy.position.y= enemy.position.y - moverate
        if(enemy.position.y < 0){enemy.position.y = 499}     
    }

   if(enemy.control.down){
        enemy.position.y= enemy.position.y + moverate 
        if(enemy.position.y > 499){enemy.position.y = 0}    
   }
};

function refreshPositionEnemy() {
    let x = enemy.position.x - (enemy.size.width/2)
    let y = enemy.position.y - (enemy.size.height/2)
   
    let transform = "translate(" + x + " " + y + ")";

    enemy1.setAttribute("transform",transform)
}


function checkFinal(){
    enemyCheck= enemy.position
    y= player.position.y 
    x= player.position.x 
   
    if( enemyCheck.y== y +10 || enemyCheck.y== y -10 ||  enemyCheck.y == y  ) {
        console.log("fim")
        if(enemyCheck.x >= x-10 && enemyCheck.x <= x+10 || enemyCheck.x == x ){
            console.log("teste")
            alert("Acabou")
            location.reload(true);
        }  
    }
    
}


window.addEventListener("keyup",event=>{
    if(event.code == "KeyW"||event.code == "KeyA"||event.code == "KeyD"||event.code == "KeyS"){
        keyUnpressEnemy(event.code)    
        refreshPositionEnemy()
    }

    if(event.code == "ArrowUp"||event.code == "ArrowDown"||event.code == "ArrowRight"||event.code == "ArrowLeft"){
        keyUnpressPlayer(event.code)
        refreshPositionPlayer()
    }


    event.preventDefault()
},true)

window.addEventListener("keydown",async(event)=>{
    if(event.defaultPrevented)return
    if(event.code == "KeyW"||event.code == "KeyA"||event.code == "KeyD"||event.code == "KeyS"){
        keyPressEnemy(event.code)
    }

    if(event.code == "ArrowUp"||event.code == "ArrowDown"||event.code == "ArrowRight"||event.code == "ArrowLeft"){
        keyPressPlayer(event.code) 
    }

    movimentEnemy()   
    movimentPlayer()  
    refreshPositionPlayer()
    refreshPositionEnemy()

    console.log("teste")
    await checkFinal()
    event.preventDefault()
    
},true)
    

    




