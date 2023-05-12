var game
var isRunning = "Menu"
var level = 0
var lastLevel = 0
var maxLevel = 1
var currentMaxLife = 3
let tropasOnHold = []
let enemiesOnHold = []
let allyTimer = 0
let enemyTimer = 0
let mana = 0
let maxMana = 50
let castTime = 120
let enemyMana = 0
let actualEnemy = 0
let img
let canvas
let manaRegen = 0.035
var upgrades = [false,false,false,false,false] //maxHeart, maxMana, manaRegen, castTime, newSkill
let handsCounter = 0
let handsAnimation = 0
let showNextLevel = true
var paralyzed = false
let hideMenu = true
let lastChoosedUpgrade = -1

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

let frameCounter = 0;
let totalFrameCounter = 0;

//Colors
const BACKGROUND_COLOR = 'rgb(248,241,235)'
const PINK = 'rgb(255,0,137)'
const BLACK_PINK = 'rgb(51,0,25)'
const DARK_GREEN = 'rgb(30,150,159)'
const BLACK_GREEN = 'rgb(0,33,33)'
const LIGHT_BLUE = 'rgb(0,128,255)'
const BLACK_BLUE = 'rgb(0,0,51)'
const DARK_RED = 'rgb(51,0,0)'
const RED = 'rgb(255,0,0)'
const BROWN = 'rgb(153,76,0)'
const BLUE = 'rgb(0,128,255)'
const GREEN = 'rgb(0,180,0)'
const ORANGE = 'rgb(255,140,0)'
const GREY = 'rgb(128,128,128)'


var hands = []

function preload(){
  menuBack = loadImage('assets/menuBack.png')
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
  castleEnemyWarrior = loadImage('assets/sprites/Castle/Warrior.png')
  castleEnemyShieldman = loadImage('assets/sprites/Castle/Shieldman.png')
  castleEnemySpearman = loadImage('assets/sprites/Castle/Spearman.png')
  castleEnemyArcher = loadImage('assets/sprites/Castle/Archer.png')
  hands[0] = loadImage('assets/sprites/hands/hands0.png')
  hands[1] = loadImage('assets/sprites/hands/hands1.png')
  hands[2] = loadImage('assets/sprites/hands/hands2.png')
  hands[3] = loadImage('assets/sprites/hands/hands3.png')
  hands[4] = loadImage('assets/sprites/hands/hands4.png')
  hands[5] = loadImage('assets/sprites/hands/hands5.png')
  hands[6] = loadImage('assets/sprites/hands/hands6.png')
  hands[7] = loadImage('assets/sprites/hands/hands7.png')
  hands[8] = loadImage('assets/sprites/hands/hands8.png')
  hands[9] = loadImage('assets/sprites/hands/hands9.png')
  hands[10] = loadImage('assets/sprites/hands/hands10.png')
  hands[11] = loadImage('assets/sprites/hands/hands11.png')
  hands[12] = loadImage('assets/sprites/hands/hands12.png')
  hands[13] = loadImage('assets/sprites/hands/hands13.png')
  tombstone = loadImage('assets/sprites/tombstone.png')
  locker = loadImage('assets/sprites/locker.png')
  zombieHand = loadImage('assets/sprites/hands/zombieHand.png')
}

function setup() {
  frameRate(60)
  canvas = createCanvas(windowWidth, windowHeight);
  game = new Game1(currentMaxLife)
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
  if (isRunning == "Menu" && keyCode === 32){
    isRunning = "LevelSelect"
  }else if(isRunning == "playing"){
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
    if (keyCode === 84){
      if(mana >= 25 && upgrades[4]){
        paralyzed = !paralyzed
        mana -= 25
      }
    }
    if (keyCode === 88){
      hideMenu = !hideMenu
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

function drawChooseLevel(){
  strokeWeight(3)
  stroke(DARK_GREEN)
  fill(DARK_GREEN)
  textSize(60)
  text("Select a level", windowWidth/2-180, windowHeight/2 - 140)
  strokeWeight(1)
  textSize(20)
  if (maxLevel>=1){
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-60, windowHeight/2 -85, 120, 40)
    text("Level 1", windowWidth/2-30, windowHeight/2-60)
  }
  if (maxLevel>=2){
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-60, windowHeight/2 -40, 120, 40)
    text("Level 2", windowWidth/2-30, windowHeight/2-15)
  }
  if (maxLevel>=3){
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-60, windowHeight/2 +5, 120, 40)
    text("Level 3", windowWidth/2-30, windowHeight/2+30)
  }
  if (maxLevel>=4){
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-60, windowHeight/2 +50, 120, 40)
    text("Level 4", windowWidth/2-30, windowHeight/2+75)
  }
  if (maxLevel>=5){
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-60, windowHeight/2 +95, 120, 40)
    text("Level 5", windowWidth/2-30, windowHeight/2+120)
  }
  if (maxLevel>=6){
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-60, windowHeight/2 +140, 120, 40)
    text("Level 6", windowWidth/2-30, windowHeight/2+165)
  }
}

