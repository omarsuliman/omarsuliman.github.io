$(document).ready(function(){
	one();
	two();
	abc();
	abcd();
})

function one(){
	$('#aSearch').click(function(e){
		$('.result').html('')
		e.preventDefault();
		$.ajax({
			url: 'https://api.github.com/users/omarsuliman/repos?sort=created&per_page=5',
		    type: 'get',
		    dataType: 'json',
		    success: function(data){
			    $.each(data,function(i,n){
			    	var d=new Date(data[i].created_at)
				  $('.result').append('<li><a href="'+data[i].html_url+'">'+data[i].name+'<br>Created at: '+formatDate(d)+'</a></li>')
				  // $('.result').append('<li><a href="'+data[i].html_url+'">'+data[i].created_at+'</a></li>')
			    })
		    }
	    })
	})
};

function two() {
	$( "#showr" ).click(function() {
  $( "#pop" ).first().show( "fast", function showNext() {
    $( this ).next( "#pop" ).show( "fast", showNext );
  });
});
 
$( "#hidr" ).click(function() {
  $( "#pop" ).hide( 1000 );
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

function abc(){
	$("#aSearch").click(function(){
		$("#pop").hide(1000);
		$(".result").show(1000);

	})
}

function abcd(){
	$("#showr").click(function(){
		$(".result").hide(1000);
		$("#pop").show(1000);

	})
}