$(document).ready(function(){

	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLnY5rTcrX-j5Lg7C6i7Lq1XOnVVAUuXhJ&key=AIzaSyDVNOTsxna2PaOwbA9VHmd814hHPpk08jk',
	    type: 'get',
	    dataType: 'json',
	    success: function(data){
	    	console.log(data.items[0])
	    	var vid = data.items[0].snippet.resourceId.videoId

			var html= ''
			 	html+= '<ul>'
			 	$.each(data.items,function(i, item){
			 	html+= '<br><a href="https://www.youtube.com/watch?v='+item.snippet.resourceId.videoId+'&list='+item.snippet.playlistId+'"><img src="'+item.snippet.thumbnails.medium.url+'"</img><br><br></a><span>'+ item.snippet.title +'</span>';
			 	html+= '</ul>'
			});
			$('.col-sm-6').html(html);
			// $('.col-sm-6').html(html);
	    }
	})
})























 