function chooseEnemySprites(level){

  switch(level){
    case 1:
      enemyWarrior = blueEnemyWarrior
      enemyArcher = blueEnemyArcher
      enemySpearman = blueEnemySpearman
      enemyShieldman = blueEnemyShieldman
      break
    case 2:
      enemyWarrior = yellowEnemyWarrior
      enemyArcher = yellowEnemyArcher
      enemySpearman = yellowEnemySpearman
      enemyShieldman = yellowEnemyShieldman
      break
    case 3:
      enemyWarrior = greenEnemyWarrior
      enemyArcher = greenEnemyArcher
      enemySpearman = greenEnemySpearman
      enemyShieldman = greenEnemyShieldman
      break
    case 4:
      enemyWarrior = brownEnemyWarrior
      enemyArcher = brownEnemyArcher
      enemySpearman = brownEnemySpearman
      enemyShieldman = brownEnemyShieldman
      break
    case 5:
      enemyWarrior = redEnemyWarrior
      enemyArcher = redEnemyArcher
      enemySpearman = redEnemySpearman
      enemyShieldman = redEnemyShieldman
      break
    default:
      enemyWarrior = castleEnemyWarrior
      enemyArcher = castleEnemyArcher
      enemySpearman = castleEnemySpearman
      enemyShieldman = castleEnemyShieldman
  }
}

