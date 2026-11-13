const API_KEY = "iDMVRtPzFSar22XCH0kRP2m2HYzLhfNg";

window.addEventListener("DOMContentLoaded", () => {
  fetchGif();
  fetchSticker();
});

function searchClips() {
  searchGif();
  searchSticker();
}

// fetch gif
async function fetchGif() {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`,
    );
    let data = await response.json();
    console.log("fetch gif", data.data);

    appendData(data.data, ".giphy-list");
  } catch (error) {
    console.log(error);
  }
}

// fetch sticker
async function fetchSticker() {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/stickers/trending?api_key=${API_KEY}`,
    );
    let data = await response.json();
    console.log("fetch stickers", data.data);
    appendData(data.data, ".giphy-list");
  } catch (error) {
    console.log(error);
  }
}

// search gif
async function searchGif() {
  let searchInput = document.querySelector("#search-input").value;
  console.log(searchInput);
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchInput}`,
    );
    let data = await response.json();
    console.log("search gif", data.data);
    appendData(data.data, ".gif");
  } catch (error) {
    console.log(error);
  }
}

//search sticker
async function searchSticker() {
  let searchInput = document.querySelector("#search-input").value;

  try {
    let response = await fetch(
      `https://api.giphy.com/v1/stickers/search?api_key=${API_KEY}&q=${searchInput}`,
    );
    let data = await response.json();
    console.log("search stickers", data.data);
    appendData(data.data, ".sticker");
  } catch (error) {
    console.log(error);
  }
}

//add data to DOM
function appendData(data, selectedContainer) {
  let giphyList = document.querySelector(selectedContainer);
  document.querySelector(".giphy-list").innerHTML = "";
  document.querySelector(".gif").innerHTML = "";
  document.querySelector(".sticker").innerHTML = "";
  data.forEach((element) => {
    let divEle = document.createElement("div");
    divEle.className = "giphy-card";

    let imgEle = document.createElement("img");
    imgEle.setAttribute("src", element.images.original.url);

    divEle.append(imgEle);
    giphyList.append(divEle);
  });
}
