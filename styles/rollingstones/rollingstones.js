function rollingstones(html_final){
    var loaded_document_edited = html_final;

    changeCSS("rollingstones.css")
    var h = document.createElement("C1"); // Create the H1 element 
    var t = document.createTextNode("Rolling Stone");
    h.classList.add("rolling"); // Create a text element 
    h.appendChild(t); // Append the text node to the H1 element 
 
    loaded_document_edited.appendChild(h); // Append the H1 element to the document body 
    




    return loaded_document_edited;
}