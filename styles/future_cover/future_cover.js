function future_cover(html_final){
    var loaded_document_edited = html_final;

    changeCSS("future_cover.css");
    
    var cone_div = document.createElement("div");
    cone_div.classList.add('cone');
    loaded_document_edited.appendChild(cone_div);

    
    return loaded_document_edited;
}