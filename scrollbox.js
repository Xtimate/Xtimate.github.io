var btn_process = document.getElementById('creation-process');
var lightbox = document.getElementById('lightbox');
var x = document.getElementById('x');

btn_process.onclick = function () {
	lightbox.style.display = 'block';
};

x.onclick = function () {
	lightbox.style.display = 'none';
}