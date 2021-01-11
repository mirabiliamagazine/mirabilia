//funzione 1, serve per leggere lo specifico file (html) di cui voglio fare il parser//

async function readTextFile(file_location){                     
    const articleResponse = await fetch(file_location)   	//fectch fa richiesta http          
    const articleHtml = await articleResponse.text()     	// fetch restiusce file in formato json, quindi devo trasformarlo:
															// 	file json -> stringa -> html        
    return articleHtml;
}

//funzione 2, parser//
async function fileToHTML(file_location, with_ids){
	const html_parser = new DOMParser ()  //DOMParser è una funzione già esistente di js 

	var stringContainingHTMLSource = await readTextFile(file_location); //prende file html, lo legge e restituisce una stringa
	var parsed_DOM = html_parser.parseFromString(stringContainingHTMLSource, "text/html"); // prendo la stinga e la trasfromo in html
	
	var dom_with_ids = parsed_DOM.body;
	if(with_ids){//solo se c'è stato un richiamo 
		dom_with_ids = assignIds(parsed_DOM.body);
	}

	return dom_with_ids;
}

function generateMetadataHTML(id){//crea sotto formato stringa il codice html da andare a stampare in ogno dropdown
	// filling the right div with content from var
	//costruisce l'html del metadatview riempendo la lista con i tag e le classi 
	// console.log(Object.keys(metadata[id]))
	if (Object.keys(metadata[id]).length == 0){//se ce qualocsa per la specifica tipologia di metadato,
		temp = "<label>No entries found for "+id+"</label>";//se n0n ce niente ti faccio vedere questa stringa
	}else{
		var temp = "<ul class=elenco>";
		for (var i in Object.keys(metadata[id])){//cicla le chivi di metatada (es. quetin blake)
			temp += "<li class=numeri_elenco>";//cotrusice una lista interna alla lista
			if (metadata[id][Object.keys(metadata[id])[i]].length == 1){ //controlla se ce uno solo e nel caso fa solo il label
				temp += "<label  onclick=highlight('"+metadata[id][Object.keys(metadata[id])[i]][0]+"')>"+Object.keys(metadata[id])[i].replaceAll("_", " ")+"</label>";
				if(id !== "content"){					//people     //quale people								//cosa c'è scritto dentro al tipo di metadata								
					//wikipedia
					var url = "https://it.wikipedia.org/wiki/"+Object.keys(metadata[id])[i];
					temp += "<img src='./images/wikipedia.png' style='width:1rem; padding-left: 5px; cursor:pointer;' onclick=window.open('"+url+"')>";
					//wikipedia-end
				}
			}else{//caso in cui ce più di uno
				temp += "<label onclick=toggleUl('ul_"+Object.keys(metadata[id])[i]+"')>"+Object.keys(metadata[id])[i].replaceAll("_", " ")+"</label>";
				if(id !== "content"){
					//wikipedia
					var url = "https://it.wikipedia.org/wiki/"+Object.keys(metadata[id])[i];
					temp += "<img src='./images/wikipedia.png' style='width:1rem; padding-left: 5px; cursor:pointer;' onclick=window.open('"+url+"')>";
					//wikipedia-end
				}
				temp += "<ul style='display: none;' id='ul_"+Object.keys(metadata[id])[i]+"'>";
				for (var j in metadata[id][Object.keys(metadata[id])[i]]){
					temp += "<li onclick=highlight('"+metadata[id][Object.keys(metadata[id])[i]][j]+"')>"+(Number(j)+1)+"</li>";//metto le occerenze
				}
				temp += "</ul>"
			}
			temp += "</li>"
		}
		temp += "</ul>"
	}
	
	document.getElementById(id+"_toggle").innerHTML = temp;
}

function enrichMeta(metadata, c, elements){
	metadata[c] = {}; // inizio a riempire il json (primo livello)
	for (var j in elements){
		var element = elements[j];
		// console.log(element);
		if(element instanceof HTMLElement){
			var label = element.innerHTML.trim().replaceAll(' ', '_');
			var my_id = "metadata_";
			var index;
			// console.log(label);
			if(metadata[c][label] !== undefined){
				index = metadata[c][label].length+1;
				my_id += label + "_" + index;
			}else{
				index = 1;
				my_id += label + "_" + index;
				metadata[c][label] = [];	//inizializzo l'array di ids vuoto (per poter aggiungere nuovi elementi) - riempio json secondo livello
			}

			metadata[c][label].push(
				my_id
			);


			element.setAttribute("id", my_id);
		}

	
	}
	generateMetadataHTML(c);

}

async function assignIds(html_dom_format){
	var html_with_ids = html_dom_format;


	var intering_classes = ["person", "place", "entity"];
	var interesting_tags = ["h2", "time"];

	for (var i in intering_classes){//ciclo person place entity
		var c = intering_classes[i];
		console.log(c);

		var elements = html_with_ids.getElementsByClassName(c);
		// console.log(elements);

		enrichMeta(metadata, c, elements)
		
	}

	for (var i in interesting_tags){
		var c = interesting_tags[i];
		console.log(c);

		var elements = html_with_ids.getElementsByTagName(c);
		// console.log(elements);

		if (c === "h2"){
			c = "content";
		}

		enrichMeta(metadata, c, elements)
		
	}

	
	

	console.log(metadata);

	return html_with_ids;
}



