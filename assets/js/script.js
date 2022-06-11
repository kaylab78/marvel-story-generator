var characterListEl = document.getElementById("character-list");
var characterOneEl = document.getElementById("character-one");
var characterTwoEl = document.getElementById("character-two");

// When the user clicks on a series from the dropdown menu, they are presented with two random characters from that series.
function getCharacters() {

    // Reference: Function md5() used to generate the hash needed to call the API.
    var apiUrl = "https://gateway.marvel.com/v1/public/characters?ts=2020&apikey=33006268417691bd580b5aafb863584a&hash=35194bc0e16921b8664b670b6ea93832";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    randomizeCharacters(data);
                });
            }
            else {
                // Alerts not allowed in the project. Change this.
                alert("There was a problem with your request")
            }
        });
};

function randomizeCharacters (data) {
    var characterArray = data.data.results;

    var firstRandom = Math.floor(Math.random() * characterArray.length);
    var secondRandom = Math.floor(Math.random() * characterArray.length);

    var characterOne = characterArray[firstRandom].name;
    var characterTwo = characterArray[secondRandom].name;

    characterOneEl.textContent = characterOne;
    characterTwoEl.textContent = characterTwo;
}

characterListEl.addEventListener("click", getCharacters);

// When the user clicks the Remix button, they are presented with two new random characters from the same series.

// When the user clicks the Accept button, a random quote appears on the screen.

// When the user clicks the Save button, the characters and quote are saved to a card at the bottom of the screen.

// When the user refreshes the page, the previously saved cards stay on the page.

// When the user clicks the Clear button, the previous results are removed from the page.