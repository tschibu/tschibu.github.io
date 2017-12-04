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
 * form javascript
 */
function submitForm() {
	var firstNameEntered = $('#fname').val().trim();
	var lastNameEntered = $('#lname').val().trim();
	var emailEntered = $('#lmail').val().trim();
	var messageEntered = $('#message').val().trim();
	var errorList = $('ul#formError');
	errorList.empty();
	var error = false;

	if (firstNameEntered == '') {
		errorList.append('<li class="errorList">Please enter a first name.</li>');
		error = true;
	}
	if (lastNameEntered == '') {
		errorList.append('<li class="errorList">Please enter a last name.</li>');
		error = true;
	}
	if (emailEntered == '') {
		errorList.append('<li class="errorList">Please enter an e-mail address.</li>');
		error = true;
	}
	if (messageEntered == '') {
		errorList.append('<li class="errorList">Please enter a message.</li>');
		error = true;
	}
	if (error) {
		errorList.removeClass('hidden');
		return;
	}
	$("#firstNameFeedback").html(firstNameEntered);
	$("#lastNameFeedback").html(lastNameEntered);
	$("#emailFeedback").html(emailEntered);
	$("#subjectFeedback").html(messageEntered);
	$("form").addClass('hidden');
	$("div#frmFeedback").removeClass('hidden');
}


/**
 * Document Ready functions
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