var html_active = undefined,  // devono essere globali, vengono richiamte da tutte le altre funzioni
    style_active = undefined,
    cover_active = undefined,
    issue_active = undefined;
var metadata = {};//oggetto js contiene tutti i metadati
var audio = new Audio();
var mood = "future.css";

const issues_structure = {
    literature: ['./pagesToLoad/children.html', './pagesToLoad/inforgraphics.html', './pagesToLoad/theGuardian_article.html'],
    digital: ['./pagesToLoad/medium_hp_article.html', './pagesToLoad/Dataviz.html', './pagesToLoad/Illus.html'],
    Rodar100: ['./pagesToLoad/corriere_articolo.html', './pagesToLoad/ny_article.html', './pagesToLoad/Rodari_internazionale.html']
}

function toggleUl(id){
    var element = document.getElementById(id);  
    if (element.style.display === "none"){
        element.style.display = "block";
    }else{
        element.style.display = "none";
    } 
}


function highlight(id){
    document.getElementById(id).style = "background: yellow";
    if (style_active !== undefined && style_active.includes("future")){
        document.getElementById("box").scroll(0,document.getElementById(id).offsetTop - document.getElementById("my_navbar").clientHeight - 35);
    }else{
        window.scroll(0,document.getElementById(id).offsetTop - document.getElementById("my_navbar").clientHeight);
    }
    setTimeout(function (){document.getElementById(id).style = "";}, 3000);
}



function toggleMetadata(id){
    // generateMetadataHTML(id);

    var x= document.getElementById(id+"_toggle");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

   var y = document.getElementById("meta_header_"+id);
    if (y.style.backgroundColor === "lightgrey"){
        y.style.backgroundColor = "white";
    }else{
        y.style.backgroundColor = "lightgrey";
    }          
}

function show() {
    var x = document.getElementsByClassName("item3")[0];
    
    if (x.style.width === "0%") {
        // x.style.display = "block";
        x.style.width = "40%";
    } else {
        x.style.width = "0%";
    }
}

function changeCSS(cssFile) {

    var oldlink = document.getElementsByTagName("link")[1];

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "./styles/"+cssFile.split(".")[0]+"/"+cssFile);
    //fin qui ho solo creato il link//

    if (document.getElementsByTagName("head")[0].getElementsByTagName("link")[1] === undefined){
        document.getElementsByTagName("head")[0].appendChild(newlink);        
    }else{
        document.getElementsByTagName("head")[0].replaceChild(newlink, oldlink);
    }
}

function resetCSS(){
    if(document.getElementsByTagName("link")[1] !== undefined){
        document.getElementsByTagName("head")[0].removeChild(document.getElementsByTagName("link")[1]);
    }
}