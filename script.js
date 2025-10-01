function openVideo(url) {
  document.getElementById("modal").style.display = "flex";
  document.getElementById("videoFrame").src = url;
}

function closeVideo() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("videoFrame").src = "";
}
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #141414;
  color: #fff;
}

.navbar {
  background: #000;
  padding: 15px;
}

.logo {
  color: #e50914;
  margin: 0;
}

h2 {
  margin: 20px;
}

.movie-container {
  display: flex;
  flex-wrap: wrap; /* bën rresht të ri pas çdo 4 filmash */
  gap: 15px;
  padding: 0 20px 20px;
}

.movie-box {
  width: calc(25% - 15px); /* 4 filma në një rresht */
  cursor: pointer;
  text-align: center;
}

.movie-box img {
  width: 100%;
  border-radius: 8px;
  transition: transform 0.3s;
}

.movie-box img:hover {
  transform: scale(1.05);
}

.movie-title {
  margin-top: 5px;
  font-size: 0.9rem;
}

/* Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.8);
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  width: 80%;
  max-width: 900px;
}

.modal-content iframe {
  width: 100%;
  height: 500px;
}

.close {
  position: absolute;
  top: -40px;
  right: 0;
  font-size: 2rem;
  cursor: pointer;
  color: white;
}


