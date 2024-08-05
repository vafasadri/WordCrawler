chrome.storage.local.get(['words']).then((items) => {
    var _words = "";
    document.getElementById("counter").innerHTML = items.words.length;
    for(let i of items.words){
        _words += i + " ";
    }
const WordBank = _words;
document.getElementById("word_display").innerHTML = _words;
document.getElementById("downloadbutton").onclick = function(){   
    navigator.clipboard.writeText(_words);    
} 
});



  