function mouseClicked(){
  if (isRunning == "LevelSelect"){
    console.log(mouseX, mouseY)
    if(mouseX>=windowWidth/2-60 && mouseX<= windowWidth/2+60){
      if(mouseY>=windowHeight/2-85 && mouseY<=windowHeight/2-45 && maxLevel>=1){
        level = 1
        chooseEnemySprites(level)
      }else 
      if(mouseY>=windowHeight/2-40 && mouseY<=windowHeight/2 && maxLevel>=2){
        level = 2
        chooseEnemySprites(level)
      }else 
      if(mouseY>=windowHeight/2+5 && mouseY<=windowHeight/2+40 && maxLevel>=3){
        level = 3
        chooseEnemySprites(level)
      }else if(mouseY>=windowHeight/2+50 && mouseY<=windowHeight/2+90 && maxLevel>=4){
        level = 4
        chooseEnemySprites(level)
      }else if(mouseY>=windowHeight/2+95 && mouseY<=windowHeight/2+135 && maxLevel>=5){
        level = 5
        chooseEnemySprites(level)
      }else if(mouseY>=windowHeight/2+140 && mouseY<=windowHeight/2+180 && maxLevel>=6){
        level = 6
        chooseEnemySprites(level)
      }
    }
    if(level!=0){ 
      isRunning = "playing"
    }
    console.log(isRunning)
  }else if(isRunning=="defeat"){
    if(mouseX>=windowWidth/2-200 && mouseX<=windowWidth/2-50 && mouseY>=windowHeight-77 && mouseY<=windowHeight-37){
      level = lastLevel
      chooseEnemySprites(level)
      isRunning = "playing"
    }
    if(mouseX>=windowWidth/2+50 && mouseX<=windowWidth/2+210 && mouseY>=windowHeight-77 && mouseY<=windowHeight-37){
      isRunning = "LevelSelect"
    }
  }else if(isRunning=="victory"){
    if(mouseX>=3*windowWidth/29 && mouseX<=6*windowWidth/29 && mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+130 && !upgrades[0] && !showNextLevel){
      upgrades[0] = true
      lastChoosedUpgrade = 0
      showNextLevel = !showNextLevel
      game.allyBase++
      currentMaxLife++
    }
    if(mouseX>=8*windowWidth/29 && mouseX<=11*windowWidth/29 && mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+130 && !upgrades[1] && !showNextLevel){
      upgrades[1] = true
      lastChoosedUpgrade = 1
      showNextLevel = !showNextLevel
      castTime /= 2
    }
    if(mouseX>=13*windowWidth/29 && mouseX<=16*windowWidth/29 && mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+130 && !upgrades[2] && !showNextLevel){
      upgrades[2] = true
      lastChoosedUpgrade = 2
      showNextLevel = !showNextLevel
      maxMana += 25
    }
    if(mouseX>=18*windowWidth/29 && mouseX<=21*windowWidth/29 && mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+130 && !upgrades[3] && !showNextLevel){
      upgrades[3] = true
      lastChoosedUpgrade = 3
      showNextLevel = !showNextLevel
      manaRegen *= 1.25
    }
    if(mouseX>=23*windowWidth/29 && mouseX<=26*windowWidth/29 && mouseY>=windowHeight/2-20 && mouseY<=windowHeight/2+130 && !upgrades[4] && !showNextLevel){
      upgrades[4] = true
      lastChoosedUpgrade = 4
      showNextLevel = !showNextLevel
    }
    if(mouseX>=windowWidth/2-200 && mouseX<=windowWidth/2-50 && mouseY>=windowHeight-77 && mouseY<=windowHeight-37 && showNextLevel){
      lastChoosedUpgrade = -1
      if (lastLevel!=6){
        level = lastLevel+1
        chooseEnemySprites(level)
        isRunning = "playing"
      }
    }
    if(mouseX>=windowWidth/2+50 && mouseX<=windowWidth/2+210 && mouseY>=windowHeight-77 && mouseY<=windowHeight-37 && showNextLevel){
      lastChoosedUpgrade = -1
      isRunning = "LevelSelect"
    }
  }
}

