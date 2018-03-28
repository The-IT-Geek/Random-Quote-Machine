$(document).ready(function(){
  var randomQuote;
  var randomNum;
  var randomAuthor;
  getQuote();
  function getQuote(){
    
    var quotes = ["Never trust a computer you can't throw out a window", 'A computer must once beat me at chess, but it was no match for me at kick boxing', 'When people think about computer science, they think about people with pocket protectors and thick glasses who code all night', "Apple took the edge off the word 'computer'", "Learning by doing, peer-peer teaching and computer simulation are all part of the same equation"];
    var author = [" - Steve Wozniak", ' - Emo Phillips', ' - Marissa Mayer', ' - Steve Jobs', ' - Nicholas Negroponte'];
    
    randomNum = Math.floor((Math.random()*quotes.length));
    randomQuote = quotes[randomNum];
    randomAuthor = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
 }
    getQuote();
    
$("#newquote").on("click", function(){
   getQuote();
});
$('#tweet').on('click', function(){
  window.open('https://twitter.com/intent/tweet?text='+randomQuote+randomAuthor);
})

});
