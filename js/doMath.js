$('#btn1').click(function(event) {
		console.log('button clicked')
		doMath();
	});

doMath = function() {
	var m = 10 * 20;
	console.log(m);
	sendBack(m);
}

sendBack = function(n) {
	options = {
		title: "Math!",
		desc: "Our math answer is " + n
	};
	console.log(options)
	$('.modal').siteModal(options);
}