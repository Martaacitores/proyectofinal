<script>
    var imageLinks = [
        "https://via.placeholder.com/100", // Enlace a la primera imagen
        "https://via.placeholder.com/100", // Enlace a la segunda imagen
        "https://via.placeholder.com/100", // Enlace a la tercera imagen
        "https://via.placeholder.com/100", // Enlace a la cuarta imagen
        "https://via.placeholder.com/100", // Enlace a la quinta imagen
        "https://via.placeholder.com/100"  // Enlace a la sexta imagen
    ];

    
    var cardLinks = imageLinks.concat(imageLinks);

    
    cardLinks = shuffleArray(cardLinks);

    
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    
    var gameBoard = document.getElementById('gameBoard');
    cardLinks.forEach(function(link) {
        var card = document.createElement('div');
        card.className = 'card';
        var img = document.createElement('img');
        img.src = link;
        card.appendChild(img);
        gameBoard.appendChild(card);
        card.addEventListener('click', flipCard);
    });

    var flippedCards = [];

    
    function flipCard() {
        if (flippedCards.length < 2 && !this.classList.contains('flipped')) {
            this.classList.add('flipped');
            flippedCards.push(this);
        }
        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 1000);
        }
    }

    
    function checkMatch() {
        if (flippedCards[0].querySelector('img').src === flippedCards[1].querySelector('img').src) {
            flippedCards.forEach(function(card) {
                card.removeEventListener('click', flipCard);
            });
        } else {
            flippedCards.forEach(function(card) {
                card.classList.remove('flipped');
            });
        }
        flippedCards = [];
    }

    
    setTimeout(function() {
        var cards = document.querySelectorAll('.card');
        cards.forEach(function(card) {
            card.classList.add('flipped');
        });
        setTimeout(function() {
            cards.forEach(function(card) {
                card.classList.remove('flipped');
            });
        }, 3000); 
    }, 1000); 
</script>

