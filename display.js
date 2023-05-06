//Constantes dos sprites

//Lich King
const ALLY_LICH_KING = 192
const ALLY_LICH_KING_FRAMES = 7 

//Allies

//Ally Warrior
const ALLY_WARRIOR_WALKING = 1760
const ALLY_WARRIOR_WALKING_FRAMES = 9
const ALLY_WARRIOR_SLASH = 2276
const ALLY_WARRIOR_SLASH_FRAMES = 6

//Ally Archer
const ALLY_ARCHER_WALKING = 1760
const ALLY_ARCHER_WALKING_FRAMES = 9
const ALLY_ARCHER_SHOOTING = 1216
const ALLY_ARCHER_SHOOTING_FRAMES = 13

//Ally Spearman
const ALLY_SPEARMAN_WALKING = 704
const ALLY_SPEARMAN_WALKING_FRAMES = 9
const ALLY_SPEARMAN_THRUST = 448
const ALLY_SPEARMAN_THRUST_FRAMES = 8

//Ally Shieldman
const ALLY_SHIELDMAN_WALKING = 704
const ALLY_SHIELDMAN_WALKING_FRAMES = 9
const ALLY_SHIELDMAN_DEFENDING = 448
const ALLY_SHIELDMAN_DEFENDING_FRAMES = 8

//Enemies

//Enemy Shieldman
const ENEMY_SHIELDMAN_WALKING = 576
const ENEMY_SHIELDMAN_WALKING_FRAMES = 9
const ENEMY_SHIELDMAN_DEFENDING = 320
const ENEMY_SHIELDMAN_DEFENDING_FRAMES = 8

//Enemy Spearman
const ENEMY_SPEARMAN_WALKING = 576
const ENEMY_SPEARMAN_WALKING_FRAMES = 9
const ENEMY_SPEARMAN_THRUST = 320
const ENEMY_SPEARMAN_THRUST_FRAMES = 8

//Enemy Archer
const ENEMY_ARCHER_WALKING = 576
const ENEMY_ARCHER_WALKING_FRAMES = 9
const ENEMY_ARCHER_SHOOTING = 1088
const ENEMY_ARCHER_SHOOTING_FRAMES = 13

//Enemy Warrior
const ENEMY_WARRIOR_WALKING = 576
const ENEMY_WARRIOR_WALKING_FRAMES = 9
const ENEMY_WARRIOR_SLASH = 1504
const ENEMY_WARRIOR_SLASH_FRAMES = 6

function displayLichKing(timer){
  image(lichKing, 0, windowHeight - 74 - 128, 128, 128, ((((Math.floor(timer/10))%6)+1)*64)+8, ALLY_LICH_KING, 64, 64)
}

