document.addEventListener("DOMContentLoaded", function () {
    getRandomQuote();
});

function getRandomQuote() {
    fetch("https://type.fit/api/quotes?ref=hackernoon.com")
        .then(response => response.json())
        .then(data => {
            displayQuote(data);
        })
        .catch(error => console.error("Error fetching quotes:", error));
}

function displayQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex].text;
    const quoteAuthor = quotes[randomIndex].author || "Unknown";

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const tweetBtn = document.getElementById("tweet-btn");

    quoteElement.textContent = `"${quoteText}"`;
    authorElement.textContent = `- ${quoteAuthor}`;
    
    tweetBtn.href = `https://twitter.com/intent/tweet?text="${quoteText}" - ${quoteAuthor}`;
}
