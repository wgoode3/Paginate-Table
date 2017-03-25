// example data
var touhou =	[{id: 1, first_name: "Reimu", last_name: "Hakurei", age: 14},
				{id: 2, first_name: "Marisa", last_name: "Kirisame", age: 14},
				{id: 3, first_name: "Rumia", last_name: "", age: ""},
				{id: 4, first_name: "Daiyousei", last_name: "", age: ""},
				{id: 5, first_name: "Cirno", last_name: "", age: "60+"},
				{id: 6, first_name: "Meiling", last_name: "Hong", age: ""},
				{id: 7, first_name: "Koakuma", last_name: "", age: "???"},
				{id: 8, first_name: "Patchoulli", last_name: "Knowledge", age: ""},	
				{id: 9, first_name: "Sakuya", last_name: "Izayoi", age: ""},
				{id: 10, first_name: "Remilia", last_name: "Scarlet", age: "500+"},
				{id: 11, first_name: "Flandre", last_name: "Scarlet", age: 510},
				{id: 12, first_name: "Letty", last_name: "Whiterock", age: ""},
				{id: 13, first_name: "Chen", last_name: "", age: ""},
				{id: 14, first_name: "Alice", last_name: "Margatroid", age: ""},
				{id: 15, first_name: "Lunasa", last_name: "Prismriver", age: ""},
				{id: 16, first_name: "Merlin", last_name: "Prismriver", age: ""},
				{id: 17, first_name: "Lyrica", last_name: "Prismriver", age: ""},
				{id: 18, first_name: "Youmu", last_name: "Konpaku", age: "60+"},
				{id: 19, first_name: "Yuyuko", last_name: "Saigyouji", age: "~1600"},
				{id: 20, first_name: "Ran", last_name: "Yakumo", age: 896},
				{id: 21, first_name: "Yukari", last_name: "Yakumo", age: "1200+"},
				{id: 22, first_name: "Wriggle", last_name: "Nightbug", age: "~70"},
				{id: 23, first_name: "Mystia", last_name: "Lorelei", age: "young-ish"},
				{id: 24, first_name: "Keine", last_name: "Kamishirasawa", age: ""},
				{id: 25, first_name: "Tewi", last_name: "Inaba", age: "1300+"},
				{id: 26, first_name: "Reisen", last_name: "Inaba", age: "~40"},
				{id: 27, first_name: "Eiren", last_name: "Yagokoro", age: "1500+"},
				{id: 28, first_name: "Kaguya", last_name: "Houraisan", age: "1300+"},
				{id: 29, first_name: "Mokou", last_name: "Fujiwara", age: "1300+"},
				{id: 30, first_name: "Aya", last_name: "Shameimaru", age: "1000+"},
				{id: 31, first_name: "Medicine", last_name: "Melancholy", age: 67},
				{id: 32, first_name: "Yuuka", last_name: "Kazami", age: "60+"},
				{id: 33, first_name: "Komachi", last_name: "Onozuka", age: "unknown"},
				{id: 34, first_name: "Shikieiki", last_name: "Yamaxanadu", age: "immortal"},
				{id: 35, first_name: "Shizuha", last_name: "Aki", age: ""},
				{id: 36, first_name: "Minoriko", last_name: "Aki", age: ""},
				{id: 37, first_name: "Hina", last_name: "Kagiyama", age: ""},
				{id: 38, first_name: "Nitori", last_name: "Kawashiro", age: 109},
				{id: 39, first_name: "Momiji", last_name: "Inubashiri", age: "49+"},
				{id: 40, first_name: "Sanae", last_name: "Kochiya", age: ""},
				{id: 41, first_name: "Kanako", last_name: "Yasaka", age: "2000+"},
				{id: 42, first_name: "Suwako", last_name: "Moriya", age: "2300+"}];

// creates a table
paginateify(touhou, 4, "touhou", ["id", "first_name", "last_name", "age"], ["Delete"]);
