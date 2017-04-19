// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas;
    var stage;
    var firstDieLabel;
    var secondDieLabel;
    var rollButton;
    var firstDie;
    var secondDie;
    var thirdDie;
    var forthDIe;
    var fifthDie;
    var sixthDie;
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
        firstDieLabel.y = 270;
        stage.addChild(firstDieLabel);
        // add a goodbyeLabel to the stage
        secondDieLabel = new objects.Label("2", "24px", "Arial", "#FF0000", 125, 125, true);
        secondDieLabel.regX = secondDieLabel.getBounds().width * 0.5;
        secondDieLabel.regY = secondDieLabel.getBounds().height * 0.5;
        secondDieLabel.x = 255;
        secondDieLabel.y = 270;
        stage.addChild(secondDieLabel);
        firstDie = new createjs.Bitmap("../../Assets/images/1.png");
        firstDie.regX = firstDie.getBounds().width * 0.1;
        firstDie.regY = firstDie.getBounds().height * 0.4;
        firstDie.x = 25;
        firstDie.y = 130;
        stage.addChild(firstDie);
        secondDie = new createjs.Bitmap("../../Assets/images/2.png");
        secondDie.regX = secondDie.getBounds().width * 0.1;
        secondDie.regY = secondDie.getBounds().height * 0.4;
        secondDie.x = 240;
        secondDie.y = 130;
        stage.addChild(secondDie);
        thirdDie = new createjs.Bitmap("../../Assets/images/3.png");
        thirdDie.regX = thirdDie.getBounds().width * 0.1;
        thirdDie.regY = thirdDie.getBounds().height * 0.4;
        thirdDie.x = 25;
        thirdDie.y = 130;
        stage.addChild(thirdDie);
        fourthDie = new createjs.Bitmap("../../Assets/images/4.png");
        fourthDie.regX = fourthDie.getBounds().width * 0.1;
        fourthDie.regY = fourthDie.getBounds().height * 0.4;
        fourthDie.x = 25;
        fourthDie.y = 130;
        stage.addChild(fourthDie);
        fifthDie = new createjs.Bitmap("../../Assets/images/5.png");
        fifthDie.regX = fifthDie.getBounds().width * 0.1;
        fifthDie.regY = fifthDie.getBounds().height * 0.4;
        fifthDie.x = 25;
        fifthDie.y = 130;
        stage.addChild(fifthDie);
        sixthDie = new createjs.Bitmap("../../Assets/images/6.png");
        sixthDie.regX = sixthDie.getBounds().width * 0.1;
        sixthDie.regY = sixthDie.getBounds().height * 0.4;
        sixthDie.x = 25;
        sixthDie.y = 130;
        stage.addChild(sixthDie);
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
            math.random();
        });
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map