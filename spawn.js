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

    var maxEnemies = 3;

    if (enemiesTotalCount > easyMaxSpawn)
    {
        maxEnemies = 1;
    }
    
    if (enemiesAlive < maxEnemies)
    {
        shouldSpawn = true;
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
    var enemiesAlive = game.enemies.length;
    var shouldSpawn = false;

    var maxEnemies = 4;

    if (enemiesTotalCount > mediumMaxSpawn)
    {
        maxEnemies = 2;
    }
    
    if (enemiesAlive < maxEnemies)
    {
        shouldSpawn = true;
    }   
    
    if (totalFrameCounter % 100 != 0) return

    //no inicio evitar spawnar mt rapido
    if (enemiesTotalCount < 4 && enemiesTotalCount != 0)
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

function spawnHard(game)
{
    var enemiesAlive = game.enemies.length;
    var shouldSpawn = false;

    var maxEnemies = 5;

    if (enemiesTotalCount > mediumMaxSpawn)
    {
        maxEnemies = 3;
    }

    if (enemiesTotalCount > hardMaxSpawn)
    {
        maxEnemies = 2;
    }
    
    if (enemiesAlive < maxEnemies)
    {
        shouldSpawn = true;
    }     
    
    if (totalFrameCounter % 100 != 0) return

    //no inicio evitar spawnar mt rapido
    if (enemiesTotalCount < 5 && enemiesTotalCount != 0)
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

function addTroopByType(game, tipo)
{
    switch (tipo)
    {
        case 1:
            //warrior
            game.addEnemy(new Tropa(700, 300, 5, 120, -1))
            return
        case 2:
            //archer
            game.addEnemy(new Tropa(300, 200, 6, 240, -1))
            return
        case 3:
            //spearman
            game.addEnemy(new Tropa(300, 300, 7, 160, -1))
            return
        case 4:
            //shieldman
            game.addEnemy(new Tropa(1500, 100, 8, 80, -1))
            return        
    }
}
