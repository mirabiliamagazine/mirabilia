function raygun(html_final){
    var loaded_document_edited = html_final;

    changeCSS("raygun.css")
    //loaded_document_edited.getElementsByTagName("section")[2].getElementsByTagName("p")[0].style = "color:red";
    //loaded_document_edited.getElementsByTagName("section")[3].classList.add('dingbats_font');

    /*if (loaded_document_edited.getElementsByTagName("section")[1] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[1].classList.add('right')
    }

    /*if (loaded_document_edited.getElementsByTagName("section")[1].getElementsByTagName("p")[0] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[1].getElementsByTagName("p")[0].classList.add('big')
    }

    if (loaded_document_edited.getElementsByTagName("section")[2] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[2].classList.add('right')
    }

    if (loaded_document_edited.getElementsByTagName("section")[3] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[3].classList.add('right')
    }

    if (loaded_document_edited.getElementsByTagName("p")[3] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[3].classList.add('right')
    }
    
    if (loaded_document_edited.getElementsByTagName("p")[4] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[4].classList.add('right')
    }

    if (loaded_document_edited.getElementsByTagName("p")[5] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[5].classList.add('right')
    }

    if (loaded_document_edited.getElementsByTagName("p")[10] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[10].classList.add('rotate_p')
    }
    
    if (loaded_document_edited.getElementsByTagName("p")[15] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[15].classList.add('rotate_p')
    }

    if (loaded_document_edited.getElementsByTagName("p")[16] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[16].classList.add('rotate_p')
    }

   if (loaded_document_edited.getElementsByTagName("section")[16] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[16].classList.add('make_skew')
    }
    
   if (loaded_document_edited.getElementsByTagName("section")[17] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[17].classList.add('make_skew')
    }
    
   if (loaded_document_edited.getElementsByTagName("p")[26] != undefined) {
        loaded_document_edited.getElementsByTagName("p")[26].classList.add('make_skew')
    }

    /*if (loaded_document_edited.getElementsByTagName("section")[9] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[9].classList.add('rotate')
    }

    if (loaded_document_edited.getElementsByTagName("section")[16] != undefined) {
        loaded_document_edited.getElementsByTagName("section")[16].classList.add('rotate')
    }*/
    
    // if (loaded_document_edited.getElementsByTagName("p")[3] != undefined) {
    //     var p_special = loaded_document_edited.getElementsByTagName("p")[3].innerHTML;
    //     loaded_document_edited.getElementsByTagName("p")[3].innerHTML = 
    //     p_special.substring(0,p_special.indexOf(".")) + "<span class='line-height_different'>" + 
    //     p_special.substring(p_special.indexOf("."),p_special.length) + "</span>";
    // }

    if (loaded_document_edited.getElementsByTagName("p")[5] != undefined){
        var p_special = loaded_document_edited.getElementsByTagName("p")[5].innerHTML;
        loaded_document_edited.getElementsByTagName("p")[5].innerHTML = 
        p_special.substring(0,p_special.indexOf(".")) + "<span class='line-height_different'>" + 
        p_special.substring(p_special.indexOf("."),p_special.length) + "</span>";
    }

    if (loaded_document_edited.getElementsByTagName("p")[12] != undefined){
        var p_special = loaded_document_edited.getElementsByTagName("p")[12].innerHTML;
        loaded_document_edited.getElementsByTagName("p")[12].innerHTML = 
        p_special.substring(0,p_special.indexOf(".")) + "<span class='line-height_different'>" + 
        p_special.substring(p_special.indexOf("."),p_special.length) + "</span>";
    }
    if (loaded_document_edited.getElementsByTagName("p")[16] != undefined){
        var p_special = loaded_document_edited.getElementsByTagName("p")[16].innerHTML;
        loaded_document_edited.getElementsByTagName("p")[16].innerHTML = 
        p_special.substring(0,p_special.indexOf(".")) + "<span class='line-height_different'>" + 
        p_special.substring(p_special.indexOf("."),p_special.length) + "</span>";
    }

    if (loaded_document_edited.getElementsByTagName("p")[3] != undefined){
        // loaded_document_edited.getElementsByTagName("p")[3].style = "color: purple"

        var p_special = loaded_document_edited.getElementsByTagName("p")[3].innerHTML;
        var first_part = p_special.substring(0,p_special.indexOf(".")+1);
        var second_part = p_special.substring(p_special.indexOf(".")+1,p_special.length);
        loaded_document_edited.getElementsByTagName("p")[3].innerHTML = 
        first_part + "<span class='line-height_different'>" + 
        second_part.substring(0,second_part.indexOf(".")+1) + "</span>" 
        + second_part.substring(second_part.indexOf(".")+1, second_part.length);
    }

    if (loaded_document_edited.getElementsByTagName("p")[1] != undefined){
        // loaded_document_edited.getElementsByTagName("p")[3].style = "color: purple"

        var p_special = loaded_document_edited.getElementsByTagName("p")[1].innerHTML;
        var first_part = p_special.substring(0,p_special.indexOf(".")+1);
        var second_part = p_special.substring(p_special.indexOf(".")+1,p_special.length);
        loaded_document_edited.getElementsByTagName("p")[1].innerHTML = 
        first_part + "<span class='different_line'>" + 
        second_part.substring(0,second_part.indexOf(".")+1) + "</span>" 
        + second_part.substring(second_part.indexOf(".")+1, second_part.length);
    }
    

    
    var barcode_div = document.createElement("div");
    barcode_div.classList.add('barcode');
    loaded_document_edited.appendChild(barcode_div);

    var barcode2_div = document.createElement("div");
    barcode2_div.classList.add('barcode_2');
    loaded_document_edited.appendChild(barcode2_div);

    var x = loaded_document_edited.getElementsByTagName("p");
    var i;
    for (i = 0; i < x.length/3; i++) {
        x[i].classList.add('first_half');
    }

    x = loaded_document_edited.getElementsByTagName("p");
    for (i = x.length/3; i < x.length/3*2; i++) {
        x[parseInt(i)].classList.add('second_half');
        if(parseInt(i) % 2 == 0){
            var create_circle = document.createElement("div");
            create_circle.classList.add('circle');
            x[parseInt(i)].parentNode.insertBefore(create_circle, x[parseInt(i)] );
        }
        
    }

    /*x = loaded_document_edited.getElementsByTagName("section");
    for (i = 0; i < x.length/2; i++) {
        x[i].classList.add('first_half');
    }

    x = loaded_document_edited.getElementsByTagName("section");
    for (i = x.length/2; i < x.length; i++) {
        x[parseInt(i)].classList.add('second_half');
    }*/

    // var a = loaded_document_edited.getElementsByTagName("p")[3].innerHTML;
    // var b = a.split(".");
    // loaded_document_edited.getElementsByTagName("p")[3].innerHTML = "";
    // for (var i = 0; i < b.length; i++){
    //     if (i == 1){
    //         loaded_document_edited.getElementsByTagName("p")[3].innerHTML += 
    //         "<span class='line-height_different'>" + 
    //         b[i] + "</span>"
    //     }else{
    //         loaded_document_edited.getElementsByTagName("p")[3].innerHTML += b[i];
    //     }
    // }

    //loaded_document_edited.getElementsByTagName("h1")[0].innerHTML = 
    //"<div class=ciao> <h1 id=asd>"+loaded_document_edited.getElementsByTagName("h1")[0].innerHTML+"</h1></div>";
    
    

    
    
    return loaded_document_edited;
}