// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas;
    var stage;
    var firstDieLabel;
    var secondDieLabel;
    var rollButton;
    function Start() {
        canvas = document.getElementById("canvas");
        // creates a new stage container - parent container for our app
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 30; // set framerate to 30 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        Main(); // call the main function
    }
    function Update(event) {
        firstDieLabel.x = firstDieLabel.x + 5; // move the text to the right of the canvas every frame
        secondDieLabel.y = secondDieLabel.y + 7; // move the text to the bottom of the canvas every frame
        stage.update(); // redraw the stage
    }
    function Main() {
        firstDieLabel = new objects.Label("Click on Projects! For Star Wars Movie Poster", "20px", "Consolas", "#000000", 125, 125, true);
        stage.addChild(firstDieLabel);
        // add a goodbyeLabel to the stage
        secondDieLabel = new objects.Label("Or Click Projects Button!", "24px", "Arial", "#FF0000", 125, 125, true);
        stage.addChild(secondDieLabel);
        // add a rollButton to the stage
        rollButton = new createjs.Bitmap("../../Assets/images/rollButton.png");
        rollButton.regX = rollButton.getBounds().width * 0.5;
        rollButton.regY = rollButton.getBounds().height * 0.5;
        rollButton.x = 125;
        rollButton.y = 200;
        stage.addChild(rollButton);
        
        rollButton.on("click", function () {
            firstDieLabel.text = "Click on Projects! For Star Wars Movie Poster";
            secondDieLabel.text = "Or Click Projects Button!";
        });
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map