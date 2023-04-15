var game
var isRunning = "Menu"
var level = 0
let tropasOnHold = []
let enemiesOnHold = []
let allyTimer = 0
let enemyTimer = 0
let mana = 0
let enemyMana = 0
let actualEnemy = 0
let img
let canvas

//Entities
let lichKing
let warrior
let shieldman
let spearman
let archer
let enemyWarrior
let enemyArcher
let enemySpearman
let enemyShieldman

//for animations
//spellcast
const spellcast= 64;
const spellcast_frames = 7;
//thrust
const thrust = 320;
const thurst_frames = 8;
//walk
const walking = 576;
const walking_frames = 9;
const warrior_walking = 1504;
const archer_walking = 1504
//slash
const slash = 832;
const slash_frames = 9;
const warrior_slash = 2016;
const warrior_slash_frames = 6;
//shoot
const shoot = 1088;
const shoot_frames = 13;
let frameCounter = 0;
let totalFrameCounter = 0;


function preload(){
  menuBack = loadImage('assets/menuBack.jpg')
  back = loadImage('assets/sprites/backs/back1.jpg')
  back2 = loadImage('assets/sprites/backs/back3.jpg')
  back3 = loadImage('assets/sprites/backs/back5.jpg')
  allyBase = loadImage('assets/sprites/AllyPortal.png')
  enemyBase = loadImage('assets/sprites/EnemyPortal.png')
  lichKing = loadImage('assets/sprites/LichKing.png')
  warrior = loadImage('assets/sprites/Warrior.png')
  shieldman = loadImage('assets/sprites/Shieldman.png')
  spearman = loadImage('assets/sprites/Spearman.png')
  archer = loadImage('assets/sprites/Archer.png')
  enemyWarrior = loadImage('assets/sprites/Azul/Machado.png')
  enemyShieldman = loadImage('assets/sprites/Azul/Escudo.png')
  enemySpearman = loadImage('assets/sprites/Azul/Pá.png')
  enemyArcher = loadImage('assets/sprites/Azul/Estilingue.png')
}

function setup() {
  frameRate(60)
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game1()
}

// function enemyHandler(){
//   rn = Math.floor(random()*100)%2
//   if(enemyMana >= 6){
//     console.log(rn, actualEnemy)
//     if(rn == 0){
//       if(actualEnemy == 0){
//         enemiesOnHold.push(new Tropa(700, 200, 3, 80, -1))
//         enemyMana -= 6
//       }else{
//         actualEnemy = (actualEnemy + 1) % 2
//       }
//     }
//   }
//   if(enemyMana >= 14){
//     console.log(rn, actualEnemy)
//     if(rn == 0){
//       if(actualEnemy == 1){
//       enemiesOnHold.push(new Tropa(500, 300, 4, 160, -1))
//       enemyMana -= 14
//       }else{
//         actualEnemy = (actualEnemy + 1) % 2
//       }
//     } 
//   }
// }

function keyPressed(){
  console.log(keyCode)
  if (isRunning == "Menu"){
    isRunning = "LevelSelect"
  }else{
    if (keyCode === 81){
      if(mana >= 6){  
        tropasOnHold.push(new Tropa(700, 300, 1, 80, 1))
        mana -= 6
      }
    }
    if (keyCode === 87){
      if(mana >= 14){
        tropasOnHold.push(new Tropa(300, 200, 2, 240, 1))
        mana -= 14
      }
    }
    if (keyCode === 69){
      if(mana >= 9){
        tropasOnHold.push(new Tropa(300, 300, 3, 160, 1))
        mana -= 9
      }
    }
    if (keyCode === 82){
      if(mana >= 12){
        tropasOnHold.push(new Tropa(1500, 100, 4, 80, 1))
        mana -= 12
      }
    }
  }
}

function drawBases(){
  stroke(0)
  fill(0,51,25)
  image(allyBase, 48, windowHeight-85-192, 192, 192, ((Math.floor(current_frame/2)%8) *64) + 16, 0, 64, 64)
  //rect(0,windowHeight-500,100,400)
  image(enemyBase, windowWidth-186, windowHeight-85-192, 192, 192, 0, 0, 0, 0)
  //rect(windowWidth-100, windowHeight-500, windowWidth, 400)
}

function drawLife(){
  stroke(0)
  fill(255,0,0)
  rect(56,windowHeight-272, 80, 30)
  rect(windowWidth-100,windowHeight-325, 90, 30)
}

function drawChooseLevel(){
  stroke(0)
  fill(0)
  textSize(60)
  text("Escolha o nível", windowWidth/2-200, windowHeight/2 - 140)
  textSize(20)
  fill(255)
  rect(windowWidth/2-60, windowHeight/2 -20, 120, 40)
  rect(windowWidth/2-60, windowHeight/2 +25, 120, 40)
  rect(windowWidth/2-60, windowHeight/2 +70, 120, 40)
  fill(0)
  text("Nível 1", windowWidth/2-30, windowHeight/2+5)
  text("Nível 2", windowWidth/2-30, windowHeight/2+50)
  text("Nível 3", windowWidth/2-30, windowHeight/2+95)
  
}

