function select_el(value){
	if (value){
		var el=document.getElementById(value);
		if (el) el.selected = true;	
	}
}

function get_filter(id){
	var value=document.getElementById(id).value;
	if (value)
		return "."+value;
	else
		return "";
}

(function(){
	var but = document.getElementById("search");
	
	
	if (!but) return setTimeout(arguments.callee, 1000);
	var params = document.location.hash.replace("#","").split(".");
	
	for (var i = 0; i <  params.length; i++)
		select_el(params[i]);
	
	(but.onclick = function(){
		var style = document.getElementById("filter");
		var style_text = [".home{display: none} .home",get_filter("style"), get_filter("wall_material"), get_filter("floors"),"{display: block}"].join("");
		if (typeof style.textContent == "string") 
			style.textContent = style_text;
		else 
			style.styleSheet.cssText = style_text;

		document.location.hash = [get_filter("style"), get_filter("wall_material"), get_filter("floors")].join("");
	})()
})()