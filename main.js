'use strict';

var StartupWeekly = {

	init: function() {
		this.fillForm();
		this.submitForm();
	},

	fillForm: function() {
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			document.querySelector('#url').value = tabs[0].url;
			document.querySelector('#titulo').value = tabs[0].title;

			console.log(tabs);
		});
	},

	submitForm: function() {
		var classe = this;

		document.querySelector('form').addEventListener('submit', function() {
			var submitButton = document.querySelector('#submit-btn');

			submitButton.value = 'Enviando...';
			submitButton.setAttribute('disabled', 'disabled');

			document.getElementById('hIframe').onload = classe.iframeOnLoad;

			return false;
		});
	},

	iframeOnLoad: function() {
		var formElement = document.querySelector('form'),
			sucessElement = document.querySelector('#sucesso');

		formElement.classList.add('invisible');
		sucessElement.classList.add('visible');
	}

};

document.addEventListener('DOMContentLoaded', function() {
	StartupWeekly.init();
});