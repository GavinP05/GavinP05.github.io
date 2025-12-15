var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
  {
    name: "The Orbital Scrapheap",
    number: 1,
    speed: -3, // Game speed
    gameItems: [
      // Saw Blades (Junk Saws)
      { type: "sawblade", x: 600, y: groundY },
      { type: "sawblade", x: 1000, y: groundY },
      { type: "sawblade", x: 1400, y: groundY - 100 }, // High sawblade
      
      // Enemy (Rogue Drone)
      { type: "enemy", x: 1800, y: groundY - 20 },
      
      // Reward (Power Core)
      { type: "reward", x: 2200, y: groundY - 60},
      
      // Marker (Teleport Gate)
      { type: "marker", x: 2600, y: groundY - 5}, // End of level 1
    ],
  },
  {
    name: "Asteroid Maze",
    number: 2,
    speed: -3,
    gameItems: [
      // Saw Blades
      { type: "sawblade", x: 500, y: groundY - 100 }, 
      { type: "sawblade", x: 700, y: groundY },
      { type: "sawblade", x: 900, y: groundY - 100 },
      
      // Enemy
      { type: "enemy", x: 1200, y: groundY - 100 },
      { type: "enemy", x: 1500, y: groundY - 20 },
      
      // Reward
      { type: "reward", "x": 1800, "y": groundY - 200},
      
      // Marker
      { type: "marker", x: 2400, y: groundY - 5}, // End of level 2
    ],
  },
  
  // TODO 12b: Add a third level
  {
    name: "The Core Breach",
    number: 3,
    speed: -4, // Faster speed for the final level
    gameItems: [
      // Harder sequence
      { type: "sawblade", x: 600, y: groundY },
      { type: "enemy", x: 700, y: groundY - 100 },
      { type: "sawblade", x: 800, y: groundY },
      { type: "reward", x: 1200, y: groundY - 150},
      { type: "sawblade", x: 1500, y: groundY - 50 },
      { type: "enemy", x: 1800, y: groundY - 20 },
      
      // Final Marker
      { type: "marker", x: 2200, y: groundY - 5}, 
    ],
  }
  
 

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