function UI(){
    stroke(0)
    fill(255,255,0)
    textSize(30)
    text("Level " + level, windowWidth/2-60, 30)
    stroke(0)
    fill(32,32,32)
    rect(15, 50, 40, 100)
    image(locker, 15,50,40,25)
    fill(BLACK_BLUE)
    upgrades[2] ? rect(15, 50, 40, 100) : rect(15, 75, 40, 75)
    fill(LIGHT_BLUE)
    upgrades[2] ? rect(15, 150-(mana*4/3), 40, (mana*4/3)): rect(15, 150-(mana*1.5), 40, (mana*1.5))
    
    fill(255)
    textSize(20)
    if(mana<10){
      text(Math.trunc(mana), 30, 103)
    }else{
      text(Math.trunc(mana), 25, 103)
    }
    //text(tropasOnHold.length, 10, 50)
    text("Mana", 10, 40)
    stroke(0)
    if(mana>=6){
      fill(DARK_GREEN)
    }else{
      fill(BLACK_GREEN)
    }
    rect(70, 30, 100, 80)
    if(mana>=14){
      fill(DARK_GREEN)
    }else{
      fill(BLACK_GREEN)
    }
    rect(190, 30, 100, 80)
    if(mana>=9){
      fill(DARK_GREEN)
    }else{
      fill(BLACK_GREEN)
    }
    rect(310, 30, 100, 80)
    if(mana>=12){
      fill(DARK_GREEN)
    }else{
      fill(BLACK_GREEN)
    }
    rect(430, 30, 100, 80)
    if(!upgrades[4]){
      fill(30)
    }else if(mana>=25){
      fill(DARK_GREEN)
    }else{
      fill(BLACK_GREEN)
    }
    rect(550, 60, 50, 50)
    noStroke()
    image(warrior, 70, 30, 80, 80, 147, ALLY_WARRIOR_WALKING, 80, 80)
    image(archer, 190, 30, 80, 80, 142, ALLY_ARCHER_WALKING, 80, 80)
    image(spearman, 310, 30, 80, 80, -15, ALLY_SPEARMAN_WALKING, 80, 80)
    image(shieldman, 430, 30, 80, 80, -20, ALLY_SHIELDMAN_WALKING, 80, 80)
    if(upgrades[4]){
      image(zombieHand, 550,60,50,50)
    }else{
      tint(50,200)
      image(zombieHand, 550,60,50,50)
      noTint()
      image(locker, 550,60,50,50)
    }
    fill(BLACK_BLUE)
    circle(170,30,30)
    circle(290,30,30)
    circle(410,30,30)
    circle(530,30,30)
    circle(600,60,25)
    stroke(0)
    fill(255,255,0)
    textSize(15)
    text("Q", 165, 35)
    text("W", 283, 35)
    text("E", 405, 35)
    text("R", 525, 35)
    text("T", 595, 65)
    for(let i=0; i<tropasOnHold.length; i++){
      fill(BLACK_GREEN)
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
        fill(DARK_GREEN)
        rect(windowWidth/2, 40 + 40-allyTimer/3, 40, allyTimer/3)
      }
      noStroke()
      image(auxImg, windowWidth/2 + 50*i, 40 + 50*Math.floor(i/16), 40, 40, auxX, auxPosition, 80, 80)
    }
    for(let i = 0; i<currentMaxLife ; i++){
      displayHearts(60 + 35*i, windowHeight-260, BLACK_PINK)
    }
    for(let i = 0; i<game.allyBase ; i++){
      displayHearts(60 + 35*i, windowHeight-260, PINK)
    } 
    for(let i = 0; i<3 ; i++){
      displayHearts(windowWidth-115 + 35*i, windowHeight-320, BLACK_PINK)
    }
    for(let i = 0; i<game.enemyBase ; i++){
      displayHearts(windowWidth-115 + 35*i, windowHeight-320, PINK)
    }   
    fill(255)
    stroke(0)
    text("6", 75, 45)
    text("14", 195, 45)
    text("9", 315, 45)
    text("12", 435, 45)
    if(upgrades[4]){
      text("25", 555, 75)
    }
    stroke(0)
    fill(0)
    rect(70, 110, 100, 40)
    rect(190, 110, 100, 40)
    rect(310, 110, 100, 40)
    rect(430, 110, 100, 40)
    textSize(10)
    fill(255,0,0)
    stroke(255,0,0)
    text("ATK: 300", 72, 122)
    text("ATK: 200", 192, 122)
    text("ATK: 300", 312, 122)
    text("ATK: 100", 432, 122)
    fill(0,255,0)
    stroke(0,255,0)
    text("LIFE: 700", 122, 122)
    text("LIFE: 300", 242, 122)
    text("LIFE: 300", 362, 122)
    text("LIFE: 1500", 477, 122)
    fill(255,179,0)
    stroke(255,179,0)
    text("RANGE: 1", 72, 142)
    text("RANGE: 3", 192, 142)
    text("RANGE: 2", 312, 142)
    text("RANGE: 1", 432, 142)   
    skillDetails()
    showAttributes()
}

function endStage(){

  stroke(DARK_GREEN)
  textSize(60)
  fill(DARK_GREEN)
  if(isRunning == "victory"){
    if(lastLevel!=6){
      text("You Win!", windowWidth/2-120, windowHeight/2-140)
      textSize(30)
      !showNextLevel ? text("Choose an upgrade", windowWidth/2-130, windowHeight/2-80) : text("Your choose was", windowWidth/2-110, windowHeight/2-80)
      displayUpgrades()
    }else{
      showNextLevel = true
      textSize(90)
      text("Congratulations!", windowWidth/2-300, windowHeight/2-140)
      textSize(30)
      text("Now you are a Lich King!", windowWidth/2-170, windowHeight/2)
    }
    if(showNextLevel){
      textSize(20)
      if(lastLevel!=6){
        buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-200, windowHeight-77, 150, 40)
        text("Continue", windowWidth/2-165, windowHeight-50)
      }
      buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2+50, windowHeight-77, 160, 40)
      text("Return to Menu", windowWidth/2+60, windowHeight-50)
    }
  }
  if(isRunning == "defeat"){
    fill(DARK_GREEN)
    text("You Lose!", windowWidth/2-140, windowHeight/2-300)
    image(tombstone, 2*(windowWidth/6), windowHeight/4-50, 2*windowWidth/6, 2*windowHeight/4+130)
    textSize(20)
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2-200, windowHeight-77, 150, 40)
    text("Restart Level", windowWidth/2-185, windowHeight-50)
    buttonEffect(DARK_GREEN,BACKGROUND_COLOR,windowWidth/2+50, windowHeight-77, 160, 40)
    text("Return to Menu", windowWidth/2+60, windowHeight-50)
  }
}

