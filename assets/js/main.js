var obj = document.getElementById("fame");
var fameSrc = obj.src;
if (fameSrc = "welcome.html") {
	obj.style.background = 'none'
	}
	else {
	obj.style.background = '#fff'
}

var background = new Image();
background.src = './assets/img/bg.jpg';
background.onload = function () {
    console.log('Background load complete!');
    var loadbackground = document.getElementById('body_bg');
    loadbackground.style.backgroundImage = 'url(' + background.src + ')';
    loadbackground.style.animationName = 'fadein';
}

$(document).ready(function(){
	$('.sidebar-space li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.sidebar-space li').removeClass('current');
		$('.sidebar-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

$(function() {
  $(".sub-link .link").click(function() {
    $("#fame").attr("src", $(this).attr("href"));
    $("#fame").css("display", "block");
    $(".sub-link .link").parent().removeClass("active");
    $(this).parent().addClass("active")
		$("#fame").addClass('bg_white');
  });
});

function time(){
	hoursShow = document.getElementById('showtime_hours');
	minutesShow = document.getElementById('showtime_minutes');
 	var date_time = new Date()
	var hours = date_time.getHours();
	if(hours<10){
	 	hours="0"+hours;
	}
	var minutes = date_time.getMinutes();
	if(minutes<10){
	 	minutes="0"+minutes;
	}
 	hoursShow.innerHTML = hours;
	minutesShow.innerHTML = minutes;
 	setTimeout(time,1000);
}
