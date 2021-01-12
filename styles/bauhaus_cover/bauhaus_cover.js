function bauhaus_cover(html_final){
    var loaded_document_edited = html_final;

    changeCSS("bauhaus_cover.css")
   

    var f = document.createElement("DIV"); 
    f.classList.add("square");  
    loaded_document_edited.appendChild(f); 

 
 
    var i = document.createElement("DIV"); 
    i.classList.add("more1"); 
    loaded_document_edited.appendChild(i); 


  
 





    
return loaded_document_edited;
}
    
