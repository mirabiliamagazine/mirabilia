function bauhaus(html_final){
    var loaded_document_edited = html_final;

    changeCSS("bauhaus.css")
    
    var h = document.createElement("DIV"); 
    h.classList.add("circle");  
 
    loaded_document_edited.appendChild(h);  
  


    var f = document.createElement("DIV"); 
    f.classList.add("square");  
    loaded_document_edited.appendChild(f);  


    var i = document.createElement("DIV"); 
    i.classList.add("circle1");
    loaded_document_edited.appendChild(i);  


  
    var g = document.createElement("DIV");
    g.classList.add("square1");  
    loaded_document_edited.appendChild(g);  




 

    var p = document.createElement("DIV"); 
    p.classList.add("element");  
    loaded_document_edited.appendChild(p);  


    var o = document.createElement("DIV");  
    o.classList.add("element1");  
    loaded_document_edited.appendChild(o);  


    
return loaded_document_edited;
}
