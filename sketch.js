var game
var isRunning = "playing"
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
  back = loadImage('assets/sprites/backs/back1.jpg')
  allyBase = loadImage('assets/sprites/AllyPortal.png')
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

function drawBases(){
  stroke(0)
  fill(0,51,25)
  image(allyBase, 48, windowHeight-85-192, 192, 192, ((Math.floor(current_frame/2)%8) *64) + 16, 0, 64, 64)
  //rect(0,windowHeight-500,100,400)
  rect(windowWidth-100, windowHeight-500, windowWidth, 400)
}

function drawLife(){
  stroke(0)
  fill(255,0,0)
  rect(56,windowHeight-272, 80, 30)
  rect(windowWidth-100,windowHeight-530, windowWidth, 30)
}

function UI(){
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
    if(allyTimer % (120 * tropasOnHold[0].tipo) == 0){    
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
  image(back, 0, 0, windowWidth, windowHeight)
  if (frameCounter == 6){
    current_frame += 1;
    frameCounter = 0;
  }
  frameCounter++;
  totalFrameCounter++;
  if (isRunning == "playing"){
    stroke(0)
    drawBases()
    drawLife()
    UI()
    spawn()
    spawnEnemies(game,"easy")
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
  }else{
    stroke(0)
    fill(0)
    if ( isRunning == "victory"){
      text("Vitória", windowWidth/2, windowHeight/2)
    }else{
      text("Derrota", windowWidth/2, windowHeight/2)
    }
  }
}
