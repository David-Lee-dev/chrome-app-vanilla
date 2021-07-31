const quotes = [
  {
    quote : "There are better starters than me but I’m a strong finisher.",
    author : "Usain Bolt"
  },
  {
    quote : "Tough times never last, but tough people do.",
    author : "Rovert H. Schuller"
  },
  {
    quote : "But I know, somehow, that only when it is dark enough can you see the stars.",
    author : "Martin Luther King"
  },
  {
    quote : "All progress takes place outside the comfort zone.",
    author : "Michael Jhon Bobak"
  },
  {
    quote : "Success usually comes to those who are too busy to be looking for it.",
    author : "Henry David Thoreau"
  },
  {
    quote : "The way to get started is to quit talking and begin doing.",
    author : "Walt Disney"
  },
  {
    quote : "No great man ever complains of want of opportunity.",
    author : "Ralph Waldo Emerson"
  },
  {
    quote : "Do not accustom yourself to use big words for little matters.",
    author : "Samuel Johnson"
  },
  {
    quote : "Life is not fair, get used to it.",
    author : "Bill gates"
  },
  {
    quote : "When you go through hardships and decide not to surrender, that is strength.",
    author : "Arnold Schwarzenegger"
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
