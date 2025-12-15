var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth, groundY, "DarkSlateBlue");
    background.addChild(backgroundFill);
            
            // TODO 2: - Add a moon and starfield
            // Moon (Now a Futuristic Orb/Antenna)
    var sciFiPlanet = draw.bitmap("img/moon.png"); // Assuming you kept the moon image or replaced it
    sciFiPlanet.x = canvasWidth - 250;
    sciFiPlanet.y = 50;
    sciFiPlanet.scaleX = 1.0; 
    sciFiPlanet.scaleY = 1.0; 
    background.addChild(sciFiPlanet);
    
    // Star Field (Now City Lights/Distant Windows)
    for (var i = 0; i < 1000; ++i) {// Made 150 stars/lights
        // Draw a small, random-sized rectangle (window/light) instead of a circle
        var star = draw.circle(Math.random() * 2, "LightYellow"); 
        star.x = canvasWidth * Math.random();
        star.y = groundY * Math.random();
        background.addChild(star);
    }
        // Position lights only in the top half of the background (above buildings)
        rect.x = canvasWidth * Math.random();
        rect.y = (groundY / 2) * Math.random(); // Only up to half the groundY
        background.addChild(rect);
    }
            
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            
var tree;

var buildings = []; // Declaration for the Tower Blocks/Buildings array
            // TODO 4: part 1
    // Create several building rectangles and add them to the buildings array.
    for (var i = 0; i < 10; ++i) {
        // CHALLENGE: Give the buildings random heights
        var minHeight = 150;
        var maxHeight = 400;
        var buildingHeight = minHeight + Math.random() * (maxHeight - minHeight);
        
        var color = ["#444444", "#555555", "#666666"][Math.floor(Math.random() * 3)]; // Darker shades for buildings
        
        var building = draw.rect(100, buildingHeight, color, "#00FFFF", 2); // Wider, Neon Cyan outline
        
        building.x = 200 * i + (Math.random() * 50); 
        building.y = groundY - buildingHeight;
        
        background.addChild(building);
        factoryStructures.push(building);
    }
}
            // TODO 3: Part 1 - Add a tree
            var
    // ... other variables
    background = new createjs.Container();

// ANIMATION VARIABLES HERE
var tree;
// TODO 3: part 1
    // Store a bitmap in tree variable and add it to the background.
    // Use an image that fits the cyberpunk theme (e.g., a data antenna array).
    scrapPillar = draw.bitmap("img/tree.png");
    // Position on the ground, slightly adjusting the Y value
    scrapPillar.x = canvasWidth;
    scrapPillar.y = groundY - 150; // Adjust based on your image height
    
    scrapPillar.scaleX = 0.5;
    scrapPillar.scaleY = 0.5;
    background.addChild(scrapPillar);
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            // TODO 3: part 2
    // Move the Data Tree/Antenna to the left.
    // To move left, subtract from the x property.
   scrapPillar.x = scrapPillar.x - 3; // Fast speed (Foreground)

    if (scrapPillar.x < -200) {
        scrapPillar.x = canvasWidth;
    }
            
            // TODO 4: Part 2 - Parallax
            // TODO 4: part 2
    // Animate the buildings and implement Parallax.
    for (var i = 0; i < factoryStructures.length; i++) {
        var structure = factoryStructures[i];
        
        // Move slower than the Scrap Pillar (Parallax: Mid-ground)
        structure.x = structure.x - 1; 

        // Wrap around if they go off screen to the left
        if (structure.x < -75) { 
            structure.x = canvasWidth; 
        }
    

    
    // The tree (close object) moves at -2 (faster)
    // The buildings (far objects) move at -1 (slower)

         // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
