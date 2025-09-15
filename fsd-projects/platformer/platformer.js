$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100,625,32,45); 
    createPlatform(200,500,32,185);
    createPlatform(250,625,32,45);
    createPlatform(300,550,32,45);
    createPlatform(500,550,32,45);
    createPlatform(560,450,32,45);
    createPlatform(600,350,32,200);
    createPlatform(800,500,70,25);
    createPlatform(1000,700,140,25);
    createPlatform(0,1000,32,45);

    // TODO 3 - Create Collectables
    createCollectable("steve", 250, 400, 0.5, 0.7);
    createCollectable("diamond", 490, 450, 0.5, 0.7);
    createCollectable("max", 830, 400, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
    createCannon("bottom", 185,2000);
    createCannon("bottom", 650,1450);
    createCannon("bottom", 850,1250);
    createCannon("right", 500,3000);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
