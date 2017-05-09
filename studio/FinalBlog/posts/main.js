var post = document.getElementById('posts');

var link = document.getElementById('hidden');

post.addEventListener("mouseover", showLinks);
posts.addEventListener("mouseleave", hideLinks);

function showLinks() {
	link.style.display = "block";
}
function hideLinks() {
	link.style.display = "none";
}

setTimeout(function hideLinks() {
	link.style.display = "none";
}, 5000);