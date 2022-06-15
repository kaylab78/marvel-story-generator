var characterListEl = document.getElementById("character-list");
var errorMsgEl = document.getElementById("error-message");
var characterOneEl = document.getElementById("character-one");
var characterTwoEl = document.getElementById("character-two");
var firstImageEl = document.getElementById("first-image");
var secondImageEl = document.getElementById("second-image");
var choiceBtnsEl= document.getElementById("choice-btns");
var saveBtnEl = document.getElementById("quoteSv");
var characterOne;
var characterTwo;
var generatedQuote = document.querySelector("#generatedQuote");
var authorQuote = document.querySelector("#authorQuote");
var quoteSave = document.querySelector("#quoteSv");
var accept = document.querySelector("#acceptBtn");
var clearBtn = document.querySelector("#clear");
var remix = document.querySelector("#remix");
var quote;
var quoteAuthor;
var savedResults;
var charNames = document.querySelector("#char-names");
var persistentData = document.querySelector("#persistent-data");
var saveResultsData = {
    charOne: characterOne,
    charTwo: characterTwo,
    chosenQuote: quote,
    chosenAuthor: quoteAuthor
};

// When the user clicks on the Get Characters button, they are presented with two random characters from that series.
function getCharacters() {
    choiceBtnsEl.classList.remove("hidden");

    // The limit parameter in the API limits the number of results to 100 or less. The offset parameter skips that number of results and returns the remaining results. For example, if the limit=100 and the offset=1500, the results will start at 1500 and return 62 because there are a total of 1562 characters avaialble to choose from. In order to give the user the most character choices, we've implemented a Math.random to the offset parameter.  
    var characterStart = Math.floor(Math.random() * 1562);

    // Reference: Function md5() used to generate the hash needed to call the API.
    var apiUrl = "https://gateway.marvel.com/v1/public/characters?&limit=35&offset=" + characterStart + "&ts=2020&apikey=33006268417691bd580b5aafb863584a&hash=35194bc0e16921b8664b670b6ea93832";

    // Call the Marvel API
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
    // console.log(data.data.results);

    // Random number in the result index
    var firstRandom = Math.floor(Math.random() * characterArray.length);
    var secondRandom = Math.floor(Math.random() * characterArray.length);

    // Select two random characters from the result array
    characterOne = characterArray[firstRandom].name;
    characterTwo = characterArray[secondRandom].name;

    saveResultsData.charOne = characterOne;
    saveResultsData.charTwo = characterTwo;

    characterOneEl.textContent = characterOne;
    characterTwoEl.textContent = characterTwo;

    // Corresponding images for the characters
    var firstImage = characterArray[firstRandom].thumbnail.path + "/landscape_large.jpg";
    var secondImage = characterArray[secondRandom].thumbnail.path + "/landscape_large.jpg";

    firstImageEl.setAttribute("src", firstImage);
    secondImageEl.setAttribute("src", secondImage);
};

// gets two characters at random
characterListEl.addEventListener("click", function(){
    getCharacters();
    // allows to change characters before accepting
    remix.innerHTML = "Remix Characters";
    accept.classList.remove("hidden")
});

// accept button accepts the characters from characterListEl and generates a quote
accept.addEventListener("click", function(){
    quoteApi();
    characterListEl.classList.add("hidden");
    accept.classList.add("hidden");
});

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
    .then(response => {
        quoteSave.classList.remove("hidden")
        clearBtn.classList.remove("hidden")
        quote = response.content;
        quoteAuthor = response.originator.name;
        generatedQuote.innerHTML = "'" +quote + "'";
        authorQuote.innerHTML = "'" +quoteAuthor+ "'";
        saveResultsData.chosenQuote = quote;
        saveResultsData.chosenAuthor = quoteAuthor;
    })
	.catch(err => console.error(err));
};

// When the user clicks the Save button, the characters and quote are saved to a card at the bottom of the screen.

function saveSelection () {
    // console.log(savedResults,saveResultsData);
    savedResults.push(saveResultsData);
    // console.log(savedResults);
    localStorage.setItem("saved",JSON.stringify(savedResults));
    window.location.reload();
}

// var saveResults = function () {
//     localStorage.setItem("saved",JSON.stringify(saveResultsData));
// }

// Print character and quote selection to the page
function renderSelection () {
    // console.log(JSON.parse(localStorage.getItem("saved")));
    for (let i = 0; i < savedResults.length; i++) {
        var dataCard = document.createElement("div");
        dataCard.setAttribute("class", "cell small-8 small-offset-1 medium-6 medium-offset-1 large-3 large-offset-1");
        dataCard.innerHTML = "<p><strong>" + savedResults[i].charOne + " & " + savedResults[i].charTwo + "</strong><br>" + savedResults[i].chosenQuote + "<br>" + savedResults[i].chosenAuthor + "</p>";
        persistentData.appendChild(dataCard);
    };
}

// When the user refreshes the page, the previously saved cards stay on the page.
function loadHistory () {
    savedResults = JSON.parse(localStorage.getItem("saved")) || [];
}

saveBtnEl.addEventListener("click", saveSelection);
loadHistory ();
renderSelection ();

// reset function to clear content on page to start over
var reset =function () {
    generatedQuote.innerHTML ="";
    authorQuote.innerHTML="";
    quoteSave.classList.add("hidden");
    clearBtn.classList.add("hidden");
    choiceBtnsEl.classList.add("hidden");
    characterOneEl.textContent = "";
    characterTwoEl.textContent = "";
    firstImageEl.removeAttribute("src");
    secondImageEl.removeAttribute("src");
}

// clear button resets the content
clearBtn.addEventListener("click" , function(){
    reset();
    characterListEl.classList.remove("hidden");
    remix.innerHTML = "Get Characters";
})
