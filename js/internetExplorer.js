function isIE() {
	ua = navigator.userAgent;
	/* MSIE used to detect old browsers and Trident used to newer ones*/
	var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;

	if (is_ie) {
		console.log("It is InternetExplorer");
		document.getElementById("ieCheck").style.display = "block";
	} else {
		console.log("It is NOT InternetExplorer");
	}
}