function spawn(){
  if (tropasOnHold.length > 0){
    allyTimer += 1
    if(allyTimer % castTime == 0){    
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
  game = new Game1(currentMaxLife)
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

function displayHearts(px, py, color){
  fill(color)
  stroke(0)
  beginShape()
  for (let a=0; a< TWO_PI; a+=0.01){
    let r = 1;
    let x = r * 16 * pow(sin(a), 3)
    let y = r*-1 * (13 * cos(a) - 5*cos(2*a) - 2*cos(3*a) - cos(4*a))
    vertex(x+px,y+py)
  }
  endShape()
}

function showHands(i){
    tint(255, 200)
    image(hands[Math.floor(i/10)], (windowWidth/4), 50, windowWidth/2, windowWidth/2-100)  
    noTint()
}

function mouseOn(xi, yi, xf, yf){
  return (mouseX >= xi && mouseX <= xi+xf && mouseY >= yi && mouseY <= yi+yf)
}

function drawButton(c1, c2, xa,ya,xb,yb){
    fill(c1)
    rect(xa, ya, xb, yb, 5)
    stroke(c2)
    fill(c2)
}

function buttonEffect(c1, c2, xa,ya,xb,yb){
  stroke(c1)
  if(mouseOn(xa,ya,xb,yb)){
    drawButton(c1,c2,xa,ya,xb,yb)
  }else{
    drawButton(c2,c1,xa,ya,xb,yb)
  }
}

function displayUpgrades(){
  textSize(20)
  stroke(RED)
  let xpos = lastChoosedUpgrade==0 ? 13 : 3
  console.log(lastChoosedUpgrade)
  if(upgrades[0] && lastChoosedUpgrade != 0 && !showNextLevel){
    stroke(GREY)
    drawButton(GREY, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if((mouseOn(3*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150) && lastChoosedUpgrade==-1) || lastChoosedUpgrade==0){
    drawButton(RED, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if(lastChoosedUpgrade==-1){
    drawButton(255, RED, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }
  if(lastChoosedUpgrade==0 || lastChoosedUpgrade==-1){
    text("+1 Life", xpos*windowWidth/29+45, windowHeight/2+60)
  }
  stroke(BROWN)
  xpos = lastChoosedUpgrade==1 ? 13 : 8
  if(upgrades[1] && lastChoosedUpgrade != 1 && !showNextLevel){
    stroke(GREY)
    drawButton(GREY, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if((mouseOn(8*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150) && lastChoosedUpgrade==-1) || lastChoosedUpgrade==1){
    drawButton(BROWN, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if(lastChoosedUpgrade==-1){
    drawButton(255, BROWN, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }
  if(lastChoosedUpgrade==1 || lastChoosedUpgrade==-1){
    text("Cast Time", xpos*windowWidth/29+35, windowHeight/2+50)
    text("Reduction", xpos*windowWidth/29+35, windowHeight/2+70)
  }
  stroke(BLUE)
  if(upgrades[2] && lastChoosedUpgrade != 2 && !showNextLevel){
    stroke(GREY)
    drawButton(GREY, 255, 13*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if((mouseOn(13*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150) && lastChoosedUpgrade==-1) || lastChoosedUpgrade==2){
    drawButton(BLUE, 255, 13*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if(lastChoosedUpgrade==-1){
    drawButton(255, BLUE, 13*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }
  if(lastChoosedUpgrade==2 || lastChoosedUpgrade==-1){
    text("Mana Max", 13*windowWidth/29+30, windowHeight/2+50)
    text("+25", 13*windowWidth/29+62, windowHeight/2+80)
  }
  stroke(GREEN)
  xpos = lastChoosedUpgrade==3 ? 13 : 18
  if(upgrades[3] && lastChoosedUpgrade != 3 && !showNextLevel){
    stroke(GREY)
    drawButton(GREY, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if((mouseOn(18*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150) && lastChoosedUpgrade==-1) || lastChoosedUpgrade==3){
    drawButton(GREEN, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if(lastChoosedUpgrade==-1){
    drawButton(255, GREEN, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }
  if(lastChoosedUpgrade==3 || lastChoosedUpgrade==-1){
    text("Mana Regen", xpos*windowWidth/29+20, windowHeight/2+50)
    text("+50%", xpos*windowWidth/29+55, windowHeight/2+80)
  }
  stroke(ORANGE)
  xpos = lastChoosedUpgrade==4 ? 13 : 23
  if(upgrades[4] && lastChoosedUpgrade != 4 && !showNextLevel){
    stroke(GREY)
    drawButton(GREY, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if((mouseOn(23*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150) && lastChoosedUpgrade==-1) || lastChoosedUpgrade==4){
    drawButton(ORANGE, 255, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }else if(lastChoosedUpgrade==-1){
    drawButton(255, ORANGE, xpos*windowWidth/29, windowHeight/2-20, 3*windowWidth/29, 150)
  }
  if(lastChoosedUpgrade==4 || lastChoosedUpgrade==-1){
    text("New Skill:", xpos*windowWidth/29+35, windowHeight/2+50)
    text("Zombieland", xpos*windowWidth/29+25, windowHeight/2+80)
  }
}

function skillDetails(){
  //rect(550, 60, 50, 50)
  if(upgrades[4]){
    if(mouseX>=550 && mouseX<=600 && mouseY>=60 && mouseY<=110){
      fill(0)
      noStroke()
      rect(575,85,100,40)
      fill(255)
      textSize(10)
      text("Paralyze enemies", 585, 100)
      text("for 5 seconds", 585, 115)
    }
  }
}

function showAttributes(){
  if(!hideMenu){
    fill(0)
    strokeWeight(3)
    stroke(0)
    rect(30,160,105,120)
    strokeWeight(1)
    textSize(10)
    fill(255,0,0)
    stroke(255,0,0)
    text("Max Life: " + str(currentMaxLife) + " hearts", 35, 205)
    fill(153,76,0)
    stroke(153,76,0)
    text("Cast Time: " + str(castTime/60) + " sec", 35, 225)
    fill(0,128,255)
    stroke(0,128,255)
    text("Max Mana: " + str(maxMana), 35, 245)
    fill(0,180,0)
    stroke(0,180,0)
    text("Mana Regen: " + (manaRegen*60).toFixed(2) + "/sec", 35, 265)
  }
  stroke(0)
  strokeWeight(3)
  fill(BLACK_GREEN)
  rect(30,160,105,30)
  circle(30, 175, 30)
  strokeWeight(1)
  stroke(0)
  fill(255,255,0)
  textSize(15)
  text("X", 25, 180)
  text("Status", 65, 180)
}

let current_frame = 0;
function draw() {
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
      mana = Math.min(mana+manaRegen, maxMana)
      game.fight()
      game.display()
      displayLichKing(allyTimer)
      if(game.enemyBase <= 0){
        lastLevel = level
        isRunning = "victory"
        showNextLevel = !showNextLevel
        maxLevel = Math.min(maxLevel+1, 6)
        resetAll()
      }
      if(game.allyBase <= 0){
        lastLevel = level
        isRunning = "defeat"
        resetAll()
      }
      if(paralyzed){
        handsCounter = (handsCounter + 1) % 300
        handsAnimation = (handsAnimation+1)%140
        showHands(handsAnimation)
        if(handsCounter == 0){
          paralyzed = !paralyzed
          handsAnimation = 0
        }
      }
  }else if(isRunning == "Menu"){
    image(menuBack, 0, 0, windowWidth, windowHeight)
  }else if(isRunning == "LevelSelect"){
    background(BACKGROUND_COLOR)
    drawChooseLevel()
  }else{
    background(BACKGROUND_COLOR)
    endStage()
  }
  stroke(0)
  fill(0)
}
