document.addEventListener('DOMContentLoaded', () => {
    
    const fruitsArray = [
        {
            name : 'pineapple',
            src : 'images/pineapple.png'
        },
        {
            name : 'strawberry',
            src : 'images/strawberry.png'
        },
        {
            name : 'banana',
            src : 'images/banana.png'
        },
        {
            name : 'apple',
            src : 'images/apple.png'
        },
        {
            name : 'cherry',
            src : 'images/cherry.png'
        },
        {
            name : 'pear',
            src : 'images/pear.png'
        },
        {
            name : 'grapes',
            src : 'images/grapes.png'
        },
        {
            name : 'orange',
            src : 'images/orange.png'
        },
        {
            name : 'lemon',
            src : 'images/lemon.png'
        },
        {
            name : 'plum',
            src : 'images/plum.png'
        },
        {
            name : 'pineapple',
            src : 'images/pineapple.png'
        },
        {
            name : 'strawberry',
            src : 'images/strawberry.png'
        },
        {
            name : 'banana',
            src : 'images/banana.png'
        },
        {
            name : 'apple',
            src : 'images/apple.png'
        },
        {
            name : 'cherry',
            src : 'images/cherry.png'
        },
        {
            name : 'pear',
            src : 'images/pear.png'
        },
        {
            name : 'grapes',
            src : 'images/grapes.png'
        },
        {
            name : 'orange',
            src : 'images/orange.png'
        },
        {
            name : 'lemon',
            src : 'images/lemon.png'
        },
        {
            name : 'plum',
            src : 'images/plum.png'
        }
    ];
    
//this function shuffles the values in an array
function shuffle(array) {
    let counter = array.length;  
    while (counter > 0) {
      let index = Math.floor(Math.random() * counter);
      counter--;
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }  
    return array;
}

let shuffledFruitsArray = shuffle(fruitsArray);

//Ania's sort function
    // fruitsArray.sort(() => 0.5 - Math.random());

    const board = document.getElementById('board');   

    //creates a blank board
    //each card is given a default imagine, a unique ID, and is appended to the board
    function createBoard () {
        for (let i = 0; i < shuffledFruitsArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/questionmark.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', handleFlip);
            board.appendChild(card);
        }
    };

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsPaired = [];
    let score = document.querySelector('#score');

    //This function invoked once we have 2 cards chosen
    function checkForMatch () {
        let allCards = document.querySelectorAll('img');
        let firstCardId = cardsChosenId[0];
        let secondCardId = cardsChosenId[1];

        //CAN'T CHOOSE SAME CARD
        //reset questionmark images and clear arrays
        if (firstCardId === secondCardId) {
            alert('You cannot choose the same card!');
            allCards[firstCardId].setAttribute('src', 'images/questionmark.png');
            allCards[secondCardId].setAttribute('src', 'images/questionmark.png');
            cardsChosen = [];
            cardsChosenId = [];
        }

        //MATCH FOUND
        //set checkmark images, add won cards to new array, and reset cards chosen arrays
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            allCards[firstCardId].setAttribute('src', 'images/checkmark.jpg');
            allCards[secondCardId].setAttribute('src', 'images/checkmark.jpg');
            allCards[firstCardId].removeEventListener('click', handleFlip);
            allCards[secondCardId].removeEventListener('click', handleFlip);
            cardsPaired.push(cardsChosen[0], cardsChosen[1]);
            score.innerText = cardsPaired.length; 
            if (cardsPaired.length === allCards.length) {
                score.innerText = 'Congratulations! You matched all the fruits!';
                // board.setAttribute('src', 'images/You-Won.png');
                alert('*** YOU WON! ***')
            }           
            console.log(score.innerText, allCards.length);
            cardsChosen = [];
            cardsChosenId = [];
        }

        //NOT A MATCH
        //reset questionmark image, and clear arrays
        else {
            // alert('Sorry, that is not a match!');
            allCards[firstCardId].setAttribute('src', 'images/questionmark.png');
            allCards[secondCardId].setAttribute('src', 'images/questionmark.png');
            cardsChosen = [];
            cardsChosenId = [];
        }

    }


    //flip card function
    //push fruit name and fruit ID into different holding cell arrays
    function handleFlip (e) {
        let cardId = e.target.getAttribute('data-id');
        cardsChosen.push(shuffledFruitsArray[cardId].name);
        cardsChosenId.push(cardId);
        e.target.setAttribute('src', shuffledFruitsArray[cardId].src);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }

        console.log(cardId);
        console.log(cardsChosen);
        console.log(cardsChosenId);
    }


    createBoard ();

});