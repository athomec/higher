$(function () {//JS開頭

	// Tooltips
	const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
	const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

	// Menu
	$('.menu .children').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('show');
	})

	$('.sidebar-toggler').on('click', function () {
		$('.sidebar').toggleClass('active');
		$(this).toggleClass('active');
	});

	$(".js-toggle").click(function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
	})


})//JS尾端	