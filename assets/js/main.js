var obj = document.getElementById("fame");
var fameSrc = obj.src;
if (fameSrc = "welcome.html") {
	obj.style.background = 'none'
	}
	else {
	obj.style.background = '#fff'
}

$(document).ready(function(){
	$('.space-top li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.space-top li').removeClass('current');
		$('.sidebar-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})

$(function() {
  $("#home").click(function() {
    $("#fame").attr("src", $(this).attr("href"));
    $("#fame").css("display", "block");
		$("#fame").removeClass('bg_white');
  });
});

$(function() {
  $("#space-bottom-btn").click(function() {
    $("#fame").attr("src", $(this).attr("href"));
    $("#fame").css("display", "block");
		$("#fame").removeClass('bg_white');
  });
});

$(function() {
  $(".sub-link .link").click(function() {
    $("#fame").attr("src", $(this).attr("href"));
    $("#fame").css("display", "block");
    $(".sub-link .link").parent().removeClass("active");
    $(this).parent().addClass("active")
		$("#fame").addClass('bg_white');
  });
});
