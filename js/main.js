/**
 * function to set the style
 * 		parameter a = styleName
 * 		parameter b = styleName
 */
function setStyle(styleName, setCookie) {
	$('body').removeClass();
	$('body').addClass(styleName);
	if (setCookie) {
		var expires = new Date();
		expires.setTime(expires.getTime() + (1000 * 3600 * 24 * 30)); // 30 days
		var cookieStr = 'style=' + styleName + '; expires='
				+ expires.toUTCString();
		document.cookie = cookieStr;
	}
}

function setStyleFromCookie() {
	var cookie = document.cookie;
	if (cookie.lastIndexOf('style=styleA') != -1) {
		setStyle('styleA', false);
	} else if (cookie.lastIndexOf('style=styleB') != -1) {
		setStyle('styleB', false);
	} else {
		// default: styleA
		setStyle('styleA', false);
	}
}

/**
 * 
 */
$(document).ready(function() {
	$('a.cssSwitcher').each(function() {
		var link = $(this);
		var styleName = link.attr('id');
		link.click(function(e) {
			e.preventDefault();
			setStyle(styleName, true);
		});
	});
	(function loadInitialPage() {
		setStyleFromCookie();
	})();
});