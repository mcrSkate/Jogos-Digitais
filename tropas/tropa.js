class Tropa{
  
  constructor(life, damage, tipo, range, side){
    this.life = life
    this.max_life = life
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
    if(!paralyzed || this.tipo<5){
      this.movement = "walking"
      this.x = this.x + (this.speed * this.side)
    }
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
}
