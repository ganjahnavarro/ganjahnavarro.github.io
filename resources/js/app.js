function scrollTo(element, to, duration) {
	if (duration < 0) return;
	var difference = to - element.scrollTop;
	var perTick = difference / duration * 10;

	setTimeout(function() {
		element.scrollTop = element.scrollTop + perTick;
		scrollTo(element, to, duration - 10);
	}, 10);
};

var waitThrottle = false;
function throttle(callback, limit) {
    if (!waitThrottle) {
        callback.call();
        waitThrottle = true;
        setTimeout(function () {
            waitThrottle = false;
        }, limit);
    }
};