function mouseClicked(){
  if (isRunning == "LevelSelect"){
    console.log(mouseX, mouseY)
    if(mouseX>=windowWidth/2-60 && mouseX<= windowWidth/2+60){
      if(mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+20){
        level = 1
        print("a")
      }else 
      if(mouseY>=windowHeight/2+25 && mouseY<=windowHeight/2+65){
        level = 2
      }else 
      if(mouseY>=windowHeight/2-70 && mouseY<=windowHeight/2+110){
        level = 3
      }
    }
    if(level!=0){ 
      isRunning = "playing"
    }
    console.log(isRunning)
  }
}

function UI(){
    stroke(0)
    fill(255,255,0)
    textSize(30)
    text("Nível " + level, windowWidth/2-60, 30)
    stroke(255,0,0)
    fill(0,255,0)
    textSize(20)
    text(Math.trunc(mana), 10, 30)
    text(tropasOnHold.length, 10, 50)
    text(allyTimer, 10, 70)
    text(Math.trunc(enemyMana), windowWidth-50, 30)
    text(enemiesOnHold.length, windowWidth-50, 50)
    text(enemyTimer, windowWidth-50, 70)
    text(game.allyBase, 72, windowHeight-250)
    text(game.enemyBase, windowWidth-75, windowHeight-305)
    text("Custa 6", 70, 140)
    text("Custa 14", 190, 140)
    text("Custa 9", 310, 140)
    text("Custa 12", 430, 140)
    stroke(0)
    if(mana>=6){
      fill(0,255,0)
    }else{
      noFill()
    }
    rect(70, 30, 80, 80)
    if(mana>=14){
      fill(0,255,0)
    }else{
      noFill()
    }
    rect(190, 30, 80, 80)
    if(mana>=9){
      fill(0,255,0)
    }else{
      noFill()
    }
    rect(310, 30, 80, 80)
    if(mana>=12){
      fill(0,255,0)
    }else{
      noFill()
    }
    rect(430, 30, 80, 80)
    noStroke()
    image(warrior, 70, 30, 80, 80, 152, ALLY_WARRIOR_WALKING, 80, 80)
    image(archer, 190, 30, 80, 80, 152, ALLY_ARCHER_WALKING, 80, 80)
    image(spearman, 310, 30, 80, 80, -10, ALLY_SPEARMAN_WALKING, 80, 80)
    image(shieldman, 430, 30, 80, 80, -10, ALLY_SHIELDMAN_WALKING, 80, 80)
}

function spawn(){
  if (tropasOnHold.length > 0){
    allyTimer += 1
    if(allyTimer % 120 == 0){    
      game.addAlly(tropasOnHold[0])
      tropasOnHold.shift()
      allyTimer = 0
    }
  }
  
  // if (enemiesOnHold.length > 0){
  //   enemyTimer += 1
  //   if(enemyTimer % (120 * (enemiesOnHold[0].tipo -2)) == 0){    
  //     game.addEnemy(enemiesOnHold[0])
  //     enemiesOnHold.shift()
  //     enemyTimer = 0
  //   }
  // }
}

let current_frame = 0;
function draw() {
  if (isRunning == "playing"){
      if (level == 1){
        image(back, 0, 0, windowWidth, windowHeight)
      }else if (level == 2){
        image(back2, 0, 0, windowWidth, windowHeight)
      } else{
        image(back3, 0, 0, windowWidth, windowHeight)
      }
      
      if (frameCounter == 6){
        current_frame += 1;
        frameCounter = 0;
      }
      frameCounter++;
      totalFrameCounter++;
      stroke(0)
      drawBases()
      drawLife()
      UI()
      spawn()
      if(level == 1){
        spawnEnemies(game,"easy")
      }
      if(level == 2){
        spawnEnemies(game,"medium")
      }
      if (level==3){
        spawnEnemies(game,"hard")
      }
      mana += 0.035
      enemyMana += 0.035 
      game.fight()
      game.display()
      displayLichKing(allyTimer)
      if(game.enemyBase <= 0){
        isRunning = "victory"
      }
      if(game.allyBase <= 0){
        isRunning = "Defeat"
      }
  }else if(isRunning == "Menu"){
    image(menuBack, 0, 0, windowWidth, windowHeight)
  }else if(isRunning == "LevelSelect"){
    background(255)
    drawChooseLevel()
  }else{
    background(255)
    stroke(0)
    fill(0)
    if ( isRunning == "victory"){
      text("Vitória", windowWidth/2, windowHeight/2)
    }else{
      text("Derrota", windowWidth/2, windowHeight/2)
    }
  }
}
