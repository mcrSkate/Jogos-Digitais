function spawnEnemies(game, difficulty)
{
    switch(difficulty)
    {
        case "easy":
            return spawnEasy(game)
        case "medium":
            return spawnMedium(game)
        case "hard":
            return spawnHard(game)
    }
}

var easyMaxSpawn = 20;
var mediumMaxSpawn = 35;
var hardMaxSpawn = 50;

var enemiesTotalCount = 0;

firstSpawnDelay = 0;

function spawnEasy(game)
{
    var enemiesAlive = game.enemies.length;
    var shouldSpawn = false;

    if (enemiesTotalCount < easyMaxSpawn)
    {
        if (enemiesAlive < 3)
        {
            shouldSpawn = true;
        }
    }    
    
    if (totalFrameCounter % 100 != 0) return

    //no inicio evitar spawnar mt rapido
    if (enemiesTotalCount < 3 && enemiesTotalCount != 0)
    {
        firstSpawnDelay++;
        if (firstSpawnDelay < 200)
        {
            shouldSpawn == false;
        }
        else
        {
            firstSpawnDelay = 0;
        }

    }

    if (!shouldSpawn) return;

    var tipo = Math.floor(Math.random() * 4) + 1;

    addTroopByType(game, tipo)
    enemiesTotalCount++
}

function spawnMedium(game)
{
    //todo
}

function spawnHard(game)
{
    //todo
}

function addTroopByType(game, tipo)
{
    switch (tipo)
    {
        case 1:
            //to chutando que essa é do lanceiro
            //esses valores tbm podem mudar
            game.addEnemy(new Tropa(600, 150, 1, 120, -1))
            return
        case 2:
            //to chutando que essa é o do escudeiro
            game.addEnemy(new Tropa(1500, 50, 2, 80, -1))
            return
        case 3:
            game.addEnemy(new Tropa(700, 200, 3, 80, -1))
            return
        case 4:
            game.addEnemy(new Tropa(500, 300, 4, 160, -1))
            return        
    }
}
