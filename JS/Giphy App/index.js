const API_KEY = "iDMVRtPzFSar22XCH0kRP2m2HYzLhfNg";

//data rendered
window.addEventListener("DOMContentLoaded", () => {
  fetchGif();
  fetchSticker();
});

function searchClips() {
  searchGif();
  searchSticker();
}

// fetch Data
async function fetchData(url, selectedContainer) {
  try {
    let response = await fetch(url);
    let data = await response.json();

    console.log(data.data);

    appendData(data.data, selectedContainer);
  } catch (error) {
    console.log(error);
  }
}

// fetch gif
async function fetchGif() {
  fetchData(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`,
    ".giphy-list",
  );
}

// fetch sticker
async function fetchSticker() {
  fetchData(
    `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}`,
    ".giphy-list",
  );
}

// search gif
async function searchGif() {
  let searchInput = document.querySelector("#search-input").value;
  document.querySelector(".gif").innerHTML = "";

  fetchData(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}`,
    ".gif",
  );
}

//search sticker
async function searchSticker() {
  let searchInput = document.querySelector("#search-input").value;
  document.querySelector(".sticker").innerHTML = "";

  fetchData(
    `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchInput}`,
    ".sticker",
  );
}

//add data to DOM
function appendData(data, selectedContainer) {
  let giphyList = document.querySelector(selectedContainer);
  //   document.querySelector(".giphy-list").innerHTML = "";
  data.forEach((element) => {
    let divEle = document.createElement("div");
    divEle.className = "giphy-card";

    let imgEle = document.createElement("img");
    imgEle.setAttribute("src", element.images.original.url);

    divEle.append(imgEle);
    giphyList.append(divEle);
  });
}
