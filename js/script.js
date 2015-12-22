/**
 * Created by adam on 21/12/15.
 */
var ball, ball2;

window.addEventListener("gamepadconnected", function(e) {

    ball = document.getElementById("ball");
    ball.style.backgroundColor = "green";
    document.getElementsByTagName("p")[0].innerHTML = e.gamepad.id;

    ball2 = document.getElementById("ball2");
    ball2.style.backgroundColor = "yellow";
    document.getElementsByTagName("p")[1].innerHTML = e.gamepad.id;
    updateLoop();

});

function updateLoop() {

    var gp = navigator.getGamepads()[0];
    var left = (gp.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right = (gp.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

    ball.style.left = left + "px";
    ball.style.top =  right + "px";

    if (gp.buttons[0].pressed) {
        document.body.style.backgroundColor = "red";
    } else {
        document.body.style.backgroundColor = "white";
    }

    var gp2 = navigator.getGamepads()[1];
    var left = (gp2.axes[0] + 1) / 2 * (window.innerWidth - ball.offsetWidth);
    var right = (gp2.axes[1] + 1) / 2 * (window.innerHeight - ball.offsetHeight);

    ball2.style.left = left + "px";
    ball2.style.top =  right + "px";

    if (gp2.buttons[0].pressed) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "white";
    }

    requestAnimationFrame(updateLoop);

}