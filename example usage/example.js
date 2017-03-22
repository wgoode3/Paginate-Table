// example data
var touhou =    [{id: 1, first_name: "Reimu", last_name: "Hakurei", age: 14},
				{id: 2, first_name: "Marisa", last_name: "Kirisame", age: 14},
				{id: 3, first_name: "Rumia", last_name: "", age: ""},
				{id: 4, first_name: "Daiyousei", last_name: "", age: ""},
				{id: 5, first_name: "Cirno", last_name: "", age: "60+"},
				{id: 6, first_name: "Meiling", last_name: "Hong", age: ""},
				{id: 7, first_name: "Koakuma", last_name: "", age: "???"},
				{id: 8, first_name: "Patchoulli", last_name: "Knowledge", age: ""},	
				{id: 9, first_name: "Sakuya", last_name: "Izayoi", age: ""},
				{id: 10, first_name: "Remilia", last_name: "Knowledge", age: "500+"},
				{id: 11, first_name: "Flandre", last_name: "Knowledge", age: 510},
				{id: 12, first_name: "Letty", last_name: "Whiterock", age: ""},
				{id: 13, first_name: "Chen", last_name: "", age: ""},
				{id: 14, first_name: "Alice", last_name: "Margatroid", age: ""},
				{id: 15, first_name: "Lunasa", last_name: "Prismriver", age: ""},
				{id: 16, first_name: "Merlin", last_name: "Prismriver", age: ""},
				{id: 17, first_name: "Lyrica", last_name: "Prismriver", age: ""},
				{id: 18, first_name: "Youmu", last_name: "Konpaku", age: "60+"},
				{id: 19, first_name: "Yuyuko", last_name: "Saigyouji", age: "~1600"},
				{id: 20, first_name: "Ran", last_name: "Yakumo", age: 896},
				{id: 21, first_name: "Yukari", last_name: "Yakumo", age: "1200+"}];

// creates a table
paginateify(touhou, 8, "touhou", ["id", "first_name", "last_name", "age"], ["delete"]);