
async function readTextFile(file_location){                     
    const articleResponse = await fetch(file_location)   	
    const articleHtml = await articleResponse.text()     	
															     
    return articleHtml;
}


async function fileToHTML(file_location, with_ids){
	const html_parser = new DOMParser ()  

	var stringContainingHTMLSource = await readTextFile(file_location); //prende file html, lo legge e restituisce una stringa
	var parsed_DOM = html_parser.parseFromString(stringContainingHTMLSource, "text/html"); // prendo la stinga e la trasfromo in html
	
	var dom_with_ids = parsed_DOM.body;
	if(with_ids){//solo se c'è stato un richiamo 
		dom_with_ids = assignIds(parsed_DOM.body);
	}

	return dom_with_ids;
}

function generateMetadataHTML(id){
	
	
	
	if (Object.keys(metadata[id]).length == 0){
		temp = "<label>No entries found for "+id+"</label>";
	}else{
		var temp = "<ul class=elenco>";
		for (var i in Object.keys(metadata[id])){
			temp += "<li class=numeri_elenco>";
			if (metadata[id][Object.keys(metadata[id])[i]].length == 1){ 
				temp += "<label  onclick=highlight('"+metadata[id][Object.keys(metadata[id])[i]][0]+"')>"+Object.keys(metadata[id])[i].replaceAll("_", " ")+"</label>";
				if(id !== "content"){																				
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
					temp += "<li onclick=highlight('"+metadata[id][Object.keys(metadata[id])[i]][j]+"')>"+(Number(j)+1)+"</li>";
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
	metadata[c] = {}; 
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
				metadata[c][label] = [];	
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

	for (var i in intering_classes){
		var c = intering_classes[i];
		console.log(c);

		var elements = html_with_ids.getElementsByClassName(c);
		

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



