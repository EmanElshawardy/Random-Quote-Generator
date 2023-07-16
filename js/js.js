var quotes = [
    {
        author: "H. Jackson Brown",
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    },
    {
        author: "Marilyn Monroe",
        quote: "Im selfish, impatient and a little insecure.I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.",
    },
    {
        author: "Albert Einstein",
        quote: "Two things are infinite: the universe and human stupidity; and Im not sure about the universe.",
    },
    {
        author: "Maya Angelou",
        quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
    },
    {
        author: "J.K. Rowling",
        quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    },
    {
        author: "Dr. Seuss",
        quote: "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    },
    {
        author: "Albert Camus",
        quote: "Don't walk in front of me… I may not follow Don't walk behind me… I may not lead Walk beside me… just be my friend",
    },
    {
        author: "Bernard M. Baruch",
        quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    },
];


var quote = document.getElementById('quote');
var author = document.getElementById('author');

function getQuote() {
    var random = Math.trunc(Math.random() * quotes.length);
    quote.textContent = quotes[random].quote;
    author.textContent = " ― " + quotes[random].author;
}