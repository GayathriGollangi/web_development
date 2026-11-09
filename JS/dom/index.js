document.querySelector("form").addEventListener("submit", todoList);
function todoList() {
  event.preventDefault();
  let itemName = document.querySelector("#name").value;
  let itemQuantity = document.querySelector("#quantity").value;
  let priority = document.querySelector("#priority").value;

  let tbody = document.querySelector("tbody");
  let tr = document.createElement("tr");
  let td1 = document.createElement("td");
  td1.innerText = itemName;
  let td2 = document.createElement("td");
  td2.innerText = itemQuantity;
  let td3 = document.createElement("td");
  td3.innerText = priority;

  tr.append(td1, td2, td3);
  tbody.append(tr);

  document.querySelector("#name").value = "";
  document.querySelector("#quantity").value = "";
}
