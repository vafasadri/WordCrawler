let times_called = 0;
async function Run(){
const content = document.getElementsByTagName("html")[0].innerHTML
const {filter,words,delimiters} = await chrome.storage.local.get(["filter","words","delimiters"]);
let filter_reg = new RegExp(`[${filter}]+`,"g");
let WordSet = new Set(words);
let newWords;
while(newWords = filter_reg.exec(content)){
WordSet.add(newWords[0]);
}
chrome.storage.local.set({words: [...WordSet]});
}
Run();

