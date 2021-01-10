function bauhaus(html_final){
    var loaded_document_edited = html_final;

    changeCSS("bauhaus.css")
    //loaded_document_edited.getElementsByTagName("p")[0].classList.add('box');
    var h = document.createElement("DIV"); // Create the H1 element 
    h.classList.add("circle"); // Create a text element  // Append the text node to the H1 element 
 
    loaded_document_edited.appendChild(h); // Append the H1 element to the document body 
  

 //loaded_document_edited.getElementsByTagName("p")[0].classList.add('box');
    var f = document.createElement("DIV"); // Create the H1 element 
    f.classList.add("square"); // Create a text element  // Append the text node to the H1 element 
    loaded_document_edited.appendChild(f); // Append the H1 element to the document body 

 
 //loaded_document_edited.getElementsByTagName("p")[0].classList.add('box');
    var i = document.createElement("DIV"); // Create the H1 element 
    i.classList.add("circle1"); // Create a text element  // Append the text node to the H1 element 
    loaded_document_edited.appendChild(i); // Append the H1 element to the document body 


  
 //loaded_document_edited.getElementsByTagName("p")[0].classList.add('box');
    var g = document.createElement("DIV"); // Create the H1 element 
    g.classList.add("square1"); // Create a text element  // Append the text node to the H1 element 
    loaded_document_edited.appendChild(g); // Append the H1 element to the document body 




 
 //loaded_document_edited.getElementsByTagName("p")[0].classList.add('box');
    var p = document.createElement("DIV"); // Create the H1 element 
    p.classList.add("element"); // Create a text element  // Append the text node to the H1 element 
    loaded_document_edited.appendChild(p); // Append the H1 element to the document body 


  
 //loaded_document_edited.getElementsByTagName("p")[0].classList.add('box');
    var o = document.createElement("DIV"); // Create the H1 element 
    o.classList.add("element1"); // Create a text element  // Append the text node to the H1 element 
    loaded_document_edited.appendChild(o); // Append the H1 element to the document body 


    
return loaded_document_edited;
}