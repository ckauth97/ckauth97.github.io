$(document).ready(function(){
	//Inital Sets
	update_IPs();

	//Timer Sets
	setInterval(function(){
		update_IPs();

	}, 5000);
});

function update_IPs(){
	$.post("/util/auto.php", {type: 'ip'}, function(data){
	  	if(data.length>0){
	  		document.getElementById("ip_list").innerHTML = data;
		}
	});
}
