
function getTweets()
{
	var year = 1851;
	var numYears = 48
	var i = 0;
	while(i < numYears)
	{
		loadTweetData(year.toString());
		i = i + 1;
		year = year + 1;
	}
}

var dtf = new Intl.DateTimeFormat(["en-us"], {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long"
});

function loadTweetData(selectedYear) {
	var year_dataset = [];
	var filename = "data/" + selectedYear + "-headlines.csv";
	var random_tweets = []
	var i = 0;
    d3.csv(filename, function(data) {
				data.forEach(function(d){
					if(+d.classification == 1){
					year_dataset.push(d);
					year_dataset[i].main_headline = d.main_headline;
					year_dataset[i].classification = +d.classification;
					year_dataset[i].pub_date = dtf.format(new Date(d.pub_date));
					year_dataset[i].article_url = d.article_url;
					i=i+1;}
    });
			var olNode = document.getElementById("add-events");

			var liNode = document.createElement("li");
			liNode.setAttribute("data-date","01/01/"+selectedYear);
			if(selectedYear == "1851")
			{
				liNode.setAttribute("class","selected");
			}
		var noOfRecords = 20;
		if(year_dataset.length < 20){
			noOfRecords = year_dataset.length;
		}
		for(i=0;i<noOfRecords;i++)
		{
			//console.log(year_dataset.length);
			//console.log(selectedYear);
			var ranVal = Math.floor(Math.random() * (year_dataset.length));

			var s = '<hr>\
							<div class="media">\
							  <div class="media-left media-top">\
							    <img src="img/nyt-kitten.png" class="media-object img-rounded" style="border-radius:50%;width:60px">\
							  </div>\
							  <div class="media-body">\
							    <h4><b>The New York Times</b> @nytimes · ' + year_dataset[ranVal].pub_date + '</h4>\
							    <p>' + year_dataset[ranVal].main_headline+ '</p>\
									<a href=' + year_dataset[ranVal].article_url + ' style="color:turquoise" target="_blank">Click to read more → </a>\
							  </div>\
							</div>'

			var div = document.createElement('div');
			div.innerHTML = s;

			liNode.appendChild(div);
			// liNode.appendChild(document.createElement("br"));
			// liNode.appendChild(document.createElement("hr"));
			// liNode.appendChild(document.createElement("br"));
			// var ranVal = Math.floor(Math.random() * (year_dataset.length));
			// var div1 = document.createElement("div");
			// div1.setAttribute("class","media");
			// var aNode = document.createElement("a");
			// aNode.setAttribute("class","media-left");
			// aNode.setAttribute("href","#fake");
			// var imgNode = document.createElement("img");
			// imgNode.setAttribute("class","media-object img-rounded");
			// imgNode.setAttribute("src","img/tweet.jpg");
			// aNode.appendChild(imgNode);
			// var div2 = document.createElement("div");
			// div2.setAttribute("class","media-body");
			// var p1 = document.createElement("p");
			// var textData1 = document.createTextNode("The New York Times @nytimes · " + year_dataset[ranVal].pub_date);
			// p1.appendChild(textData1);
			// div2.appendChild(p1);
			// var p = document.createElement("p");
			// p.appendChild(document.createTextNode(year_dataset[ranVal].pub_date));
			// p.appendChild(document.createElement("br"));
			// var textData2 = document.createTextNode(year_dataset[ranVal].main_headline);
			// p.appendChild(textData2);
			// var aNode1 = document.createElement("a");
			// aNode1.setAttribute("href",year_dataset[ranVal].article_url);
			// aNode1.setAttribute("style","color: turquoise");
			// aNode1.setAttribute("target", "_blank");
			// var textData3 = document.createTextNode("... read more");
			// aNode1.appendChild(textData3);
			// div2.appendChild(p);
			// div1.appendChild(aNode);
			// div2.appendChild(aNode1);
			// div1.appendChild(div2);
			// liNode.appendChild(div1);
		}
			liNode.appendChild(document.createElement("br"));
			liNode.appendChild(document.createElement("hr"));
			liNode.appendChild(document.createElement("br"));
			olNode.appendChild(liNode);
	});
}
