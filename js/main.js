/*
	Collapsed Left Navigation
 */

$(".collapse-btn").click(function() {
		var mybtn = $(this);
		var par = mybtn.parents("li").children(".collapse");
		par.slideToggle(200);
		$(mybtn).toggleClass("close-menu");
});

$(function () { $("[data-toggle='tooltip']").tooltip(); });
