const quotes = [
        {
            quotes: "When you go through hardships and decide not to surrender, that is strength.",
            autho: "Arnold Schwarzenegger",
        },
        {
            quotes: "It is kind of fun to do the impossible.",
            autho: "Walt Disney",
        },
        {
            quotes: "There are better starters than me but I’m a strong finisher.",
            autho: "Usain Bolt",
        },
        {
            quotes: "Tough times never last, but tough people do.",
            autho: "Robert H. Schuller",
        },
        {
            quotes: "I’ve failed over and over and over again in my life and that is why I succeed.",
            autho: "Michael Jordan",
        },
        {
            quotes: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
            autho: "Angelina Jolie",
        },
        {
            quotes: "But I know, somehow, that only when it is dark enough can you see the stars.",
            autho: "Martin Luther King, Jr",
        },
        {
            quotes: "Grind Hard, Shine Hard.",
            autho: "Dwayne Johnson",
        },
        {
            quotes: "I didn’t get there by wishing for it or hoping for it, but by working for it.",
            autho: "Estée Lauder",
        }
    ];

const viewQuote = document.querySelector("#quotes span:first-child");
const viewAutho = document.querySelector("#quotes span:last-child");

const randInt = Math.floor(Math.random() * quotes.length);

viewQuote.innerText = quotes[randInt].quotes;
viewAutho.innerText = `- ${quotes[randInt].autho}`;

