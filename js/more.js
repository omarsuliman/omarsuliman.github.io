$(document).ready(function(){

   $(".re").hide();
	// $('#one').click(function(){
        $(".re").show();
		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLnY5rTcrX-j5Lg7C6i7Lq1XOnVVAUuXhJ&key=AIzaSyDVNOTsxna2PaOwbA9VHmd814hHPpk08jk',
		    type: 'get',
		    dataType: 'json',
		    success: function(data){
		    	
				var html= '';
				 	html+= '<ul>'
				 	$.each(data.items,function(i, item){
				 		html+= '<br><li><a href="https://www.youtube.com/watch?v='+item.snippet.resourceId.videoId+'&list='+item.snippet.playlistId+'"><img src="'+item.snippet.thumbnails.medium.url+'"</img><br><br></a><span>'+ item.snippet.title +'</span></li>';
				 	});
				 	$('.re').html(html);
		    }
		})

	// })

})




// '<iframe class="x1" width="40%" height="200px" id='video'src="'+videoId+'"></iframe>'




// function showPlaylist(json){
//  	var html= '';
//  	html+= '<ul>'
//  	$.each(json.items,function(i, item){
//  		html+= '<li><a href="https://www.youtube.com/watch?v='+item.snippet.resourceId.videoId+'&list='+item.snippet.playlistId+'"><img src="'+item.snippet.thumbnails.medium.url+'"</img></a><span>'+ item.snippet.title +'</span></li>';
//  	});
//  	$('.container #success').html(html);	
//  }














 











