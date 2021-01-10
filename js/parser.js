var audio = new Audio();
var mood = "future.css";

const issues_structure = {
    literature: ['./pagesToLoad/children.html', './pagesToLoad/inforgraphics.html', './pagesToLoad/theGuardian_article.html'],
    digital: ['./pagesToLoad/medium_hp_article.html', './pagesToLoad/Dataviz.html', './pagesToLoad/Illus.html'],
    Rodar100: ['./pagesToLoad/corriere_articolo.html', './pagesToLoad/ny_article.html', './pagesToLoad/Rodari_internazionale.html']
}

async function parser(html_selected, style_selected, is_cover=null, issue_selected=null){

    if (style_selected !== style_active){
        mood = "future.css";
        audio.pause();
    }

    if(html_selected !== null){
        html_active = html_selected;
    }

    if (issue_selected !== null && issue_active !== issue_selected){
        issue_active = issue_selected;
        metadata["issues"] = [];
        for(var i in issues_structure[issue_active]){
            var article = issues_structure[issue_active][i];
            var html_keywords = await fileToHTML(article, false);
            var conceptes = html_keywords.getElementsByClassName("concept");
            for (var j in conceptes){
                if(conceptes[j] instanceof HTMLElement){
                    metadata["issues"].push({
                    key: conceptes[j].innerHTML,
                    article: article,
                    issue_active: issue_active,
                    is_cover: is_cover
                });}
            }
        }

        
        var temp = "<ul class=label_key>";
        for (var k in metadata["issues"]){
            var keyword_obj = metadata["issues"][k];
            temp += "<li onclick=parser('"+keyword_obj.article+"',style_active,"+keyword_obj.is_cover+",'"+keyword_obj.issue_active+"')>"+keyword_obj.key+"</li>";
        }

        document.getElementById("keywords_toggle").innerHTML = temp + "</ul>";
    }

    style_active = style_selected;
    if(is_cover !== null){
        cover_active = is_cover;
    }
    if (html_active !== undefined){
        // loading html from file DOM format
        var html_final = await fileToHTML(html_active, true);
        if (cover_active){
            if (style_selected === undefined){
                console.log("hoòa")
                html_final = html_final.innerHTML;
                resetCSS();
            }else if(style_selected === "raygun"){
                html_final = raygun_cover(html_final).innerHTML;
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









