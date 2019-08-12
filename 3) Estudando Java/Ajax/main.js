var btn = document.querySelector("#btn");
var xml = new XMLHttpRequest;

xml.open("GET","http://www.omdbapi.com/?i=tt3896198&apikey=400c6159");
xml.send(null);

xml.onreadystatechange = function(){
    if(xml.readyState === 4){
        var lista = JSON.parse(xml.responseText);
        renderHTML(lista);
    }
}
function renderHTML(l){
var p = document.createElement("p");
var div = document.querySelector("#container")
p.innerHTML = l.Title;
div.appendChild(p);
}

