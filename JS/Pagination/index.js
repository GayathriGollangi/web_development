const container = document.querySelector(".container");
const contentContainer = document.querySelector(".content");
const paginationWrapper = document.querySelector(".pagination-wrapper");

document.addEventListener("DOMContentLoaded", (event) => {
  fetchData(1);
});

// utility function
async function fetchData(pageNum) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${pageNum}`,
    );
    paginationWrapper.innerHTML = null;
    const totalPosts = response.headers.get("X-Total-Count");
    const btns = Math.ceil(totalPosts / 10);
    for (let i = 1; i <= btns; i++) {
      paginationWrapper.append(getAsButton(i, i));
    }
    let data = await response.json();
    console.log(data);
    contentContainer.innerHTML = "";
    const cardList = appendData(data);

    contentContainer.append(cardList);
  } catch (error) {
    console.log(error);
  }
}

function appendData(array) {
  let cardList = document.createElement("div");
  cardList.classList.add("card-list");
  array.forEach((element) => {
    const card = appendCard(element);
    cardList.append(card);
  });
  return cardList;
}

function appendCard(element) {
  const { title, body, id } = element;
  //   console.log(title, body);
  const card = document.createElement("div");
  card.classList.add("card");

  card.setAttribute("data-id", id);
  const cardId = document.createElement("p");
  cardId.innerText = id;
  const cardTitle = document.createElement("h3");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = title;
  const cardBody = document.createElement("p");
  cardBody.classList.add("card-description");
  cardBody.innerText = body;
  card.append(cardId, cardTitle, cardBody);
  return card;
}

function getAsButton(text, id) {
  let button = document.createElement("button");
  button.innerText = text;
  button.setAttribute("data-id", id);
  button.classList.add("btn");
  button.addEventListener("click", function (e) {
    fetchData(e.target.dataset.id);
    console.log(e.target.dataset.id);
  });
  return button;
}
