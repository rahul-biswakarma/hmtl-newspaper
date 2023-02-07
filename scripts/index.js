function flipPageForward(pageNo) {
	console.log("flip forward");
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo - 1}`).style.display = "none";
}

function flipPageBackward(pageNo) {
	document.getElementById(`page-${pageNo}`).style.display = "block";
	document.getElementById(`page-${pageNo + 1}`).style.display = "none";
}

const pageFlip = new PageFlip(document.getElementById("example"), {
	// options here
});

pageFlip.loadFromHTML(document.querySelectorAll(".page"));