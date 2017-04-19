/* File name: app.ts */
/* Author's name: Jesse Cannon */
/* Student ID: 200348532 */
/* Web site name: http://comp1073-w2017-finalexam-200348532.azurewebsites.net/ */
/* File description: TypeScript page for final exam */
// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas;
    var stage;
    var firstDieLabel;
    var secondDieLabel;
    var thirdDieLabel;
    var forthDieLabel;
    var fifthDieLabel;
    var sixthDieLabel;
    var rollButton;
    var firstDie;
    var secondDie;
    var thirdDie;
    var forthDie;
    var fifthDie;
    var sixthDie;
    var Myimages;
    function Start() {
        canvas = document.getElementById("canvas");
        // creates a new stage container - parent container for our app
        stage = new createjs.Stage(canvas);
        createjs.Ticker.framerate = 30; // set framerate to 30 FPS
        createjs.Ticker.on("tick", Update); // call the Update method every frame
        Main(); // call the main function
    }
    function Update(event) {
        firstDieLabel.rotation = 0; // make number labels stay still in place
        secondDieLabel.rotation = 0;
        stage.update(); // redraw the stage
    }
    function Main() {
        // added all die labels 1 through 6
        firstDieLabel = new objects.Label("1", "24px", "Arial", "#000000", 125, 125, true);
        firstDieLabel.regX = firstDieLabel.getBounds().width * 0.5;
        firstDieLabel.regY = firstDieLabel.getBounds().height * 0.5;
        firstDieLabel.x = 125;
        firstDieLabel.y = 270;
        stage.addChild(firstDieLabel);
        secondDieLabel = new objects.Label("2", "24px", "Arial", "#FF0000", 125, 125, true);
        secondDieLabel.regX = secondDieLabel.getBounds().width * 0.5;
        secondDieLabel.regY = secondDieLabel.getBounds().height * 0.5;
        secondDieLabel.x = 255;
        secondDieLabel.y = 270;
        stage.addChild(secondDieLabel);
        thirdDieLabel = new objects.Label("3", "24px", "Arial", "#FF0000", 125, 125, true);
        thirdDieLabel.regX = thirdDieLabel.getBounds().width * 0.5;
        thirdDieLabel.regY = thirdDieLabel.getBounds().height * 0.5;
        thirdDieLabel.x = 255;
        thirdDieLabel.y = 270;
        stage.addChild(thirdDieLabel);
        forthDieLabel = new objects.Label("4", "24px", "Arial", "#FF0000", 125, 125, true);
        forthDieLabel.regX = forthDieLabel.getBounds().width * 0.5;
        forthDieLabel.regY = forthDieLabel.getBounds().height * 0.5;
        forthDieLabel.x = 255;
        forthDieLabel.y = 270;
        stage.addChild(forthDieLabel);
        fifthDieLabel = new objects.Label("5", "24px", "Arial", "#FF0000", 125, 125, true);
        fifthDieLabel.regX = fifthDieLabel.getBounds().width * 0.5;
        fifthDieLabel.regY = fifthDieLabel.getBounds().height * 0.5;
        fifthDieLabel.x = 255;
        fifthDieLabel.y = 270;
        stage.addChild(fifthDieLabel);
        sixthDieLabel = new objects.Label("6", "24px", "Arial", "#FF0000", 125, 125, true);
        sixthDieLabel.regX = sixthDieLabel.getBounds().width * 0.5;
        sixthDieLabel.regY = sixthDieLabel.getBounds().height * 0.5;
        sixthDieLabel.x = 255;
        sixthDieLabel.y = 270;
        stage.addChild(sixthDieLabel);
        // added all of die images 1 through 6
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
        forthDie = new createjs.Bitmap("../../Assets/images/4.png");
        forthDie.regX = forthDie.getBounds().width * 0.1;
        forthDie.regY = forthDie.getBounds().height * 0.4;
        forthDie.x = 25;
        forthDie.y = 130;
        stage.addChild(forthDie);
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
        // rollButton on clikc function to generate a random number 
        rollButton.on("click", function () {
            var firstDieLabel = 1 + Math.floor(Math.random()) * 6;
            var secondDieLabel = 1 + Math.floor(Math.random()) * 6;
            var randomImage = 1 + Math.floor(Math.random()) * 6;
            // firstDieLabel.text = "1";
            // secondDieLabel.text = "2";
            // thirdDieLabel.text = "3";
            // forthDieLabel.text = "4";
            // fifthDieLabel.text = "5";
            // sixthDieLabel.text = "6";
        });
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map