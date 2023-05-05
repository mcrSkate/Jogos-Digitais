class Game1{
  constructor(life){
    this.enemyBase = 3
    this.allyBase = life
    this.allies = []
    this.enemies = []
  }
  
  addAlly(tropa){
    this.allies.push(tropa)
  }
  
  addEnemy(tropa){
    this.enemies.push(tropa)
  }
  
  display(){
    if(this.allies.length>0){
      for (let i in this.allies){
        display_troops(this.allies[i])
      }
    }
    if(this.enemies.length>0){  
      for (let i in this.enemies){
        display_troops(this.enemies[i])
      }
    }
  }
  
  fight(){
    if(this.allies.length>0){
      for(let i = this.allies.length-1; i>=0; i--){
        if(this.allies.length>0){
          if(this.allies[i].x+this.allies[i].range >= windowWidth-60){
            this.allies[i].slash()
            this.enemyBase -= 1
            this.allies.splice(i, 1)
          }
          else if (this.enemies.length>0){
            if(dist(this.allies[i].x, windowHeight - 40 - 100, this.enemies[0].x, windowHeight - 40 - 100) <= this.allies[i].range){
              console.log("slashing")
              this.allies[i].slash()
              this.enemies[0].takeDamage(this.allies[i].damage/60)             
            }else{
              if(i!=0){
                if(dist(this.allies[i].x, windowHeight - 40 - 100, this.allies[i-1].x, windowHeight - 40 - 100) > 80){
                  this.allies[i].move()
                }else{
                  this.allies[i].stop()
                }
              }else{
                this.allies[i].move()
              }
            }
          }else{
            if(i!=0){
              if(dist(this.allies[i].x, windowHeight - 40 - 100, this.allies[i-1].x, windowHeight - 40 - 100) > 80){
                this.allies[i].move()
              }else{
                this.allies[i].stop()
              }
            }else{
              this.allies[i].move()
            }
          }
        }
      }
    }
    if(this.enemies.length>0){
      for(let i = this.enemies.length-1; i>=0; i--){
        
        if(this.enemies.length>0){
          if(this.enemies[i].x-this.enemies[i].range <= 60){
            this.enemies[i].slash()
            this.allyBase -= 1
            this.enemies.splice(i, 1)
          }
          else if (this.allies.length>0){
            if(dist(this.enemies[i].x, windowHeight - 40 - 100, this.allies[0].x, windowHeight - 40 - 100) <= this.enemies[i].range){
              this.allies[0].takeDamage(this.enemies[i].damage/60)
              this.enemies[i].slash()
            }else{
              if(i!=0){
                if(dist(this.enemies[i].x, windowHeight - 40 - 100, this.enemies[i-1].x, windowHeight - 40 - 100) > 80){
                  this.enemies[i].move()
                }else{
                  this.enemies[i].stop()
                }
              }else{
                this.enemies[i].move()
              }
            }
          }else{
            if(i!=0){
                if(dist(this.enemies[i].x, windowHeight - 40 - 100, this.enemies[i-1].x, windowHeight - 40 - 100) > 80){
                  this.enemies[i].move()
                }else{
                  this.enemies[i].stop()
                }
              }else{
                this.enemies[i].move()
              }
          }
        }
      }
    } 
    if(this.allies.length>0){
      if(this.allies[0].life <=0){
        this.allies.splice(0, 1)
      }
    }
    if(this.enemies.length>0){
      if(this.enemies[0].life <=0){
        this.enemies.splice(0, 1)
      }
    }
  }
  
  /*moving(){
    if(this.allies.length > 0){
      for(let i in this.allies){
        this.allies[i].move()
      }
    } 
    if(this.enemies.length>0){
      for(let i in this.enemies){
        this.enemies[i].move()
      }
    }
  }*/
}
