var game
var isRunning = "Menu"
var level = 0
var maxLevel = 1
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
  back1 = loadImage('assets/sprites/backs/back1.jpeg')
  back2 = loadImage('assets/sprites/backs/back2.jpeg')
  back3 = loadImage('assets/sprites/backs/back3.jpg')
  back4 = loadImage('assets/sprites/backs/back4.jpg')
  back5 = loadImage('assets/sprites/backs/back5.jpg')
  back6 = loadImage('assets/sprites/backs/back6.jpeg')
  allyBase = loadImage('assets/sprites/AllyPortal.png')
  enemyBase = loadImage('assets/sprites/EnemyPortal.png')
  lichKing = loadImage('assets/sprites/LichKing.png')
  warrior = loadImage('assets/sprites/Warrior.png')
  shieldman = loadImage('assets/sprites/Shieldman.png')
  spearman = loadImage('assets/sprites/Spearman.png')
  archer = loadImage('assets/sprites/Archer.png')
  blueEnemyWarrior = loadImage('assets/sprites/Azul/Machado.png')
  blueEnemyShieldman = loadImage('assets/sprites/Azul/Escudo.png')
  blueEnemySpearman = loadImage('assets/sprites/Azul/Pá.png')
  blueEnemyArcher = loadImage('assets/sprites/Azul/Estilingue.png')
  yellowEnemyWarrior = loadImage('assets/sprites/Amarelo/Machado.png')
  yellowEnemyShieldman = loadImage('assets/sprites/Amarelo/Escudo.png')
  yellowEnemySpearman = loadImage('assets/sprites/Amarelo/Pá.png')
  yellowEnemyArcher = loadImage('assets/sprites/Amarelo/Estilingue.png')
  greenEnemyWarrior = loadImage('assets/sprites/Verde/Machado.png')
  greenEnemyShieldman = loadImage('assets/sprites/Verde/Escudo.png')
  greenEnemySpearman = loadImage('assets/sprites/Verde/Pá.png')
  greenEnemyArcher = loadImage('assets/sprites/Verde/Estilingue.png')
  brownEnemyWarrior = loadImage('assets/sprites/Marrom/Machado.png')
  brownEnemyShieldman = loadImage('assets/sprites/Marrom/EscudoPrata.png')
  brownEnemySpearman = loadImage('assets/sprites/Marrom/Pá.png')
  brownEnemyArcher = loadImage('assets/sprites/Marrom/Estilingue.png')
  redEnemyWarrior = loadImage('assets/sprites/Vermelho/Machado.png')
  redEnemyShieldman = loadImage('assets/sprites/Vermelho/Escudo.png')
  redEnemySpearman = loadImage('assets/sprites/Vermelho/Pá.png')
  redEnemyArcher = loadImage('assets/sprites/Vermelho/Estilingue.png')
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
  if (maxLevel>=1)
    rect(windowWidth/2-60, windowHeight/2 -20, 120, 40)
  if (maxLevel>=2)
    rect(windowWidth/2-60, windowHeight/2 +25, 120, 40)
  if (maxLevel>=3)
  rect(windowWidth/2-60, windowHeight/2 +70, 120, 40)
  if (maxLevel>=4)
    rect(windowWidth/2-60, windowHeight/2 +115, 120, 40)
  if (maxLevel>=5)
  rect(windowWidth/2-60, windowHeight/2 +160, 120, 40)
  fill(0)
  if (maxLevel>=1)
  text("Nível 1", windowWidth/2-30, windowHeight/2+5)
  if (maxLevel>=2)
  text("Nível 2", windowWidth/2-30, windowHeight/2+50)
  if (maxLevel>=3)
  text("Nível 3", windowWidth/2-30, windowHeight/2+95)
  if (maxLevel>=4)
  text("Nível 4", windowWidth/2-30, windowHeight/2+140)
  if (maxLevel>=5)
  text("Nível 5", windowWidth/2-30, windowHeight/2+185)
}

function mouseClicked(){
  if (isRunning == "LevelSelect"){
    console.log(mouseX, mouseY)
    if(mouseX>=windowWidth/2-60 && mouseX<= windowWidth/2+60){
      if(mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+20 && maxLevel>=1){
        level = 1
        enemyWarrior = blueEnemyWarrior
        enemyArcher = blueEnemyArcher
        enemySpearman = blueEnemySpearman
        enemyShieldman = blueEnemyShieldman
        print("a")
      }else 
      if(mouseY>=windowHeight/2+25 && mouseY<=windowHeight/2+65 && maxLevel>=2){
        level = 2
        enemyWarrior = yellowEnemyWarrior
        enemyArcher = yellowEnemyArcher
        enemySpearman = yellowEnemySpearman
        enemyShieldman = yellowEnemyShieldman
      }else 
      if(mouseY>=windowHeight/2+70 && mouseY<=windowHeight/2+110 && maxLevel>=3){
        level = 3
        enemyWarrior = greenEnemyWarrior
        enemyArcher = greenEnemyArcher
        enemySpearman = greenEnemySpearman
        enemyShieldman = greenEnemyShieldman
      }else if(mouseY>=windowHeight/2+115 && mouseY<=windowHeight/2+155 && maxLevel>=4){
        level = 4
        enemyWarrior = brownEnemyWarrior
        enemyArcher = brownEnemyArcher
        enemySpearman = brownEnemySpearman
        enemyShieldman = brownEnemyShieldman
      }else if(mouseY>=windowHeight/2+160 && mouseY<=windowHeight/2+200 && maxLevel>=5){
        level = 5
        enemyWarrior = redEnemyWarrior
        enemyArcher = redEnemyArcher
        enemySpearman = redEnemySpearman
        enemyShieldman = redEnemyShieldman
      }
    }
    if(level!=0){ 
      isRunning = "playing"
    }
    console.log(isRunning)
  }else if(isRunning=="victory" || isRunning=="defeat"){
    if(mouseX>=windowWidth-200 && mouseX<=windowWidth && mouseY>=0 && mouseY<=40){
      isRunning = "LevelSelect"
    }
  }
}