function display_troops(troop){
    noStroke()

    //depois faz um codigo pra selecionar qual é a animação
    // nesse codigo eles tao sempre atirando flechas
    let qtdFrames = 0;
    let imgH = 0;
    let imgW = 0;
    

    //seleciona qual é o sprite pelo tipo
    let troop_sprite = warrior
    if (troop.tipo == 1){
      if (troop.movement == "walking"){ 
        imgH += ALLY_WARRIOR_WALKING;
        qtdFrames = ALLY_WARRIOR_WALKING_FRAMES;
      }else if(troop.movement == "attacking"){
        imgH += ALLY_WARRIOR_SLASH;
        qtdFrames = ALLY_WARRIOR_SLASH_FRAMES;
      }else{
        imgH += ALLY_WARRIOR_WALKING;
        qtdFrames = 1;
      }
      imgW = ((current_frame % qtdFrames) * 128)+40;
    }else if (troop.tipo == 2){
      troop_sprite = archer
      if (troop.movement == "walking"){ 
        imgH += ALLY_ARCHER_WALKING;
        qtdFrames = ALLY_ARCHER_WALKING_FRAMES;
        imgW = ((current_frame % qtdFrames) * 128)+32;
      }else if(troop.movement == "attacking"){
        imgH += ALLY_ARCHER_SHOOTING;
        qtdFrames = ALLY_ARCHER_SHOOTING_FRAMES;
        imgW = ((current_frame % qtdFrames) * 64)+8;
      }else{
        imgH += ALLY_ARCHER_WALKING;
        qtdFrames = 1;
        imgW = ((current_frame % qtdFrames) * 128)+32;
      }
    }else if (troop.tipo == 3){
      troop_sprite = spearman
      if (troop.movement == "walking"){ 
        imgH += ALLY_SPEARMAN_WALKING;
        qtdFrames = ALLY_SPEARMAN_WALKING_FRAMES;
      }else if(troop.movement == "attacking"){
        imgH += ALLY_SPEARMAN_THRUST;
        qtdFrames = ALLY_SPEARMAN_THRUST_FRAMES;
      }else{
        imgH += ALLY_SPEARMAN_WALKING;
        qtdFrames = 1;
      }
      imgW = ((current_frame % qtdFrames) * 64);
    }else if (troop.tipo == 4){
      troop_sprite = shieldman
      if (troop.movement == "walking"){ 
        imgH += ALLY_SHIELDMAN_WALKING;
        qtdFrames = ALLY_SHIELDMAN_WALKING_FRAMES;
      }else if(troop.movement == "attacking"){
        imgH += ALLY_SHIELDMAN_DEFENDING;
        qtdFrames = ALLY_SHIELDMAN_DEFENDING_FRAMES;
      }else{
        imgH += ALLY_SHIELDMAN_WALKING;
        qtdFrames = 1;
      }
      imgW = ((current_frame % qtdFrames) * 64);
    }else if (troop.tipo == 5){
      troop_sprite = enemyWarrior
      if (level == 6){
        if (troop.movement == "walking"){ 
          imgH += ALLY_WARRIOR_WALKING-256;
          qtdFrames = ALLY_WARRIOR_WALKING_FRAMES;
        }else if(troop.movement == "attacking"){
          imgH += ALLY_WARRIOR_SLASH-256;
          qtdFrames = ALLY_WARRIOR_SLASH_FRAMES;
        }else{
          imgH += ALLY_WARRIOR_WALKING-256;
          qtdFrames = 1;
        }
        imgW = ((current_frame % qtdFrames) * 128)+24;
      }else{
        if (troop.movement == "walking"){ 
          imgH += ENEMY_WARRIOR_WALKING;
          qtdFrames = ENEMY_WARRIOR_WALKING_FRAMES;
          imgW = ((current_frame % qtdFrames) * 64);
        }else if(troop.movement == "attacking"){
          imgH += ENEMY_WARRIOR_SLASH;
          qtdFrames = ENEMY_WARRIOR_SLASH_FRAMES;
          imgW = ((current_frame % qtdFrames) * 128)+32;
        }else{
          imgH += ENEMY_WARRIOR_WALKING;
          qtdFrames = 1;
          imgW = ((current_frame % qtdFrames) * 64);
        }
      }
    }else if (troop.tipo == 6){
      troop_sprite = enemyArcher
      if(level==6){
        if (troop.movement == "walking"){ 
          imgH += ENEMY_SPEARMAN_WALKING;
          qtdFrames = ENEMY_SPEARMAN_WALKING_FRAMES;
        }else if(troop.movement == "attacking"){
          imgH += ENEMY_SPEARMAN_THRUST;
          qtdFrames = ENEMY_SPEARMAN_THRUST_FRAMES;
        }else{
          imgH += ENEMY_SPEARMAN_WALKING;
          qtdFrames = 1;
        }
        imgW = ((current_frame % qtdFrames) * 64);
      }else{
        if (troop.movement == "walking"){ 
          imgH += ENEMY_ARCHER_WALKING;
          qtdFrames = ENEMY_ARCHER_WALKING_FRAMES;
        }else if(troop.movement == "attacking"){
          imgH += ENEMY_ARCHER_SHOOTING;
          qtdFrames = ENEMY_ARCHER_SHOOTING_FRAMES;
        }else{
          imgH += ENEMY_ARCHER_WALKING;
          qtdFrames = 1;
        }
        imgW = ((current_frame % qtdFrames) * 64);
      }
    }else if (troop.tipo == 7){
      troop_sprite = enemySpearman
      if (troop.movement == "walking"){ 
        imgH += ENEMY_SPEARMAN_WALKING;
        qtdFrames = ENEMY_SPEARMAN_WALKING_FRAMES;
      }else if(troop.movement == "attacking"){
        imgH += ENEMY_SPEARMAN_THRUST;
        qtdFrames = ENEMY_SPEARMAN_THRUST_FRAMES;
      }else{
        imgH += ENEMY_SPEARMAN_WALKING;
        qtdFrames = 1;
      }
      imgW = ((current_frame % qtdFrames) * 64);
    }else{
      troop_sprite = enemyShieldman
      if (troop.movement == "walking"){ 
        imgH += ENEMY_SHIELDMAN_WALKING;
        qtdFrames = ENEMY_SHIELDMAN_WALKING_FRAMES;
      }else if(troop.movement == "attacking"){
        imgH += ENEMY_SHIELDMAN_DEFENDING;
        qtdFrames = ENEMY_SHIELDMAN_DEFENDING_FRAMES;
      }else{
        imgH += ENEMY_SHIELDMAN_WALKING;
        qtdFrames = 1;
      }
      imgW = ((current_frame % qtdFrames) * 64);
    }
    //desenha o boneco
    //argumentos da imagem: sprite, imagemX, imagemY, esses 6 ultimos argumentos deixa fixo
    //o imgW seleciona o frame atual da animacao
    //o imgH seleciona qual é animacao, elas estão descritas no sketch.js
    stroke(0)
    image(troop_sprite, troop.x -64, windowHeight - 74 - 128, 128, 128, imgW , imgH, 64, 64);
    fill(DARK_RED)
    rect(troop.x-40, windowHeight-140-64, 80, 20)
    fill(255,0,0)
    rect(troop.x-40, windowHeight-140-64, 80 * troop.life/troop.max_life, 20)
    if(paralyzed && troop.tipo > 4){
      image(zombieHand, troop.x-32, windowHeight-122, 64,48)
    }
  }