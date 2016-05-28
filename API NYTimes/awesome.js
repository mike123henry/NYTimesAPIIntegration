		$('#searchButton').on("click", function() {

			var APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
			var input = $('#searchTerm').val().trim();
			var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=" + input;
				$.ajax({url: queryURL, method: 'GET'})

	    		.done(function(response) {
	    			console.log(response);
	    			numRecordsRetrieve = $('#howMany').val();
	    			console.log($('#howMany').val());
	    			if(numRecordsRetrieve == "one") {
					$('.resultsSection').append("1 " + response.response.docs[0].headline.main + "<br>" + "Author: " + response.response.docs[0].byline.original + "<br>" + "Web URL: " + response.response.docs[0].web_url + "<br>" + "Date Published: " + response.response.docs[0].pub_date + "<br>" + "Section: " + response.response.docs[0].section_name + "<br><hr>");
					}
					if(numRecordsRetrieve == "five") {
						for(var i = 0; i < numRecordsRetrieve; i++) {
							$('.resultsSection').append(i+1 + " " + response.response.docs[i].headline.main + "<br>" + "Author: " + response.response.docs[i].byline.original + "<br>" + "Web URL: " + response.response.docs[i].web_url + "<br>" + "Date Published: " + response.response.docs[i].pub_date + "<br>" + "Section: " + response.response.docs[i].section_name + "<br><hr>");
						}
					}
					if(numRecordsRetrieve == "ten") {
						for(var i = 0; i < numRecordsRetrieve; i++) {
							$('.resultsSection').append(i+1 + " " + response.response.docs[i].headline.main + "<br>" + "Author: " + response.response.docs[i].byline.original + "<br>" + "Web URL: " + response.response.docs[i].web_url + "<br>" + "Date Published: " + response.response.docs[i].pub_date + "<br>" + "Section: " + response.response.docs[i].section_name + "<br><hr>");
						}
					}
    			});
    	});