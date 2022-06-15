var characterListEl = document.getElementById("character-list");
var errorMsgEl = document.getElementById("error-message");
var characterOneEl = document.getElementById("character-one");
var characterTwoEl = document.getElementById("character-two");
var firstImageEl = document.getElementById("first-image");
var secondImageEl = document.getElementById("second-image");
var choiceBtnsEl = document.getElementById("choice-btns")
var generatedQuote = document.querySelector("#generatedQuote");
var authorQuote = document.querySelector("#authorQuote")
var quoteSave = document.querySelector("#quoteSv");
var accept = document.querySelector("#acceptBtn");
var clearBtn = document.querySelector("#clear")
var remix = document.querySelector("#remix")

var quote;
var quoteAuthor;

// When the user clicks on a series from the dropdown menu, they are presented with two random characters from that series.
function getCharacters() {
    choiceBtnsEl.classList.remove("hidden")
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


// 
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
        // remove class hidden from save/clear
        quoteSave.classList.remove("hidden")
        clearBtn.classList.remove("hidden")
        quote = response.content;
        quoteAuthor = response.originator.name;
        generatedQuote.innerHTML = "'" +quote + "'"
        authorQuote.innerHTML = "'" +quoteAuthor+"'"
    })
	.catch(err => console.error(err));
}
// reset function to clear content on page to start over
var reset =function () {
    generatedQuote.innerHTML ="";
    authorQuote.innerHTML="";
    quoteSave.classList.add("hidden");
    clearBtn.classList.add("hidden");
    choiceBtnsEl.classList.add("hidden");
    characterOneEl.textContent = "";
    characterTwoEl.textContent = "";
    firstImageEl.removeAttribute("src")
    secondImageEl.removeAttribute("src")
}
// gets two characters at random
characterListEl.addEventListener("click", function(){
    getCharacters();
    // allows to change characters before accepting
    remix.innerHTML = "Remix Characters"
    accept.classList.remove("hidden")
})

// accept button accepts the characters from characterListEl and generates a quote
accept.addEventListener("click", function(){
    quoteApi();
    characterListEl.classList.add("hidden")
    accept.classList.add("hidden")
})
// clear button resets the content
clearBtn.addEventListener("click" , function(){
    reset();
    characterListEl.classList.remove("hidden")
    remix.innerHTML = "Get Characters"
    
    
    
})
