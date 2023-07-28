// to check if valid email is entered
document.getElementById('email-form').addEventListener('submit', function (e) {
	e.preventDefault();
	const inputField = document.getElementById('email').value;
	const para = document.getElementById('warning');
	
	if (inputField.includes('@' && '.')) {
		window.location.href = 'confirmation.html';
	} else {
		para.style.display = 'block';
	}

});


// for confirmation page
const next = document.getElementById('btn');

function nextPage() {
	window.location.href = 'index.html';
}