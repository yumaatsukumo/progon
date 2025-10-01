function openVideo(url) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("videoFrame").src = url;
}

function closeVideo() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("videoFrame").src = "";
}
