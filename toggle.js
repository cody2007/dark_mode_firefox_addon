function darkenToggle() {
	if (localStorage.getItem("darken_on") === "1") {
	  	localStorage.setItem("darken_on", "0");
	} else {
		localStorage.setItem("darken_on", "1");
	}
}

darkenToggle();
darkenFromState();
