$(document).ready(function(){
	GetDate();
	GetFavoriteData();
})

function GetDate(){
	$('#current').click(function(e){
	 $('.panel-body').html('')
	 $(".panel-body").show();
	 $("#pop").hide();
		e.preventDefault();
		$.ajax({
			url: 'https://api.github.com/users/omarsuliman/repos?sort=created&per_page=5',
		    type: 'get',
		    dataType: 'json',
		    success: function(data){
			    $.each(data,function(i,n){
			    	var d=new Date(data[i].created_at)
				  $('.panel-body').append('<a href="'+data[i].html_url+'">'+data[i].name+'<br><i>Created at: '+formatDate(d)+'</a></i><br><hr>')
				  // $('.result').append('<li><a href="'+data[i].html_url+'">'+data[i].created_at+'</a></li>')

			    })
		    }
	    })
	})
};

function GetFavoriteData() {
	$( "#favorite" ).click(function() {
	 $(".panel-body").hide();
	 $("#pop").show();
    });
}

function formatDate(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + "  " + strTime;
}

