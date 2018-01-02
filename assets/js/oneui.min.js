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
  });
});
