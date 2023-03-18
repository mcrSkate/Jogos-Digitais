class Tropa{
  constructor(life, damage, tipo, range, side){
    this.life = life
    this.damage = damage
    this.tipo = tipo
    this.speed = 1.5
    this.range = range
    this.side = side
    if(side == 1){
      this.x = 60
    }else{
      this.x = windowWidth - 60
    }
    this.isMoving = true
  }
  
  move(){
    this.x = this.x + (this.speed * this.side)
  }
  
  takeDamage(damage){
    this.life -= damage
  }
  
  changeMoving(){
    this.isMoving = !this.isMoving
  }
  
  display(){
    noStroke()

    //seleciona qual é o sprite pelo tipo
    let troop_sprite = archer
    if (this.tipo == 2)
    {
      troop_sprite = archer
    }
    
    //depois faz um codigo pra selecionar qual é a animação
    // nesse codigo eles tao sempre atirando flechas
    let imgW = (current_frame % shoot_frames) * 64;
    let imgH = 0;
    if (this.side == -1)
    {
      imgH = shoot_right;
    }
    else
    {
      imgH = shoot_left;
    }

    //desenha o boneco
    //argumentos da imagem: sprite, imagemX, imagemY, esses 6 ultimos argumentos deixa fixo
    //o imgW seleciona o frame atual da animacao
    //o imgH seleciona qual é animacao, elas estão descritas no sketch.js
    image(troop_sprite, this.x, windowHeight - 40 - 100, 64, 64, imgW , imgH, 64, 64);
    fill(255,0,0)
    rect(this.x-40, windowHeight-200, 80, 20)
    fill(255)
    textSize(12)
    text(Math.trunc(this.life), this.x-10, windowHeight-185)
  }



}
