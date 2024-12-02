function addItem() { //update3
    var newItem = document.createElement("div");
    newItem.innerHTML = document.getElementById("input").value;

    if(document.getElementById("input").value === "list") {
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("input").value = "";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "visible";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
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
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "clear") {
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "shellminal --update") {
        document.getElementById("update").style.visibility = "visible";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
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
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd Documents") {
        document.getElementById("doc").style.visibility = "visible";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd list") {
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "visible";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd Images") {
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "visible";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("doc").style.visibility === "visible") {
        if(document.getElementById("input").value === "run aboutShellminal.txt") {
            location.href="https://github.com/rasz64/nexs-hub/blob/main/Shellminal/aboutShellminal.txt";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("images").style.visibility) {
        if(document.getElementById("input").value === "run bobthebuilder.png") {
            location.href="https://i.postimg.cc/hjLJG5M4/bobthebuilder.png";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("images").style.visibility === "visible") {
        if(document.getElementById("input").value === "run tux.png") {
            location.href="https://i.postimg.cc/dtbL8FXQ/tux.png";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("images").style.visibility === "visible") {
        if(document.getElementById("input").value === "run powershelllogo.png") {
            location.href="https://i.postimg.cc/cLTCP3CC/powershelllogo.png";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("input").value === "cd Audio") {
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "visible";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("songs").style.visibility === "visible") {
        if(document.getElementById("input").value === "run gaf.mp3") {
            location.href="http://nexs-hub.icu/Shellminal/gaf.mp3";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("natureSounds").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("input").value === "cd Audio/Songs") {
        document.getElementById("songs").style.visibility = "visible";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("songs").style.visibility === "visible") {
        if(document.getElementById("input").value === "run esmi.mp3") {
            location.href="http://nexs-hub.icu/Shellminal/esmi.mp3";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("natureSounds").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("audio").style.visibility === "visible") {
        if(document.getElementById("input").value === "cd Songs") {
            document.getElementById("songs").style.visibility = "visible";
            document.getElementById("natureSounds").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("audio").style.visibility === "visible") {
        if(document.getElementById("input").value === "cd Nature Sounds") {
            document.getElementById("natureSounds").style.visibility = "visible";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("natureSounds").style.visibility === "visible") {
        if(document.getElementById("input").value === "run bird-chirp.mp3") {
            location.href="http://nexs-hub.icu/Shellminal/bird-chirp.mp3";
            document.getElementById("natureSounds").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("input").value === "cd Audio/Nature Sounds") {
        document.getElementById("natureSounds").style.visibility = "visible";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("natureSounds").style.visibility === "visible") {
        if(document.getElementById("input").value === "run jungle-nature.mp3") {
            location.href="http://nexs-hub.icu/Shellminal/jungle-nature.mp3";
            document.getElementById("natureSounds").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("natureSounds").style.visibility === "visible") {
        if(document.getElementById("input").value === "run sea-waves.mp3") {
            location.href="http://nexs-hub.icu/Shellminal/sea-waves.mp3";
            document.getElementById("natureSounds").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("docList").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("input").value === "cd Audio/Nature Sounds $$ run sea-waves.mp3") {
        location.href="http://nexs-hub.icu/Shellminal/sea-waves.mp3";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd Audio/Nature Sounds $$ run jungle-nature.mp3") {
        location.href="http://nexs-hub.icu/Shellminal/jungle-nature.mp3";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd Audio/Nature Sounds $$ run bird-chirp.mp3") {
        location.href="http://nexs-hub.icu/Shellminal/bird-chirp.mp3";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd Audio/Songs $$ run gaf.mp3") {
        location.href="http://nexs-hub.icu/Shellminal/gaf.mp3";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "cd Audio/Songs $$ run esmi.mp3") {
        location.href="http://nexs-hub.icu/Shellminal/esmi.mp3";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("input").value === "admin $$ --logout") {
        document.getElementById("user").innerHTML = "C:\\Users\\root>";
        document.getElementById("natureSounds").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("docList").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("user").innerText === "C:\\Users\\admin>") {
        if(document.getElementById("input").value === "run adminpage") {
            location.href="https://nexs-hub.icu/admin-login/xq3RTuy98r267fV012sfWW23.html";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("input").value === "admin $$ --login [ketchup99]") {
        document.getElementById("user").innerHTML = "C:\\Users\\admin>"
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("user").innerText === "C:\\Users\\admin>") {
        if(document.getElementById("input").value === "snakeSkola") {
            location.href="https://nexs-hub.icu/snakeSkola.html";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("test").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }

    if(document.getElementById("input").value === "admin $$ --login [test]") {
        document.getElementById("user").innerHTML = "C:\\Users\\test>";
        document.getElementById("update").style.visibility = "hidden";
        document.getElementById("test").style.visibility = "hidden";
        document.getElementById("songs").style.visibility = "hidden";
        document.getElementById("images").style.visibility = "hidden";
        document.getElementById("doc").style.visibility = "hidden";
        document.getElementById("audio").style.visibility = "hidden";
        document.getElementById("feedback").style.visibility = "hidden";
        document.getElementById("listCMD").style.visibility = "hidden";
        document.getElementById("list").style.visibility = "hidden";
        document.getElementById("input").value = "";
    }

    if(document.getElementById("user").innerText === "C:\\Users\\test>") {
        if(document.getElementById("input").value === "test") {
            document.getElementById("test").style.visibility = "visible";
            document.getElementById("update").style.visibility = "hidden";
            document.getElementById("songs").style.visibility = "hidden";
            document.getElementById("images").style.visibility = "hidden";
            document.getElementById("doc").style.visibility = "hidden";
            document.getElementById("audio").style.visibility = "hidden";
            document.getElementById("feedback").style.visibility = "hidden";
            document.getElementById("listCMD").style.visibility = "hidden";
            document.getElementById("list").style.visibility = "hidden";
            document.getElementById("input").value = "";
        }
    }
}

let plzField = document.getElementById("input");
plzField.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    console.log("worked");
    addItem();
  }
});

function focus() {
    document.getElementById("input").focus();
}
