let defaultControls ={
    up:false,
    rigth:false,
    down:false,
    left:false
}

let player = defaultControls
let enemy = defaultControls


function movimentEnemy(key) {
    if(key === "KeyA"){
        enemy.position.x= enemy.position.x - moverate  
        if(enemy.position.x < 0){enemy.position.x = 499}
    }
   if(key === "KeyD"){
       enemy.position.x=  enemy.position.x + moverate 
       if(enemy.position.x > 499){enemy.position.x = 0}

   }
    if(key === "KeyW"){
        enemy.position.y= enemy.position.y - moverate
        if(enemy.position.y < 0){enemy.position.y = 499}     
    }
   if(key === "KeyS"){
        enemy.position.y= enemy.position.y + moverate 
        if(enemy.position.y > 499){enemy.position.y = 0}    
   }
};