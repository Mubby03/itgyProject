const containerColors = ['#FFDAB9', '#ADD8E6', '#DDA0DD', '#FFE4B5', '#AFEEEE', '#E6E6FA'];
let currentColorIndex = 0;

document.addEventListener("DOMContentLoaded", function () {
    getRandomQuote();
});

function getRandomQuote() {
    fetch("https://type.fit/api/quotes?ref=hackernoon.com")
        .then(response => response.json())
        .then(data => {
            displayQuote(data);
            updateContainerColor();
        })
        .catch(error => console.error("Error fetching quotes:", error));
}

function displayQuote(quotes) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteText = quotes[randomIndex].text;
    let quoteAuthor = quotes[randomIndex].author || "Unknown";

    quoteAuthor = quoteAuthor.replace(/, type\.fit$/, '');

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");
    const tweetBtn = document.getElementById("tweet-btn");

    quoteElement.textContent = `"${quoteText}"`;
    authorElement.textContent = `- ${quoteAuthor}`;
    
    tweetBtn.href = `https://twitter.com/intent/tweet?text="${quoteText}" - ${quoteAuthor}`;
}

function updateContainerColor() {
    const container = document.querySelector('#quote');
    const container_a = document.querySelector('#author')

    const buttonC = document.querySelector('#new-quote-btn')
    const buttonD = document.querySelector('#tweet-btn')
    const buttonE = document.querySelector('#btnsz')
    
    container.style.color = containerColors[currentColorIndex];
    container_a.style.color = containerColors[currentColorIndex];
    buttonC.style.backgroundColor = containerColors[currentColorIndex];
    buttonD.style.backgroundColor = containerColors[currentColorIndex];
    buttonE.style.backgroundColor = containerColors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % containerColors.length;
}
function copyQuote() {
    const quoteText = document.getElementById("quote").innerText;
    const authorText = document.getElementById("author").innerText;
    const fullQuote = `"${quoteText}" - ${authorText}`;

    const textarea = document.createElement("textarea");
    textarea.value = fullQuote;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    alert("Quote copied to clipboard!");
  }