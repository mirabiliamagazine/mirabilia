async function parser(html_selected, style_selected, is_cover=null, issue_selected=null){ //is cover null = se questo parametro non me lo passi vale null, perchè non sempre quei due parametri vengono chiamati

    if (style_selected !== style_active){ // se cambio stile mentre sono su un mood diverso da fuuture base e cambio stile quando ritoenrò su future apparirà sempre future base e non moods
        mood = "future.css";
        audio.pause();
    }

    if(html_selected !== null){ // metto l'html nella variabile globale
        html_active = html_selected;
    }

    if (issue_selected !== null && issue_active !== issue_selected){ // faccio questo if perchè voglio evitare di fare questa operazione quando non è necessario (es. quando selzioni articolo stessa issue)
        issue_active = issue_selected;
        metadata["issues"] = [];
        for(var i in issues_structure[issue_active]){ //issues_structure=oggetto js che contiene uri articoli. chiave e array
            var article = issues_structure[issue_active][i];//è l'uri di un articolo
            var html_keywords = await fileToHTML(article, false);//metto in questa variabile il risultato in dom di quel specifco articolo, c'è anche false perchè non voglio assegamento id
            var conceptes = html_keywords.getElementsByClassName("concept");//contiene tutti html con la classe concepts
            for (var j in conceptes){
                if(conceptes[j] instanceof HTMLElement){
                    metadata["issues"].push({ //metto oggetto js
                    key: conceptes[j].innerHTML,//come chiave il contenuto del elemento 
                    article: article,//l'articolo al quale appartine il contneto della classe concept
                    issue_active: issue_active, //sapere qualche issue active
                    is_cover: is_cover //se è una cover o non è una cover 
                });}
            }
        }

        //inizio sottoformato di stringa, html
        var temp = "<ul class=label_key>";
        for (var k in metadata["issues"]){
            var keyword_obj = metadata["issues"][k];
            temp += "<li onclick=parser('"+keyword_obj.article+"',style_active,"+keyword_obj.is_cover+",'"+keyword_obj.issue_active+"')>"+keyword_obj.key+"</li>";
        }                                  //metto i parametri nella funzione parser

        document.getElementById("keywords_toggle").innerHTML = temp + "</ul>";//infine lo metto nella struttura grafica del metadataviewr
    }

    style_active = style_selected;
    if(is_cover !== null){ //se è statat selezionata una cover 
        cover_active = is_cover; //
    }
    if (html_active !== undefined){// controllo se ho almeno selezionato un articolo
        // loading html from file DOM format
        var html_final = await fileToHTML(html_active, true); //essendo true fa già assegnamento id, se è ture invoca una funzione che fa l'asseganemnto id
        if (cover_active){
            if (style_selected === undefined){
                console.log("hoòa")
                html_final = html_final.innerHTML;
                resetCSS();//elimina il link stile
            }else if(style_selected === "raygun"){
                html_final = raygun_cover(html_final).innerHTML;//usa changecss prende html fa la manipolazione e lo restituisce
            }else if(style_selected === "carolina"){
                html_final = carolina_cover(html_final).innerHTML;
            }else if(style_selected === "newspaper"){
                html_final = newspaper_cover(html_final).innerHTML;
            }else if(style_selected === "future"){
                html_final = future_cover(html_final).innerHTML;
            }else if(style_selected === "bauhaus"){
                html_final = bauhaus_cover(html_final).innerHTML;
            }else if(style_selected === "rollingstones"){
                html_final = rollingstones_cover(html_final).innerHTML;
            }
        }else{
            if (style_selected === undefined){
                html_final = html_final.innerHTML;
                resetCSS();
            }else if(style_selected === "raygun"){
                html_final = raygun(html_final).innerHTML;
            }else if(style_selected === "carolina"){
                html_final = carolina(html_final).innerHTML;
            }else if(style_selected === "newspaper"){
                html_final = newspaper(html_final).innerHTML;
            }else if(style_selected === "future"){
                html_final = future(html_final).innerHTML;
            }else if(style_selected === "bauhaus"){
                html_final = bauhaus(html_final).innerHTML;
            }else if(style_selected === "rollingstones"){
                html_final = rollingstones(html_final).innerHTML;
            }
        }
        document.getElementById("box").innerHTML = html_final;
    }
}









