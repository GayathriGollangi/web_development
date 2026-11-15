document.addEventListener("DOMContentLoaded", () => {
  getData();
});

let getData = async () => {
  try {
    let response = await fetch("http://localhost:3000/posts");
    let data = await response.json();
    console.log(data);
    appendData(data);
  } catch (error) {
    console.log(error);
  }
};

function appendData(data) {
  console.log(data);
  let post_div = document.querySelector("#post");
  console.log(post_div);
  data.forEach((element) => {
    let divEle = document.createElement("div");

    // image element
    let imageEle = document.createElement("img");
    imageEle.src = element.images;

    let titleEle = document.createElement("p");
    titleEle.innerText = element.title;
    divEle.append(imageEle, titleEle);
    post_div.append(divEle);
  });
}
