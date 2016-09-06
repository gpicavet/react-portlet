(function(util, $){
	console.log("1");
	$(document).ready(function(){
	console.log("2");
		$("body").on("click", ".react-portlet button", function(){
	console.log("3");
			$("#result").text(util.count());
		});	
	});	
})(util, jq);
