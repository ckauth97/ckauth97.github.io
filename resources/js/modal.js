const site_content = {
	"mc-servers": {
		"title": "Minecraft Servers",
		"blurb": "Auto Management of MC Servers",
		"modal_content": {
			"header": "Minecraft Server Manager",
			"description": "A webserver enabling users to view the status of hosted minecraft servers and request server spinup for desired worlds. Besides just being a user interface, the background processes track and maintain the servers configurations and perform automatic backups.",
			"actions": [
				{
					"name": "Launch",
					"url": "https://minecraft.platform997.com"
				}
			]
		}
	},
	"flaptrack": {
		"title": "FlapTrack",
		"blurb": "A Flapdooles Icecream Flavor Tracker",
		"modal_content": {
			"header": "Flaptrack",
			"description": "A webapp that allows enrolled users to view icecream flavors, submit which ones they have tried, and see stats based on others' reviews.",
			"actions": [
				{
					"name": "Launch",
					"url": "https://flaptrack.platform997.com"
				}
			]
		}
	}
};

// Site Content
var content = "";
for (let p in site_content) {
	content += '<div class="box" id="' + p + '" onClick="launchModal(this)">';
	content += '<div class="title">';
	content += '<h3>' + site_content[p].title + '</h3>';
	content += '<p>' + site_content[p].blurb + '</p>';
	content += '</div></div>';
}



// On Body Ready
$(function () {
	// Load Content List
	$('#content-list').html(content);

	// Associate Modals
	var modals = document.getElementsByClassName("modal");
	var span = document.getElementById("modal-close");

	span.onclick = function () {
		for (let m of modals) {
			m.style.display = "none";
		}
	}

});


function launchModal(el) {

	let content = site_content[el.id].modal_content;

	$('#modal-header').text(content.header);
	$('#modal-description').text(content.description);


	let actions = "";

	for (let a of content.actions) {
		actions += '<a class="button" href="' + a.url + '" target="_blank">' + a.name + '</a>';
	}

	$('#modal-actions').html(actions);

	$('#project-modal').show();

}