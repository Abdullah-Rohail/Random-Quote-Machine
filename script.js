$(document).ready(() => {
	const bgColors = [
		"#6e7f80",
		"#03396c",
		"#005b96",
		"#6497b1",
		"#ffeead",
		"#536878",
		"#36454f",
		"#dfa290",
		"#96ceb4"
	];
	RandomColor = () => {
		let randomColor = bgColors[Math.floor(Math.random() * bgColors.length)];
		$("body, .divider").css("background-color", randomColor);
	};

	getQuote = () => {
		$.getJSON("quotes.json", json => {
			const authors = json.authors;

			let randomIndex = Math.floor(Math.random() * authors.length);

			let name = authors[randomIndex].name;
			let img = authors[randomIndex].img;
			let quote = authors[randomIndex].quote;
			let sport = authors[randomIndex].sport;

			$("#author_img").attr("src", img);
			$("#text").text(quote);
			$("#author").text(name + " - " + sport);
			$("figcaption").text(name);
			$(".twitter-share").attr(
				"href",
				"https://twitter.com/intent/tweet?text=" +
					quote +
					" - " +
					name +
					" codepen.io/Mugiwara/pen/jqgxbr"
			);
		});
	};
	getQuote();
	$(".btn").on("click", () => {
		$(".divider").css("visibility", "visible");
		$("h1").css("color", "white");
		getQuote();
		RandomColor();
	});
});
