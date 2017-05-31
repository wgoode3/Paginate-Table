function paginate(list, pgSize, divName, columnNames, actions){
	
	// these variables needed a larger scope
	var numPages = Math.ceil(list.length / pgSize);
	var current = 0;

	// mostly used in the info that goes along with the pagination
	var total = list.length;
	
	// default truncate length
	var truncate_length = 50;

	// number of pagination links shown on either side of "active", unless at ends
	var pgRadius = 4;

	// max number of pages includes a current one in the middle
	var numLinks = 2 * pgRadius + 1;
	if(numLinks > numPages){
		numLinks = numPages;
	}

	// would be a nice option to select
	// reverse order
	function reverse(){
		for(var i=0; i<Math.floor(list.length/2); i++){
			var temp = list[i];
			list[i] = list[list.length-1-i];
			list[list.length-1-i] = temp;
		}
	}

	// reverse();

	// prevent script injections and truncates long entries
	function safe(text){
		if(typeof(text) == "string"){
			var text = $($.parseHTML(text)).text();
			if(text.length > truncate_length){
				text = text.substring(0, truncate_length) + "...";
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
		// start making a table with the head
		var table = `<table class="table"><tr>`;
		for(var i=0; i<columnNames.length; i++){
			table += `<th>${style(columnNames[i])}</th>`;
		}
		if(actions){
			table += `<th>Actions</th>`;
		}
		table += `</tr>`;

		// fills out the body of the table
		for(var i=start*pgSize; i<(start+1)*pgSize; i++){
			if(list[i]){
				table += `<tr>`;
				for(var j=0; j<columnNames.length; j++){
					table += `<td>${safe(list[i][columnNames[j]])}</td>`;	
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
				// fills empty rows with non-breaking spaces
				table += `<tr>`;
				if(actions){
					var cols = columnNames.length + 1;
				}else{
					var cols = columnNames.length;
				}
				for(var j=0; j<cols; j++){
					table += `<td>&nbsp;</td>`;
				}
				table += `</tr>`;
			}
		}
		table += "</table>";
		$(`#${divName}`).html(table);
	}
	
	makeTable(current);

	// gives me a results string that looks like...
	// (showing results 21 through 41 of 277)
	function resultString(){
		var start = (current*pgSize)+1;
		var end = (current+1)*pgSize;
		if(end > total){
			end = total;
		}
		return `<p class="results ${divName}">(Showing results ${start} through ${end} of ${total})</p>`;
	}

	// makes pagination links
	function makePages(current){
		var pagination = `<ul class="pagination">
							<li><a class="${divName}" data-page="first" href=""><<</a></li>
							<li><a class="${divName}" data-page="prev" href=""><</a></li>`;
		for(var i=0; i<numLinks; i++){
			if(i == current){
				pagination += `<li class="active">`;
			}else{
				pagination += `<li>`;
			}
			pagination += `<a class="${divName}" data-page="${i}" href="">${i+1}</a></li>`;
		}
		pagination += `<li><a class="${divName}" data-page="next" href="">></a></li>
						<li><a class="${divName}" data-page="last" href="">>></a></li></ul>`;
		pagination += resultString();
		$(`#${divName}_pages`).html(pagination);
	}

	// rewrite what the pagination links show
	function redoPages(index, callback){
		// I only need to reorder pages if we have more pages than we show
		if(numLinks < numPages){
			// then check if the index is near beginning, end, or in the middle
			if(index < pgRadius + 1){
				// make the pages starting at 0 ending at numLinks
				var st = 0, ed = numLinks;
			}else if(index > pgRadius && index < numPages - pgRadius){
				// make the pages starting at index - pgRadius ending at index + pgRadius
				var st = index - pgRadius, ed = index + pgRadius + 1;
			}else if(index > numPages - pgRadius - 1){
				// make the pages starting at numPages - numLinks ending at numPages
				var st = numPages - numLinks, ed = numPages;
			}
			// neat that I need to track two indices at the same time
			for(var i=st, j=2; i<ed; i++, j++){
				// j starting at 2 skips the initial two pagination links
				$(`#${divName}_pages a:eq(${j})`).attr(`data-page`, `${i}`); // changes data-page
				$(`#${divName}_pages a:eq(${j})`).text(`${i+1}`); // changes text
			}
		}
		callback();
	}
	
	makePages(current);

	// listens for someone clicking a pagination link
	$(`a.${divName}`).click(function(a){
		a.preventDefault();
		$(`a.${divName}[data-page="${current}"]`).parent().removeClass("active");
		if(this.dataset.page == "first"){
			current = 0;
		}else if(this.dataset.page == "prev" && current > 0){
			current--;
		}else if(this.dataset.page == "next" && current < numPages-1){
			current++;
		}else if(this.dataset.page == "last"){
			current = numPages-1;
		}else{
			if(!isNaN(this.dataset.page)){
				current = parseInt(this.dataset.page);
			}
		}
		makeTable(current);
		redoPages(current, function(){
			// callback waits for links to be rewritten before adding class "active"
			$(`a.${divName}[data-page="${current}"]`).parent().addClass("active");
		});
		$(`.results.${divName}`).html(resultString());
	});
}