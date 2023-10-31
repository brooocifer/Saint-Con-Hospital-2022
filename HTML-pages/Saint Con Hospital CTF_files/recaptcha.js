var onSubmit = function (token) {
	document.querySelector('#register-submit').closest('form').submit();
};

var onloadCallback = function () {
	var targets = ['/register'];
	if (targets.includes(window.location.pathname)) {
		let registerForm = document.forms[0];
		if (registerForm.id != "site_password_form") {
			registerForm.querySelector('[type="submit"]').setAttribute('id', 'register-submit');
			grecaptcha.render('register-submit', {
				'sitekey': "6LcQsq4UAAAAANMoNqPRyCLJXymW2_0Ol9JDI03h",
				'callback': onSubmit
			});
		}
	}
};