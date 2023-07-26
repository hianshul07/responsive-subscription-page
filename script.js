document
	.getElementById('sign_up_form')
	.addEventListener('submit', function (event) {
		event.preventDefault();

		const inputField = document.getElementById('email').value;
		const para = document.getElementById('warning');

		if (inputField.trim() === '') {
			para.style.display = 'block';
		} else {
			window.location.href = 'confirmation.html';
		}
	});
