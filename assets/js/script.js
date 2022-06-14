var characterListEl = document.getElementById("character-list");
var errorMsgEl = document.getElementById("error-message");
var characterOneEl = document.getElementById("character-one");
var characterTwoEl = document.getElementById("character-two");
var firstImageEl = document.getElementById("first-image");
var secondImageEl = document.getElementById("second-image");
var choiceBtnsEl= document.getElementById("choice-btns");
var saveBtnEl = document.getElementById("quoteSv")
var characterOne;
var characterTwo;

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

    characterOne = characterArray[firstRandom].name;
    characterTwo = characterArray[secondRandom].name;

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
var generatedQuote = document.querySelector("#generatedQuote");
var authorQuote = document.querySelector("#authorQuote");
var quoteSave = document.querySelector("#quoteSv");
var accept = document.querySelector("#acceptBtn");

accept.addEventListener("click", function(){
    quoteApi();
})
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4f9f7df054msh309ee5f762d1c9ep14b973jsnebf9ab04b1dd',
		'X-RapidAPI-Host': 'quotes15.p.rapidapi.com'
	}
};
var quoteApi = function() {
    fetch('https://quotes15.p.rapidapi.com/quotes/random/', options)
	.then(response => response.json())
	// .then(response => console.log(response))
    .then(response => {
        var quote = response.content;
        var quoteAuthor = response.originator.name;
        generatedQuote.innerHTML = "'" +quote + "'";
        authorQuote.innerHTML = "'" +quoteAuthor+ "'";
    })
	.catch(err => console.error(err));
}
// When the user clicks the Save button, the characters and quote are saved to a card at the bottom of the screen.

var savedResults = [];
var saveData = document.querySelector("#save-info");
var charNames = document.querySelector("#char-names");
var acceptedQuote = document.querySelector("#accepted-quote");
var persistentData = document.querySelector("#persistent-data")

function saveSelection () {
    localStorage.setItem("saved-one", JSON.stringify(characterOne));
    localStorage.setItem("saved-two", JSON.stringify(characterTwo));
    localStorage.setItem("saved-quote", JSON.stringify(generatedQuote));
    localStorage.setItem("saved-author", JSON.stringify(authorQuote));
}

function renderSelection () {
    var dataCard = document.createElement("div)")
    dataCard.setAttribute("class", "cell small-8 small-offset-1 medium-6 medium-offset-1 large-3 large-offset-1");
    dataCard.innerHTML = "<p><strong>" + characterOne + ", " + characterTwo + "</strong><br>" + generatedQuote + "<br>" + authorQuote + "</p>"
    persistentData.appendChild(dataCard);
}

// savedResults.addEventListener("click", saveSelection);

// var savedResultsData = {
//     characterOne,
//     characterTwo,
//     generatedQuote,
// }

// var saveResults = function () {
//     localStorage.setItem("saved-one",savedResultsData)
// }

saveBtnEl.addEventListener("click", saveSelection);

//$("#quoteSv").on("click",function() {
    //localStorage.setItem(characterOneEl, characterTwoEl, generatedQuote)})

    //$("character-one").val(localStorage.getItem(characterOneEl));
    //$("character-two").val(localStorage.getItem(characterTwoEl));
    //$("generatedQuote").val(localStorage.getItem(generatedQuote));

// When the user refreshes the page, the previously saved cards stay on the page.
function loadHistory () {
    var savedOne = localStorage.getItem("saved-one");
    var savedTwo = localStorage.getItem("saved-two");
    var savedQuote = localStorage.getItem("saved-quote");
    var savedAuthor = localStorage.getItem("saved-author");
}

loadHistory ();

// When the user clicks the Clear button, the previous results are removed from the page.