        document.addEventListener('keydown', function(event) {
            var player = document.getElementById('player');
            var currentLeft = parseInt(window.getComputedStyle(player).left);
            var currentTop = parseInt(window.getComputedStyle(player).top);

            switch(event.key) {
                case 'a': 
                    player.style.left = (currentLeft - 50) + 'px';
                    break;
                case 'd': 
                    player.style.left = (currentLeft + 50) + 'px';
                    break;
                case 'w': 
                    player.style.top = (currentTop - 50) + 'px' ;
                    break;
                case 's': 
                    player.style.top = (currentTop + 50) + 'px' ;
                    break;
            }

            if (isColliding(player, spaceship)) {
                window.location.href = 'game.html';
            }

            if (isColliding(player, crater1) || isColliding(player, crater2)) {
                sick(); healthDown();
            } else {
                unsick();
            }
        });

        function isColliding(div1, div2) {
            var rect1 = div1.getBoundingClientRect();
            var rect2 = div2.getBoundingClientRect();

            return !(rect1.right < rect2.left || 
                rect1.left > rect2.right || 
                rect1.bottom < rect2.top || 
                rect1.top > rect2.bottom);
        }

        function sick() {
            document.getElementById("player").style.color = "green"; 
        }

        function unsick() {
            document.getElementById("player").style.color = "black"; 
        }

        function healthDown() {
            document.getElementById("HP").innerHTML - 10;
        }
