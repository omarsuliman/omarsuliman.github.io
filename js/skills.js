
$(document).ready(function() {

    $.getJSON('skills.json', function(jd) {

        $.each(jd.omar,function(i){

		 $('h2').append("<li>"+jd.omar[i]+"</li>");
		})
    });		
});
