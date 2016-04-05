function uploadControl(){
	var uparea=document.getElementById("uparea"),
	image_url=document.getElementById("image-url");
	uparea.addEventListener("change",function(){
		image_url.value=uparea.value;
	})
}
function imagePreview(){
	var imgReader = new FileReader(),
	uparea=document.getElementById("uparea");
	imgReader.onload = function (imgReader) {
  		var image_preview=document.getElementById("image-preview");
  		image_preview.src = imgReader.target.result;
	};
	uparea.addEventListener("change",function(){
		loadImageFile();
	})
	function loadImageFile() {
	  if (document.getElementById("uparea").files.length === 0) { return; }
	  var file = document.getElementById("uparea").files[0];
	  imgReader.readAsDataURL(file);
	}
}
uploadControl();
imagePreview();