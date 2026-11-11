// table data
const tables = [
  { id: "table1", name: "table-1", total: 0, items: {} },
  { id: "table2", name: "table-2", total: 0, items: {} },
  { id: "table3", name: "table-3", total: 0, items: {} },
];

// menu data
const menuItems = [
  { id: "item1", name: "Biryani", price: 250, type: "main course" },
  {
    id: "item2",
    name: "Paneer Butter Masala",
    price: 200,
    type: "main course",
  },
  { id: "item3", name: "Ice Cream", price: 100, type: "dessert" },
];

// event triggers when DOM renders
document.addEventListener("DOMContentLoaded", () => {
  renderTable(); //renderTable
  renderMenuItems(); //render menu
});

// render menu data
function renderMenuItems() {
  let menuContainer = document.querySelector("#menucontainer");
  //replace the existing data
  menuContainer.innerHTML = "";
  menuItems.forEach((item) => {
    // creating div
    let menuItem = document.createElement("div");

    //assigning id
    menuItem.id = item.id;
    let itemName = document.createElement("h3");
    itemName.innerHTML = item.name;

    let itemPrice = document.createElement("p");
    itemPrice.innerText = item.price;

    let itemType = document.createElement("p");
    itemType.innerText = item.type;

    menuItem.className = "menu-items";

    // enable drag feature
    menuItem.draggable = true;

    //we store the content in the tags as attributes
    // to store the values dataset is used
    menuItem.dataset.name = item.name;
    menuItem.dataset.type = item.type;
    menuItem.dataset.price = item.price;

    //adding elements to menuItem
    menuItem.append(itemName, itemPrice, itemType);

    // adding menuItem to menu container
    menuContainer.append(menuItem);

    // event trigger when drag starts
    menuItem.addEventListener("dragstart", dragstart);
  });
}

function renderTable() {
  let tableContainer = document.querySelector("#tablecontainer");

  //make the container empty better for search results
  tableContainer.innerHTML = "";

  //iteration over table
  tables.forEach((item) => {
    let tableCard = document.createElement("div");

    tableCard.id = item.id;

    tableCard.className = "table-card";

    tableCard.innerHTML = `
    <h3>${item.name}</h3>
    <p>Total: ${item.total.toFixed(2)}</p>
    <p>Total: ${Object.values(item.items).reduce((a, b) => a + b.quantity, 0)}</p>
    `;

    tableContainer.append(tableCard);
    tableCard.addEventListener("click", () => showOrderDetails(item.id));

    // writing this on dropped location
    // used to enable drop event
    tableCard.addEventListener("dragover", dragover);

    // handle moving the draggable element from the original container to the drop zone.
    tableCard.addEventListener("drop", dropItem);
  });
}

function showOrderDetails(tableId) {
  //return the element
  const table = tables.find((table) => table.id === tableId);

  const modalBody = document.getElementById("modal-body");
  Object.keys(table.items).forEach((itemName) => {
    const item = table.items[itemName];
    const itemPrice = item.price; // price

    modalBody.innerHTML =
      modalBody.innerHTML +
      `
      <div class="order-item">
      <p>${itemName}:
      <input type="number" value="${item.quantity}" min=0 onchange="updateItemQuantity(${tableId},${itemName},{this.value})"/>
      x $ ${itemPrice.toFixed(2)}
      </p>
           <button onclick="deleteItem(${tableId},${itemName})">Remove</button>
      </div>
    `;
  }); //[biryani,pizza]
  document.querySelector("#order-modal").style.display = "flex";
}

//this event stores the reference of the data dragged
function dragstart(e) {
  console.log(e.target.id);
  e.dataTransfer.setData("text/plain", e.target.id);
  // dataTransfer will store the element value
  // setData allows to store data in DOM
  //1st argument - type of element key for the value stored
}

function dragover(e) {
  e.preventDefault(); // allow drop
}

function dropItem(e) {
  console.log("dropped");

  // to stop default behavior
  e.preventDefault();

  // accessing the data from DOM
  const itemId = e.dataTransfer.getData("text");

  //getting menu data from menu id
  const itemElement = document.getElementById(itemId);
  const itemName = itemElement.dataset.name;
  const itemPrice = parseFloat(itemElement.dataset.price);

  // getting table id
  const tableId = e.target.id;

  if (itemName && itemPrice && tables.find((table) => table.id === tableId)) {
    addItemtoTable(tableId, itemName, itemPrice);
  }
}
function addItemtoTable(tableId, itemName, itemPrice) {
  const table = tables.find((table) => table.id === tableId);

  //checking whether item is present or not if not it will create
  //  { id: "table1", name: "table-1", total: 0, items: {} }
  if (!table.items[itemName]) {
    table.items[itemName] = { quantity: 0, price: itemPrice };
  }
  console.log(tables);
  //if there it will increase the quantity
  table.items[itemName].quantity++; //quantity =1 price =200
  table.total = table.total + itemPrice; // 0+200

  // update table card UI
  let tableCard = document.getElementById(tableId);
  tableCard.querySelector("p").textContent = `Total: ${table.total.toFixed(2)}`;
  tableCard.querySelector("p:nth-of-type(2)").innerText =
    `Items: ${Object.values(table.items).reduce((a, b) => a + b.quantity, 0)}`;
}

// close modal
document.querySelector(".close-button").addEventListener("click", () => {
  document.getElementById("order-modal").style.display = "none";
});
