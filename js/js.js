

$('#currency').click(function () {
	$('#currency .dropdown').toggleClass('active')
});
$('.dropdown li').click(function () {
	$(this).addClass('active');
	$('li').not(this).removeClass('active');
	if ('li.active') {
	}
})
