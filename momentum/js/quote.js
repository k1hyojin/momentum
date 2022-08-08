const quotes = [
"Happiness can be found even at the darkest of times if one only remembers to turn on the light.",
"Remember this. You have friends here. You are not alone.",
"Working hard is important. But there is something that matters even more believing in yourself.",
"All grown-up were once children, although few of them remember it.",
"Do not be afaid to give up the good to go for the great.",
"The fastest way to change yourself is to hang out with people who are already the way you want to be.",
"Some people dream of success, while other people get up every morning and make it happen.",
"One word frees us of all the weight and pain of life : That word is love.",
"If I lose confidence in myself, I have the universe against me.",
"The bitter failure will be the stepping stone to your future success."
]

const quote = document.querySelector("#quote");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote;