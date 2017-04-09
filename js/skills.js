
$(document).ready(function() {

    $.getJSON('skills.json', function(jd) {
    	// console.log(jd)
        var html =''
		// html+= '<ul>'
         $.each(jd.omar,function(i,e){
         	// console.log(e)

			// html += '<li>'
			html+='<img src="'+e.image+'" width="46" height="46" alt="" />'
			html+= '<strong>'+ e.name + '</strong>'
			html+= '<p>' + e.desc + '</p>'
			// html+= '</li>'
		})
		// html+= '</ul>'
		$('#1').append(html)
    })

});	



	

