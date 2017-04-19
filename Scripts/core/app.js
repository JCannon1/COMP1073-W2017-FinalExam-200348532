// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas;
    var stage;
    var firstDieLabel;
    var secondDieLabel;
    var rollButton;
    var firstDie;
    function Start() {
        canvas = document.getElementById("canvas");
        // creates a new stage container - parent container for our app
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 30; // set framerate to 30 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        Main(); // call the main function
    }
    function Update(event) {
        firstDieLabel.rotation = 0; // rotate counter clockwise every frame
        secondDieLabel.rotation = 0;
        stage.update(); // redraw the stage
    }
    function Main() {
        firstDieLabel = new objects.Label("1", "24px", "Arial", "#000000", 125, 125, true);
        firstDieLabel.regX = firstDieLabel.getBounds().width * 0.5;
        firstDieLabel.regY = firstDieLabel.getBounds().height * 0.5;
        firstDieLabel.x = 125;
        firstDieLabel.y = 220;
        stage.addChild(firstDieLabel);
        // add a goodbyeLabel to the stage
        secondDieLabel = new objects.Label("2", "24px", "Arial", "#FF0000", 125, 125, true);
        secondDieLabel.regX = secondDieLabel.getBounds().width * 0.5;
        secondDieLabel.regY = secondDieLabel.getBounds().height * 0.5;
        secondDieLabel.x = 225;
        secondDieLabel.y = 220;
        stage.addChild(secondDieLabel);
        // add a rollButton to the stage
        rollButton = new createjs.Bitmap("../../Assets/images/rollButton.png");
        rollButton.regX = rollButton.getBounds().width * 0.5;
        rollButton.regY = rollButton.getBounds().height * 0.5;
        rollButton.x = 175;
        rollButton.y = 340;
        stage.addChild(rollButton);
        rollButton.on("click", function () {
            firstDieLabel.text = "Click on Projects! For Star Wars Movie Poster";
            secondDieLabel.text = "Or Click Projects Button!";
        }, function Update(event) {
            firstDie = new createjs.Bitmap("../../Assets/images/1.png");
            firstDie.regX = firstDie.getBounds().width * 0.5;
            firstDie.regY = firstDie.getBounds().height * 0.5;
            firstDie.x = 125;
            firstDie.y = 200;
            stage.addChild(firstDie);
        });
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map