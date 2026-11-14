// data render
window.addEventListener("DOMContentLoaded", () => {
  showClickedVideo();
});
// data render to DOM
function showClickedVideo() {
  let video_div = document.querySelector(".video");

  let video_data = JSON.parse(localStorage.getItem("data"));
  console.log(video_data);

  video_div.innerHTML = "";

  let iframeELe = document.createElement("iframe");

  iframeELe.src = `https://www.youtube.com/embed/${video_data.videoId}`;
  console.log(iframeELe.src);
  iframeELe.height = "500px";
  iframeELe.width = "100%";
  iframeELe.setAttribute("allowfullscreen", true);
  video_div.append(iframeELe);
}
