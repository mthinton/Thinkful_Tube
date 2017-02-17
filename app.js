var youTube_Endpoint_URL = 'https://www.googleapis.com/youtube/v3/search/';

function getDataFromYouTube (searchTerm, callback){
	console.log(searchTerm)
	var query = {
		part: 'snippet',
		key: 'AIzaSyBEpQ2c5K9n3dTMAmsSe0IyrmwglG1iBrw',
		q: searchTerm,
	}
	$.getJSON(youTube_Endpoint_URL, query, callback);
}

function displaySearchResults(data){
	var resultElement = '';
	if(data.items){
		data.items.forEach(function(item){
			console.log(item);
			resultElement +=  '<a href="https://www.youtube.com/watch?v=' + item.id.videoId +'"><img src="'+item.snippet.thumbnails.medium.url+'"></a>';
		});
	}
	else{
		resultElement += '<p> No results </p>';
	}
	$('.results_section').html(resultElement);
}

function watchSubmit(){
	$('.search_youTube').submit(function(e){
		e.preventDefault();
		var query = $(this).find('#band_name').val();
		getDataFromYouTube(query, displaySearchResults);
	});
}

$(function(){watchSubmit();});