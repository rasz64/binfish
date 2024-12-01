function addItem() {
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("input").value;

    if(document.getElementById("input").value === "list") {
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("input").value = "";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "visible";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("help").style.visibility = "hidden";
    }

    if(document.getElementById("input").value === "index") {
        location.href="https://nexs-hub.icu";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "oslp") {
        location.href="https://nexs-hub.icu/operation-stickman-long-path/";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "car-game") {
        location.href="https://nexs-hub.icu/car-game/car-game.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "big_city") {
        location.href="https://nexs-hub.icu/running-around/game.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "ball_clicker") {
        location.href="https://nexs-hub.icu/ball-clicker/game.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "snake") {
        location.href="https://nexs-hub.icu/snake/snake.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "pong") {
        location.href="https://nexs-hub.icu/pong/pong.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "map_explorer") {
        location.href="https://nexs-hub.icu/mapExplorer/map.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "dice") {
        location.href="https://nexs-hub.icu/dice/index.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "ascii-art") {
        location.href="https://nexs-hub.icu/ascii-art/ascii-art.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "donate") {
        location.href="https://nexs-hub.icu/donation/donation.html";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "github") {
        location.href="https://github.com/rasz64/nexs-hub";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "shellminal --feedback") {
        document.getElementById("feedback").style.visibility = "visible";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "clear") {
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "shellminal --update") {
        document.getElementById("update").style.visibility = "visible"
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";

        var number = 0;
        window.setInterval(function () {
        number = number + 1;
        document.getElementById("numberUpdate").innerHTML = + number;
        }, 225);
    }

    if(document.getElementById("input").value === "shellminal --update_stop") {
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "shellminal --password [ketchup99]") {
        location.href="https://nexs-hub.icu/admin-login/xq3RTuy98r267fV012sfWW23.html";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }
}

let plzField = document.getElementById("input");

plzField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    console.log("worked");
    addItem();
  }
});