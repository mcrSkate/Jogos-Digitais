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
    fill(0,(153*this.tipo) % 255,(76*this.tipo) % 255) 
    circle(this.x, windowHeight - 40 - 100, 80)
    fill(255,0,0)
    rect(this.x-40, windowHeight-200, 80, 20)
    fill(255)
    textSize(12)
    text(Math.trunc(this.life), this.x-10, windowHeight-185)
  }
}