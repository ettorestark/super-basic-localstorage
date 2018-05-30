(function(window, document) {
	//If i wish delete the name storage in the browser localStorage.removeItem('name');
	if(!localStorage.name) {
		var name = prompt('Enter your name: ');
		localStorage.name = name;
	}else {
		window.alert('Welcome ' + localStorage.name);
	}
})(window, document);