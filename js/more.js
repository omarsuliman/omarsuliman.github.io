$(document).ready(function(){

	$.ajax({
		url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId=PLnY5rTcrX-j5Lg7C6i7Lq1XOnVVAUuXhJ&key=AIzaSyDVNOTsxna2PaOwbA9VHmd814hHPpk08jk',
	    type: 'get',
	    dataType: 'json',
	    success: function(data){
	    	// console.log(data.items[0])

			var html= ''
			    html+='<div class="embed-responsive embed-responsive-4by3">'
			 	html+= '<ul>'
			 	$.each(data.items,function(i, item){
			 		console.log(item)

                html+='<div>'
                html+='<br><iframe class="embed-responsive-item" width="560" height="315" src="https://www.youtube.com/embed/'+item.snippet.resourceId.videoId+'" frameborder="0" allowfullscreen></iframe>'
                // html+='<h3>'+item.snippet.title+'</h3>'
                html+='<i class="fa fa-plus-square">'+item.snippet.title+'</i>'
			 	html+= '</ul>'
			 	html+='</div>'
			});
			$('.col-sm-6').html(html);
			// $('.col-sm-6').html(html);
	    }
	})
})




     
    



















 











