
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



function loadTweetData(selectedYear) {
	var year_dataset = [];
	var filename = "data/" + selectedYear + "-headlines.csv";
	var random_tweets = []
    d3.csv(filename, function(data) {
				data.forEach(function(d,i){							
					year_dataset.push(d);
					year_dataset[i].classification = +d.classification;
					year_dataset[i].year = +d.year;
    });	
			var olNode = document.getElementById("add-events");			
			
			var liNode = document.createElement("li");
			liNode.setAttribute("data-date","01/01/"+selectedYear);
			if(selectedYear == "1851")
			{
				liNode.setAttribute("class","selected");
			}
		for(i=0;i<20;i++)
		{
			var ranVal = Math.floor(Math.random() * (year_dataset.length + 1));			
			var div1 = document.createElement("div");
			div1.setAttribute("class","media");
			var aNode = document.createElement("a");
			aNode.setAttribute("class","media-left");
			aNode.setAttribute("href","#fake");
			var imgNode = document.createElement("img");
			imgNode.setAttribute("class","media-object img-rounded");
			imgNode.setAttribute("src","img/tweet.jpg");
			aNode.appendChild(imgNode);
			var div2 = document.createElement("div");
			div2.setAttribute("class","media-body");
			var p1 = document.createElement("p");
			var textData1 = document.createTextNode("NEW YORK TIMES - @nytimes");
			p1.appendChild(textData1);
			div2.appendChild(p1);
			var p = document.createElement("p");
			var textData2 = document.createTextNode(year_dataset[ranVal].main_headline);
			p.appendChild(textData2);
			var aNode1 = document.createElement("a");
			aNode1.setAttribute("href",year_dataset[ranVal].article_url);
			var textData3 = document.createTextNode("nytimes.com");
			aNode1.appendChild(textData3);			
			div2.appendChild(p);
			div1.appendChild(aNode);
			div2.appendChild(aNode1);
			div1.appendChild(div2);
			liNode.appendChild(div1);
			liNode.appendChild(document.createElement("br"))
		}
			olNode.appendChild(liNode);
	});		
}
			