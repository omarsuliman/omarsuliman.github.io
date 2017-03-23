$(document).ready(function(){
	one();
})

function one(){
	$('#aSearch').click(function(e){
		e.preventDefault();
		$.ajax({
			url: 'https://api.github.com/users/omarsuliman/repos?callback',
		    type: 'get',
		    dataType: 'json',
		    success: function(data){
			    $.each(data,function(i,n){
				  $('.result').append('<li><a href="'+data[i].html_url+'">'+data[i].name+'</a></li>')
			    })
		    }
	    })
	})
};


