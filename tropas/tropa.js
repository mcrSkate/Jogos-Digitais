class Tropa{
  
  constructor(life, damage, tipo, range, side){
    this.life = life
    this.damage = damage
    this.tipo = tipo
    this.speed = 1.5
    this.range = range
    this.side = side
    this.current_frame = 0
    if(side == 1){
      this.x = 120
    }else{
      this.x = windowWidth - 60
    }
    this.movement = "walking"
  }
  
  move(){
    this.movement = "walking"
    this.x = this.x + (this.speed * this.side)
  }
  
  takeDamage(damage){
    this.life -= damage
  }
  
  slash(){
    this.movement = "attacking"
  }

  stop(){
    this.movement = "stop"
  }
  
  display(){
    noStroke()

    //depois faz um codigo pra selecionar qual é a animação
    // nesse codigo eles tao sempre atirando flechas
    let qtdFrames = 0;
    let imgH = 0;
    let imgW = 0;
    

    //seleciona qual é o sprite pelo tipo
    let troop_sprite = warrior
    if (this.tipo == 1 || this.tipo == 3){
      if (this.movement == "walking"){ 
        imgH += warrior_walking;
        qtdFrames = walking_frames;
      }else if(this.movement == "attacking"){
        imgH += warrior_slash;
        qtdFrames = warrior_slash_frames;
      }else{
        imgH += warrior_walking;
        qtdFrames = 1;
      }
      imgW = ((current_frame % qtdFrames) * 128)+24;
      if (this.side != -1){
        imgH += 256
        imgW += 16
      }
    }
    if (this.tipo == 2 || this.tipo == 4){
      troop_sprite = archer
      if (this.movement == "walking"){ 
        imgH += archer_walking;
        qtdFrames = walking_frames;
        if (this.side != -1){
          imgH += 256
        }
        imgW = ((current_frame % qtdFrames) * 128)+32;
      }else if(this.movement == "attacking"){
        imgH += shoot;
        qtdFrames = shoot_frames;
        if (this.side != -1){
          imgH += 128
        }
        imgW = ((current_frame % qtdFrames) * 64)+8;
      }else{
        imgH += archer_walking;
        qtdFrames = 1;
        if (this.side != -1){
          imgH += 256
        }
        imgW = ((current_frame % qtdFrames) * 128)+32;
      }
      
    }
    
    //desenha o boneco
    //argumentos da imagem: sprite, imagemX, imagemY, esses 6 ultimos argumentos deixa fixo
    //o imgW seleciona o frame atual da animacao
    //o imgH seleciona qual é animacao, elas estão descritas no sketch.js
    image(troop_sprite, this.x -64, windowHeight - 40 - 100 - 128, 128, 128, imgW , imgH, 64, 64);
    fill(255,0,0)
    rect(this.x-40, windowHeight-200-64, 80, 20)
    fill(255)
    textSize(12)
    text(Math.trunc(this.life), this.x-10, windowHeight-185-64)
  }



}
