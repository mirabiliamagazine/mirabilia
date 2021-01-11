function first_button(){
    changeCSS("future_2.css");
    mood = "future_2.css";
    audio.pause();
    audio = new Audio('../../audio/righton.mp3');
    audio.play();

    document.getElementsByClassName("bottone_1")[0].setAttribute("onclick", "comeBack()");
}

function second_button(){
    changeCSS("future_3.css");
    mood = "future_3.css";
    audio.pause();
    audio = new Audio('../../audio/energy.mp3');
    audio.play();

    document.getElementsByClassName("bottone_1")[0].setAttribute("onclick", "comeBack()");
}

function third_button(){
    changeCSS("future_4.css");
    mood = "future_4.css";
    audio.pause(); 
    audio = new Audio('../../audio/relax.mp3');
    audio.play();

    document.getElementsByClassName("bottone_1")[0].setAttribute("onclick", "comeBack()");
}

function comeBack(){
    audio.pause();
    mood = "future.css";
    changeCSS("future.css");
    document.getElementsByClassName("bottone_1")[0].setAttribute("onclick", "first_button()");
}



function future(html_final){
    var loaded_document_edited = html_final;

    changeCSS(mood);
    var h1s = loaded_document_edited.getElementsByTagName("h1");
    
    for (var i = 0; i < h1s.length; i++){
        var current_h1 = h1s[i];
        current_h1.classList.add("glitch");
        current_h1.setAttribute("data-text", current_h1.innerHTML);
    }

    ////////////////////////////////////////////////////////////////////
    
    var b = document.createElement("BUTTON");
    b.classList.add('bottone_1');
    b.textContent = 'right on';
    b.setAttribute("onclick", "first_button()")

    loaded_document_edited.appendChild(b);

    var c = document.createElement("BUTTON");
    c.classList.add('bottone_2');
    c.textContent = 'wake up';
    c.setAttribute("onclick", "second_button()")

    loaded_document_edited.appendChild(c);

    var d = document.createElement("BUTTON");
    d.classList.add('bottone_3');
    d.textContent = 'chill';
    d.setAttribute("onclick", "third_button()")

    loaded_document_edited.appendChild(d);

    ////////////////////////////////////////////////////////////////

    var cone_div = document.createElement("div");
    cone_div.classList.add('cone');
    loaded_document_edited.appendChild(cone_div);

   

    return loaded_document_edited;
}
