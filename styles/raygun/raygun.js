function raygun(html_final){
    var loaded_document_edited = html_final;

    changeCSS("raygun.css")
    

   var barcode_div = document.createElement("div");
    barcode_div.classList.add('barcode');
    loaded_document_edited.appendChild(barcode_div);



    var x = loaded_document_edited.getElementsByTagName("p");
    var i;
    for (i = 0; i < x.length/3; i++) {
        x[i].classList.add('first_part');
    }

    x = loaded_document_edited.getElementsByTagName("p");
    for (i = x.length/3; i < x.length/3*2; i++) {
        x[parseInt(i)].classList.add('second_part');
        if(parseInt(i) % 2 == 0){
            var create_circle = document.createElement("div");
            create_circle.classList.add('circle');
            x[parseInt(i)].parentNode.insertBefore(create_circle, x[parseInt(i)] );
        }
        
    }

    
    
    return loaded_document_edited;
}
