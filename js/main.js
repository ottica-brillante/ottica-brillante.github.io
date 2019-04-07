var config = {
	temples: "wood",
	frame: "plastic"
};

var test;

function updatePreview() {
	$(".preview-wrapper img").removeClass("visible");

	$(`.preview-wrapper img[data-option=temples][value=${config.temples}]`).addClass("visible");
	$(`.preview-wrapper img[data-option=frame][value=${config.frame}]`).addClass("visible");
}

$(document).ready(function() {
	updatePreview();

	// Disable draging and context menu
	$(document).on("dragstart", function() { return false; });
	$(document).on("contextmenu", function() { return false; });
	$(document).on("selectstart", function() { return false; });

	$(".option").click(function() {
		// console.log($(this).attr("value"), $(this).parent().attr("data-option"));

		$(this).siblings().removeClass("active");
		$(this).addClass("active");

		config[ $(this).parent().attr("data-option") ] = $(this).attr("value");		// Update config
		updatePreview();
	});

	$(".extra-options-link").on("click", function() {
		$("html, body").animate({ scrollTop: $(".extra-options-container").offset().top }, "medium");
	});

	// Open Login overlay
	$("#login").on("click", function() {
		$(".login-overlay").fadeIn(300);
		$("body").css("overflow", "hidden");
	});

	$(".login-overlay").on("click", function(event) {
		if (event.target == $("#overlay")[0]) {
			$(".login-overlay").fadeOut(300);
			$("body").css("overflow", "auto");
		}
	});

	$(".loading").fadeOut(1000);
	$("body").css("overflow", "auto");
});