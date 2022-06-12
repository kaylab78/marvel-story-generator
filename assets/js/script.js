var generatedQuote = document.querySelector("#generatedQuote");
var authorQuote = document.querySelector("#authorQuote")
var quoteSave = document.querySelector("#quoteSv");

quoteSave.addEventListener("click", function(){
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
        generatedQuote.innerHTML = "'" +quote + "'"
        authorQuote.innerHTML = "'" +quoteAuthor+"'"
    })
	.catch(err => console.error(err));
}
