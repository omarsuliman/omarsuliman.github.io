$(document).ready(function() {

    $.getJSON('skills.json', function(jd) {
       $("h2").append("<li>"+jd.omar[0]+"</li>");
       $("h2").append("<li>"+jd.omar[1]+"</li>");
       $("h2").append("<li>"+jd.omar[2]+"</li>");
       $("h2").append("<li>"+jd.omar[3]+"</li>");
       $("h2").append("<li>"+jd.omar[4]+"</li>");
       $("h2").append("<li>"+jd.omar[5]+"</li>");
    });	
});

// $(document).ready(function() {

//     $.getJSON('skills.json', function(jd) {

//         $.each(jd,function(i,n){

// 		 $('h2').append("<li>"+jd.omar[0]+"</li>");
// 		})
//     });		
// });
