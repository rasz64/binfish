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

            if (isColliding(player, house1)) {
                window.location.href = 'house1.html';
            }

            if (isColliding(player, house2)) {
                window.location.href = 'house2.html';
            }

            if (isColliding(player, house3)) {
                window.location.href = 'house3.html';
            }

            if (isColliding(player, house4)) {
                window.location.href = 'house4.html';
            }

            if (isColliding(player, spaceship)) {
                window.location.href = 'mars.html';
            }

            if (isColliding(player, walmartdoor)) {
                window.location.href = 'walmart.html';
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

        function goBack() {
            window.history.back();
        }

        function healthDown() {
            document.getElementById("HP").innerHTML - 10;
        }
