function paginateify(list, pgSize, divName, collumnNames, actions){
	
	// this variables needed a larger scope
	var numPages = Math.ceil(list.length / pgSize);
	var current = 0;

	// prevent script injections and truncates long entries
	function safe(text){
		// default truncate length
		var len = 50;
		if(typeof(text) == "string"){
			var text = $($.parseHTML(text)).text();
			if(text.length > len){
				text = text.substring(0, len) + "...";
			}
		}
		return text;
	}

	// turn camelCase and underscore_separated variable names into multiple words
	// should clean up the appearance of the table header
	function style(text){
		var name = "";
		var newWord = true;
		for(var i=0; i<text.length; i++){
			if(newWord){
				name += text[i].toUpperCase();
				newWord = false;
			}else if(text[i] == "_"){
				name += " ";
				newWord = true;
			}else if(text[i] == text[i].toUpperCase()){
				if(text[i-1]){
					if(text[i-1] == text[i-1].toLowerCase()){
						name += " " + text[i];
					}else{
						name += text[i];
					}
				}
			}else{
				name += text[i];
			}
		}
		return name;
	}

	// makes a table
	function makeTable(start){
		//start making a table with the head
		var table = `<table class="table"><tr>`;
		for(var i=0; i<collumnNames.length; i++){
			table += `<th>${style(collumnNames[i])}</th>`;
		}
		if(actions){
			table += `<th>Actions</th>`;
		}
		table += `</tr>`;

		// fills out the body of the table
		for(var i=start*pgSize; i<(start+1)*pgSize; i++){
			if(list[i]){
				table += `<tr>`;
				for(var j=0; j<collumnNames.length; j++){
					table += `<td>${safe(list[i][collumnNames[j]])}</td>`;	
				}
				if(actions){
					table += `<td>`;
					for(var k=0; k<actions.length; k++){
						/*

						add custom actions in here if desired
						example usage:

						if(actions[k] == "delete"){
							table +=	`<form action="/${divName}/delete/${list[i]['id']}" method="POST"> 
											<input class="btn btn-danger btn-xs" type="submit" value="${actions[k]}">
										</form>`;
						}

						*/
						table += `<button class="btn btn-danger btn-xs">${actions[k]}</button> `;
					}
					table += `</td>`;
				}
				table += `</tr>`;
			}else{
				break;
			}
		}
		table += "</table>";
		$(`#${divName}`).html(table);
	}
	
	makeTable(0);

	// make pages
	function makePages(current){
		var pagination = `<ul class="pagination">
							<li><a class="${divName}" id="first" href="">«</a></li>
							<li><a class="${divName}" id="prev" href=""><</a></li>`;
		for(var i=0; i<numPages; i++){
			if(i == current){
				pagination += `<li class="active"><a class="${divName}" id="page${i}" href="">${i+1}</a></li>`;
			}else{
				pagination += `<li><a class="${divName}" id="page${i}" href="">${i+1}</a></li>`;
			}
		}
		pagination += `<li><a class="${divName}" id="next" href="">></a></li>
						<li><a class="${divName}" id="last" href="">»</a></li></ul>`;
		$(`#${divName}_pages`).html(pagination);
	}
	
	makePages(current);

	// listens for someone clicking a pagination link
	$(`.${divName}`).click(function(a){
		a.preventDefault();
		if(this.id == "first"){
			$(`a#page${current}.${divName}`).parent().removeClass("active");
			current = 0;
			$(`a#page${current}.${divName}`).parent().addClass("active");
			makeTable(0);
		}else if(this.id == "prev"){
			if(current > 0){
				$(`a#page${current}.${divName}`).parent().removeClass("active");
				current--;
				$(`a#page${current}.${divName}`).parent().addClass("active");
				makeTable(current);
			}
		}else if(this.id == "next"){
			if(current < numPages-1){
				$(`a#page${current}.${divName}`).parent().removeClass("active");
				current++;
				$(`a#page${current}.${divName}`).parent().addClass("active");
				makeTable(current);
			}
		}else if(this.id == "last"){
			$(`a#page${current}.${divName}`).parent().removeClass("active");
			current = numPages-1;
			$(`a#page${current}.${divName}`).parent().addClass("active");
			makeTable(numPages-1);
		}else{
			$(`a#page${current}.${divName}`).parent().removeClass("active");
			current = parseInt(this.id.substring(4))
			$(`a#page${current}.${divName}`).parent().addClass("active");
			makeTable(parseInt(this.id.substring(4)));
		}
	})
}

/*

todo:

1) restrict buttons to 5 on each side of active

	look like this (showing results 21 through 41 of 277)
 
 	[1] [2] [3] [4] [5] [6] ... [>] [»]

	and this (showing results 81 through 101 of 277)

	[«] [<] [1] [2] [3] [4] [5] [6] [7] [8] [9] ... [>] [»]

2) page size dropdown... choices of 10, 20, 30...
3) searches

*/