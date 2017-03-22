function paginateify(list, pgSize, divName, collumnNames, actions){
	
	// makes text safe and truncates
	function safe(text){
		if(typeof(text) != "number"){
			var text = $($.parseHTML(text)).text();
			if(text.length > 30){
				text = text.substring(0, 50) + "...";
			}
		}
		return text;
	}

	// start making a table with the head
	function makeTable(start){
		var table = `<table class="table"><tr>`;
		for(var i=0; i<collumnNames.length; i++){
			table += `<th>${collumnNames[i]}</th>`;
		}
		if(actions){
			table += `<th>Actions</th>`;
		}
		table += `</tr>`;

		for(var i=start*pgSize; i<(start+1)*pgSize; i++){
			if(list[i]){
				table += `<tr>`;
				for(var j=0; j<collumnNames.length; j++){
					table += `<td>${safe(list[i][collumnNames[j]])}</td>`;	
				}
				if(actions){
					table += `<td>`;
					for(var k=0; k<actions.length; k++){
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