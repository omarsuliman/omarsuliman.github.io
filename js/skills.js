
$(document).ready(function() {

    $.getJSON('skills.json', function(data) {
        var html =''
         $.each(data.omar,function(i,e){

			html+='<img src="'+e.image+'" width="46" height="46" alt="" />'
			html+= '<strong>'+ e.name + '</strong>'
			html+= '<p>' + e.desc + '</p>'
		})
		$('#data-from-json').append(html)
    })

});	



	

