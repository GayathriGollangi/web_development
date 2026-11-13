const API_KEY = "iDMVRtPzFSar22XCH0kRP2m2HYzLhfNg";

window.addEventListener("DOMContentLoaded", () => {
  fetchGiphy();
});

// fetchGiphy();
async function fetchGiphy() {
  try {
    let response = await fetch(
      `https://api.giphy.com/v1/gifs/trending?apikey=${API_KEY}`,
    );
    let data = await response.json();
    console.log(data.data);
    appendData(data.data);
  } catch (error) {
    console.log(error);
  }
}

function appendData(data) {
  console.log(data);
  let giphyList = document.querySelector(".giphy-list");
  giphyList.innerHTML = "";
  data.forEach((element) => {
    let divEle = document.createElement("div");
    divEle.className = "giphy-card";

    let imgEle = document.createElement("img");
    imgEle.setAttribute("src", element.images.original.url);

    divEle.append(imgEle);
    giphyList.append(divEle);
  });
}
