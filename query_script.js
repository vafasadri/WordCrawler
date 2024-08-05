
document.getElementById("btnFind").onclick = function(){

    chrome.storage.local.get(['words']).then((items) => {
    let filter = "";
    for(const c of document.getElementsByTagName("input")){
        filter += c.value;
    }
    const filter_reg = new RegExp(`[${filter}]+`,"g");
    console.log(filter_reg);

    const words = items.words.filter((i) => {
        filter_reg.test(i);
    return filter_reg.dotAll;
     } ).join(" ");
    document.getElementById("txtResult").innerHTML = words    
    });
}
for (const element of document.getElementsByTagName("input")) {
    element.oninput = function(){
        if(this.value.length == this.maxLength){         
            this.nextElementSibling.focus();
        }
    }
}


  

