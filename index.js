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
function imageTransfer(){
	var drawing=document.getElementById("image-out"),
	context=drawing.getContext("2d"),
	image=document.images[0],
	image_data,
	data,
	i,
	len,
	average,
	red,
	green,
	blue,
	alpha;
	context.drawImage(image,0,0,image.width,image.height);
	image_data=context.getImageData(0,0,image.width,image.height);
	data=image_data.data;
	for (var i = 0,len=data.length; i < len; i+=4) {
		red=data[i];
		green=data[i+1];
		blue=data[i+2];
		alpha=data[i+3];
		average=Math.floor((red+green+blue)/3);
		data[i]=average;
		data[i+1]=average;
		data[i+2]=average;
	};
	image_data.data=data;
	context.putImageData(image_data,0,0);
}
window.onload=function(){
	uploadControl();
	imagePreview();
	var bt=document.getElementById("bt");
	bt.onclick=imageTransfer;
}