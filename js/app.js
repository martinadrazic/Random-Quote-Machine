$(document).ready(init);

function init(){ 
	getQuote();
	$("#next-quote").click(getQuote);
}

function getQuote () { 
	$.getJSON("http://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en", function(json) {

			var author;
			var text = json.quoteText.replace(/\;/g, ',');

			$(".quote").text('" ' + text + ' "');

			if (json.quoteAuthor === "") {
				author = "Unknown";
			} else {
				author = json.quoteAuthor;
			}

			$(".author").text("- " + author + " -");   
			$('#tweet').attr('href','https://twitter.com/intent/tweet?text=" ' + text + '" - ' + author); 
	 });
}

