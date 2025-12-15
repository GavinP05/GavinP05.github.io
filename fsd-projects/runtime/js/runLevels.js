var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
// 5a) Create the hitzone (The Shredder - Saw Blade)
    var hitZoneSize = 35; // Increased size to 35 for a larger saw blade
    var damageFromObstacle = 20; // Increased damage for a dangerous blade
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

    // 5b) Position the hitzone
    sawBladeHitZone.x = canvasWidth; // Start off-screen to the right
    sawBladeHitZone.y = groundY - 40; // Position on the ground line (saw is slightly elevated)
    game.addGameItem(sawBladeHitZone);

    // 5c) Add an image to your hitzone
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);

    // Adjust the x and y property of obstacleImage to fit the hitzone.
    // The center of the image is at (0,0) of the hitzone, so shift by negative of the radius (hitZoneSize).
    obstacleImage.x = -hitZoneSize;
    obstacleImage.y = -hitZoneSize;
    // TODO 9: Create Enemy Function (Rogue Drone)
    function createEnemy(x, y) {
        // 7a) Create the game item
        var enemy = game.createGameItem("enemy", 25);
        
        // Custom Enemy: A spinning red hazard square
        var redSquare = draw.rect(50, 50, "Red");
        redSquare.x = -25;
        redSquare.y = -25;
        enemy.addChild(redSquare);

        // 7b) Position the enemy
        enemy.x = x;
        enemy.y = y;

        // 8a) velocityX, rotationalVelocity
        enemy.velocityX = -2; // Moves left
        enemy.rotationalVelocity = 5; // Spins quickly
        
        // 8b) onPlayerCollision
        enemy.onPlayerCollision = function () {
            game.changeIntegrity(-10); // Low damage, but annoying
            enemy.fadeOut(); // Enemy vanishes upon collision
        };

        // 8c) onProjectileCollision
        enemy.onProjectileCollision = function () {
            game.increaseScore(100);
            enemy.shrink(); // Vanishes by shrinking when shot
        };

        // 7c) Add to game
        game.addGameItem(enemy);
    }

    // TODO 10: Design A Reward (Power Core)
    function createReward(x, y) {
        var reward = game.createGameItem("reward", 15);

        // Custom Reward: Yellow pulsating circle (Power Core)
        var powerCore = draw.circle(15, "Yellow", "Orange", 2);
        reward.addChild(powerCore);

        // Center the image
        powerCore.x = 0;
        powerCore.y = 0;

        reward.x = x;
        reward.y = y;
        
        // Behavior on collision
        reward.onPlayerCollision = function () {
            game.increaseScore(500); // Big score boost
            game.changeIntegrity(5); // Small health boost
            reward.fadeOut();
        };

        reward.onProjectileCollision = function () {
            reward.fadeOut(); // Disappear even if shot (don't get points)
        };

        game.addGameItem(reward);
    }

    // TODO 11: Add an End-Of-Level Marker (Teleport Gate)
    function createMarker(x, y) {
        var marker = game.createGameItem("marker", 50); // Large hitzone to prevent missing it

        // Custom Marker: Blue square
        var teleportGate = draw.rect(100, 10, "Cyan", "Blue", 2); // A horizontal gate
        
        // Center the image relative to the large hitzone
        teleportGate.x = -50;
        teleportGate.y = -5;
        marker.addChild(teleportGate);

        marker.x = x;
        marker.y = y;
        
        // Marker should not move
        marker.velocityX = 0; 

        // Behavior on collision/shot
        marker.onPlayerCollision = function () {
            // Must be called to advance level
            startLevel(); 
        };

        marker.onProjectileCollision = function () {
            // Must be called to advance level
            startLevel(); 
        };

        game.addGameItem(marker);
    }

    function startLevel() {
      // TODO 13 goes below here
// 13a) Select the current level's object
    var level = levelData[currentLevel]; 

    // 13b) Get the array from the level object
    var levelObjects = level.gameItems;

    // 13c) Loop over the levelObjects array
    for (var i = 0; i < levelObjects.length; i++) {
        var eachElement = levelObjects[i]; // Get the current item object
        var x = eachElement.x;
        var y = eachElement.y;
        var type = eachElement.type;

        // Use a conditional to call the correct creation function
        if (type === "sawblade") {
            createSawBlade(x, y);
        } else if (type === "enemy") {
            createEnemy(x, y);
        } else if (type === "reward") {
            createReward(x, y);
        } else if (type === "marker") {
            createMarker(x, y);
        }
    }


      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
