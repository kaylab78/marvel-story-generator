var characterListEl = document.getElementById("character-list");
var thorEl = document.getElementById("thor");

// When the user clicks on a series from the dropdown menu, they are presented with two random characters from that series.
function getCharacters() {
    // var characterSelection = event.target.value

    // Reference: Function md5() used to generate the hash needed to call the API.
    var apiUrl = "https://gateway.marvel.com/v1/public/characters?ts=2020&apikey=33006268417691bd580b5aafb863584a&hash=35194bc0e16921b8664b670b6ea93832";
    

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => console.log(data));
}

characterListEl.addEventListener("click", getCharacters);

// When the user clicks the Remix button, they are presented with two new random characters from the same series.

// When the user clicks the Accept button, a random quote appears on the screen.

// When the user clicks the Save button, the characters and quote are saved to a card at the bottom of the screen.

// When the user refreshes the page, the previously saved cards stay on the page.

// When the user clicks the Clear button, the previous results are removed from the page.