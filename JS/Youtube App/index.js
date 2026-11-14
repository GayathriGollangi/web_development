const API_KEY = "AIzaSyAyFr1jk0r5zme1UHM5WcHTW4gHLKH1skc";
function searchVideos() {
  const searchInput = document.getElementById("search-input").value;
  console.log(searchInput);
  fetchData(searchInput);
}

// fetch data
async function fetchData(query) {
  try {
    let response = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&key=${API_KEY}`,
    );
    let data = await response.json();
    console.log(data.items);
    appendData(data.items);
  } catch (error) {
    console.log(error);
  }
}

// Render data to DOM
function appendData(array) {
  let videoContainer = document.querySelector(".video-list");
  //making the container empty
  videoContainer.innerHTML = "";
  array.forEach((element) => {
    const {
      snippet,
      id: { videoId },
    } = element;

    //render image data
    let url = snippet.thumbnails.high.url;
    let title = snippet.title;
    let divEle = document.createElement("div");

    let imgEle = document.createElement("img");
    imgEle.setAttribute("src", url);

    let titleEle = document.createElement("h3");
    titleEle.innerText = title;

    divEle.append(imgEle, titleEle);

    const data = {
      videoId,
      snippet,
    };
    divEle.addEventListener("click", () => {
      showVideo(data);
    });
    videoContainer.append(divEle);
  });
}

function showVideo(data) {
  //   console.log("clicked");
  window.location.href = "video.html";
  //   storing data in localstorage
  localStorage.setItem("data", JSON.stringify(data));
}
