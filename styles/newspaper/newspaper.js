function newspaper(html_final){
    var loaded_document_edited = html_final;

    changeCSS("newspaper.css")
    //loaded_document_edited.getElementsByTagName("section")[3].getElementsByTagName("p")[0].classList.add('style_3');

    return loaded_document_edited;
}