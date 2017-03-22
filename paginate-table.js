function paginateify(list, pgSize, divName, collumnNames, actions){
	
	// prevent script injections and truncates long entries
	function safe(text){
		// default truncate length
		var len = 50;
		if(typeof(text) == "string"){
			var text = $($.parseHTML(text)).text();
			if(text.length > 30){
				text = text.substring(0, len) + "...";
			}
		}
		return text;
	}

	// makes a table
	function makeTable(start){
		//start making a table with the head
		var table = `<table class="table"><tr>`;
		for(var i=0; i<collumnNames.length; i++){
			table += `<th>${collumnNames[i]}</th>`;
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
						// add custom actions in here if desired
						// example usage:
						// if(actions[k] == "delete"){
						// 		table += `<form action="/delete/${list[i]['id']} method="POST"> 
						// 		<input class="btn btn-danger btn-xs" type="submit" value="delete"></form>`
						// }
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
	function makePages(){
		var numPages = Math.ceil(list.length / pgSize);
		var pagination = `<ul class="pagination">`;
		for(var i=0; i<numPages; i++){
			pagination += `<li><a class="${divName}" id="page${i}" href="">${i+1}</a></li>`;
		}
		pagination += "</ul>";
		$(`#${divName}_pages`).html(pagination)
	}
	
	makePages();

	// listens for someone clicking a pagination link
	$(document).ready(function(){
		$(`.${divName}`).click(function(e){
			e.preventDefault();
			makeTable(parseInt(this.id.substring(4)));
		})
	})
}