function UI(){
    stroke(0)
    fill(255,255,0)
    textSize(30)
    text("Nível " + level, windowWidth/2-60, 30)
    stroke(0)
    fill(255)
    rect(10, 60, 40, 50)
    fill(0,0,255)
    rect(10, 110-mana, 40, mana)
    
    fill(0,255,0)
    textSize(20)
    if(mana<10){
      text(Math.trunc(mana), 25, 93)
    }else{
      text(Math.trunc(mana), 20, 93)
    }
    //text(tropasOnHold.length, 10, 50)
    text(game.allyBase, 72, windowHeight-250)
    text(game.enemyBase, windowWidth-75, windowHeight-305)
    text("Mana", 10, 40)
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
    fill(255)
    circle(150,110,30)
    circle(270,110,30)
    circle(390,110,30)
    circle(510,110,30)
    stroke(0)
    fill(0)
    textSize(15)
    text("Q", 145, 115)
    text("W", 262, 115)
    text("E", 385, 115)
    text("R", 505, 115)
    noStroke()
    image(warrior, 70, 30, 80, 80, 152, ALLY_WARRIOR_WALKING, 80, 80)
    image(archer, 190, 30, 80, 80, 152, ALLY_ARCHER_WALKING, 80, 80)
    image(spearman, 310, 30, 80, 80, -10, ALLY_SPEARMAN_WALKING, 80, 80)
    image(shieldman, 430, 30, 80, 80, -10, ALLY_SHIELDMAN_WALKING, 80, 80)
    for(let i=0; i<tropasOnHold.length; i++){
      noFill()
      stroke(0)
      auxImg = null
      auxX = 0
      auxPosition = 0
      if(tropasOnHold[i].tipo==1){
        auxImg = warrior
        auxPosition = ALLY_WARRIOR_WALKING
        auxX = 152
      }
      else if(tropasOnHold[i].tipo==2){
        auxImg = archer
        auxPosition = ALLY_ARCHER_WALKING
        auxX = 152
      }
      else if(tropasOnHold[i].tipo==3){
        auxImg = spearman
        auxPosition = ALLY_SPEARMAN_WALKING
        auxX = -10
      }
      else{
        auxImg = shieldman
        auxPosition = ALLY_SHIELDMAN_WALKING
        auxX = -10
      }
      console.log(auxImg, auxPosition)
      rect(windowWidth/2 + 50*i, 40 + 50*Math.floor(i/16), 40, 40)
      if(i == 0){
        fill(0,255,0)
        rect(windowWidth/2, 40 + 40-allyTimer/3, 40, allyTimer/3)
      }
      noStroke()
      image(auxImg, windowWidth/2 + 50*i, 40 + 50*Math.floor(i/16), 40, 40, auxX, auxPosition, 80, 80)
    }
}

function menuReturnButton(){
  stroke(0)
  fill(255)
  rect(windowWidth-200, 0, 200, 40)
  textSize(20)
  fill(0)
  text("Escolher Nível", windowWidth-180, 20)
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

function resetAll(){
  level = 0
  game = new Game1()
  firstSpawnDelay = 0
  enemiesTotalCount = 0
  frameCounter = 0
  totalFrameCounter = 0
  mana = 0
  enemyMana = 0
  tropasOnHold = []
  enemiesOnHold = []
  allyTimer = 0
  enemyTimer = 0
  actualEnemy = 0
}

let current_frame = 0;
function draw() {
  console.log(isRunning)
  if (isRunning == "playing"){
      if (level == 1){
        image(back1, 0, 0, windowWidth, windowHeight)
      }else if (level == 2){
        image(back2, 0, 0, windowWidth, windowHeight)
      } else if (level == 3){
        image(back3, 0, 0, windowWidth, windowHeight)
      } else if (level == 4){
        image(back4, 0, 0, windowWidth, windowHeight)
      } else if (level == 5){
        image(back5, 0, 0, windowWidth, windowHeight)
      } else{
        image(back6, 0, 0, windowWidth, windowHeight)
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
      if(level == 1 || level == 2 || level == 3){
        spawnEnemies(game,"easy")
      }
      if(level == 4 || level == 5){
        spawnEnemies(game,"medium")
      }
      if (level== 6){
        spawnEnemies(game,"hard")
      }
      mana = Math.min(mana+0.035, 50)
      enemyMana += 0.035 
      game.fight()
      game.display()
      displayLichKing(allyTimer)
      if(game.enemyBase <= 0){
        isRunning = "victory"
        maxLevel = Math.min(maxLevel+1, 6)
        resetAll()
      }
      if(game.allyBase <= 0){
        isRunning = "defeat"
        resetAll()
      }
  }else if(isRunning == "Menu"){
    image(menuBack, 0, 0, windowWidth, windowHeight)
  }else if(isRunning == "LevelSelect"){
    background(255)
    drawChooseLevel()
  }else{
    background(255)
    menuReturnButton()
    stroke(0)
    fill(0)

    if(isRunning == "victory"){
      text("Vitória", windowWidth/2, windowHeight/2)
    }
    if(isRunning == "defeat"){
      text("Derrota", windowWidth/2, windowHeight/2)
    }
  }
}
