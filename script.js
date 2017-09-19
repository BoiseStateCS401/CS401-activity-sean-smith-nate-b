window.onload = function () { 

	var h1 = document.getElementById("names");
	var text = h1.innerHTML;

	h1.addEventListener("click", function() {
		if(h1.innerHTML != "Howdy"){
			h1.innerHTML = "Howdy!";
		} else{
			h1.innerHTML = "Changed";
		}
	});
}