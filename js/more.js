$(document).ready(function(){

	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLnY5rTcrX-j5Lg7C6i7Lq1XOnVVAUuXhJ&key=AIzaSyDVNOTsxna2PaOwbA9VHmd814hHPpk08jk',
	    type: 'get',
	    dataType: 'json',
	    success: function(data){
	    	console.log(data)
			var html= '';
			 	html+= '<ul>'
			 	$.each(data.items,function(i, item){
			 	html+= '<br><li><a href="https://www.youtube.com/watch?v='+item.snippet.resourceId.videoId+'&list='+item.snippet.playlistId+'"><img src="'+item.snippet.thumbnails.high.url+'"</img><br><br></a><span>'+ item.snippet.title +'</span></li>';
			});
			$('.re').html(html);
	    }
	})
})























 











