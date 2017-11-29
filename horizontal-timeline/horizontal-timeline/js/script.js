
function getTweets()
{
	var years = ['1861','1900'];
	for(i=0;i<years.length;i++)
	{
		loadTweetData(years[i]);	
	}
}



function loadTweetData(selectedYear) {
	var year_dataset = [];
	var filename = "data/" + selectedYear + "_popularity.csv";
	var random_tweets = []
    d3.csv(filename, function(data) {
				data.forEach(function(d,i){							
					year_dataset.push(d);
					year_dataset[i].classification = +d.classification;
					year_dataset[i].year = +d.year;
    });	
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
			//div2.appendChild(h4);
			div2.appendChild(p);
			div1.appendChild(aNode);
			div1.appendChild(div2);
			var yearNode = document.getElementById(selectedYear);
			yearNode.appendChild(document.createElement("br"))
			yearNode.appendChild(div1);
		}	
	});		
}
