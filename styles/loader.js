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