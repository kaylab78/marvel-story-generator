var characterListEl = document.getElementById("character-list");
var errorMsgEl = document.getElementById("error-message");
var characterOneEl = document.getElementById("character-one");
var characterTwoEl = document.getElementById("character-two");
var firstImageEl = document.getElementById("first-image");
var secondImageEl = document.getElementById("second-image");

// When the user clicks on a series from the dropdown menu, they are presented with two random characters from that series.
function getCharacters() {
    // The limit parameter in the API limits the number of results to 100 or less. The offset parameter skips that number of results and returns the remaining results. For example, if the limit=100 and the offset=1500, the results will start at 1500 and return 62 because there are a total of 1562 characters avaialble to choose from. In order to give the user the most character choices, we've implemented a Math.random to the offset parameter.  
    var characterStart = Math.floor(Math.random() * 1562);

    // Reference: Function md5() used to generate the hash needed to call the API.
    var apiUrl = "https://gateway.marvel.com/v1/public/characters?&limit=100&offset=" + characterStart + "&ts=2020&apikey=33006268417691bd580b5aafb863584a&hash=35194bc0e16921b8664b670b6ea93832";

    fetch(apiUrl)
        .then(function(response) {
            if (response.ok) {
                response.json()
                .then(function(data) {
                    randomizeCharacters(data);
                });
            }
            else {
                errorMsgEl.textContent = "Something went wrong. Try again.";
            }
        });
};

function randomizeCharacters (data) {
    var characterArray = data.data.results;
    console.log(data.data.results);

    var firstRandom = Math.floor(Math.random() * characterArray.length);
    var secondRandom = Math.floor(Math.random() * characterArray.length);

    var characterOne = characterArray[firstRandom].name;
    var characterTwo = characterArray[secondRandom].name;

    var firstImage = characterArray[firstRandom].thumbnail.path + "/landscape_large.jpg";
    var secondImage = characterArray[secondRandom].thumbnail.path + "/landscape_large.jpg";

    characterOneEl.textContent = characterOne;
    characterTwoEl.textContent = characterTwo;

    firstImageEl.setAttribute("src", firstImage);
    secondImageEl.setAttribute("src", secondImage);

    // Call function to get quote.
}

characterListEl.addEventListener("click", getCharacters);

// When the user clicks the Remix button, they are presented with two new random characters from the same series.

// When the user clicks the Accept button, a random quote appears on the screen.

// When the user clicks the Save button, the characters and quote are saved to a card at the bottom of the screen.

// When the user refreshes the page, the previously saved cards stay on the page.

// When the user clicks the Clear button, the previous results are removed from the page.