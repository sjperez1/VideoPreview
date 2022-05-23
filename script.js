console.log("page loaded...");

// put the mute part in the play function because you want it to mute and then play on onmouseover
function playVideo(element) {
    document.getElementById("sunsetVideo").muted = true;
    document.getElementById("sunsetVideo").play();
}

function pauseVideo(element) {
    document.getElementById("sunsetVideo").pause();
}


