// Display default movies when page loads
window.addEventListener("DOMContentLoaded", () => {
  fetchMovies("Avengers");
});

// search movie
function searchMovie() {
  let searchInput = document.querySelector("#search-input").value;

  //   console.log(searchInput);
  fetchMovies(searchInput);
}

//fetching data from api
async function fetchMovies(searchInput) {
  try {
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=96030101&s=${searchInput}`,
    );
    let data = await response.json();
    appendMovies(data);
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// append data to page
function appendMovies(data) {
  let moviesList = document.querySelector(".movies-list");

  //clearing the old data
  moviesList.innerHTML = "";

  // checking data is present or not
  if (data.Search) {
    // if present iteration over the data
    data.Search.forEach((element) => {
      let divEle = document.createElement("div");

      //image
      let imgEle = document.createElement("img");
      imgEle.setAttribute("src", element.Poster);

      //title
      let titleEle = document.createElement("h3");
      titleEle.innerText = `Title: ${element.Title}`;

      //rating
      let yearEle = document.createElement("p");
      yearEle.innerText = `Year: ${element.Year}`;

      divEle.append(imgEle, titleEle, yearEle);
      moviesList.append(divEle);
    });
  } else {
    moviesList.innerHTML = "No movies found";
  }
}
