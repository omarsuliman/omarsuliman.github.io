$(document).ready(function(){

	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLnY5rTcrX-j5Lg7C6i7Lq1XOnVVAUuXhJ&key=AIzaSyDVNOTsxna2PaOwbA9VHmd814hHPpk08jk',
	    type: 'get',
	    dataType: 'json',
	    success: function(data){
	    	// console.log(data.items[0])

			var html= ''
			    // html+='<div class="embed-responsive embed-responsive-4by3">'
			 	$.each(data.items,function(i, item){
			 		console.log(item)

                html+='<div>'
                html+='<div class="embed-responsive embed-responsive-4by3"><iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/'+item.snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe></div>'
                html+='<h3>'+item.snippet.title+'</h3>'
                // html+='<p>'+item.snippet.title+'</p>'
			 	html+='</div>'
			}); 
                // html+= '</div>'
			$('#videos').html(html);
			// $('.col-sm-6').html(html);
	    }
	})
})




     
    



















 











