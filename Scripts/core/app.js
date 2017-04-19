/* File name: app.js */
/* Author's name: Jesse Cannon */
/* Student ID: 200348532 */
/* Web site name: http://comp1073-w2017-finalexam-200348532.azurewebsites.net//index.html */
/* File description: JavaScript page for final exam */

// IIFE - Immediately Invoked Function Expression
(function () {
    var canvas;
    var stage;
    var firstDieLabel;
    var secondDieLabel;
    var rollButton;


    function Start() {
        canvas = document.getElementById("canvas");

        Main(); // call the main function
    }
    function Update(event) {
    }
    function Main() {
    }
    // window binding events
    window.onload = Start;
})();
//# sourceMappingURL=app.js.map