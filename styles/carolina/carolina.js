function carolina(html_final){
    var loaded_document_edited = html_final;

    changeCSS("carolina.css")
    if (loaded_document_edited.getElementsByTagName("section")[1] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[1].getElementsByTagName("p")[0].classList.add('big')
    }


    return loaded_document_edited;
}