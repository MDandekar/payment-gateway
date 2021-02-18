/*Footer funtion copies contactinfo to clipboard*/
function copyToClipboard(value){
	var email = document.createElement("input");
	email.value = value;
	document.body.appendChild(email);
	email.select();
	document.execCommand("copy");
	document.body.removeChild(email);
};