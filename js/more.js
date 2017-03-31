$(document).ready(function(){

	$('#one').click(function(){

		$.ajax({
			url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLnY5rTcrX-j5Lg7C6i7Lq1XOnVVAUuXhJ&key=AIzaSyDVNOTsxna2PaOwbA9VHmd814hHPpk08jk',
		    type: 'get',
		    dataType: 'json',
		    success: function(data){
		    	// var title = 'data.items[0].snippet.description'
			   // $('.re').append('<li><a href="'+data.items[0].snippet.description+'">'+'</a></li>')
			     // $('.re').append('<li><a href="'+data.items[0].snippet.description+'">''</a></li>')	
			     var videoId = 	data.items[0].snippet.resourceId.videoId;	      	
                 $( ".re" ).append( "<p>"+data.items[0].snippet.title+"</p>" );
                 $('#video').attr('src','https://www.youtube.com/embed/'+videoId);
						// $( ".re" ).append('<embed width="420" height="315"src="'+data.items[0].snippet.+'">')
			   console.log(data)
		    }
		})

	})
})





















 











