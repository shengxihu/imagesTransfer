function uploadControl(){
	var uparea=document.getElementById("uparea"),
	image_url=document.getElementById("image-url");
	uparea.addEventListener("change",function(){
		image_url.value=uparea.value;
	})
}
uploadControl();