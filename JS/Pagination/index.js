const container = document.querySelector(".container");
const contentContainer = document.querySelector(".content");

document.addEventListener("DOMContentLoaded", (event) => {
  fetchData();
});

// utility function
async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data = await response.json();
    console.log(data);
    contentContainer.innerHTML = null;
    const cardList = appendData(data);
    container.append(cardList);
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
  const { title, body, userId } = element;
  //   console.log(title, body);
  const card = document.createElement("div");
  card.classList.add("card");

  card.setAttribute("data-id", userId);
  const cardTitle = document.createElement("h3");
  cardTitle.innerText = title;
  const cardBody = document.createElement("p");
  cardBody.innerText = body;
  card.append(cardTitle, cardBody);
  return card;
}
