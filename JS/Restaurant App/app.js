const tables = [
  { id: "table1", name: "table-1", total: 0, items: {} },
  { id: "table2", name: "table-2", total: 0, items: {} },
  { id: "table3", name: "table-3", total: 0, items: {} },
];

const menuItems = [
  { id: "item1", name: "Biryani", price: 250, course: "main course" },
  {
    id: "item2",
    name: "Paneer Butter Masala",
    price: 200,
    course: "main course",
  },
  { id: "item3", name: "Ice Cream", price: 100, course: "dessert" },
];

document.addEventListener("DOMContentLoaded", () => {
  renderTable();
  renderMenuItems();
});

function renderMenuItems() {
  let menuContainer = document.querySelector("#menucontainer");
  menuItems.forEach((item) => {
    let menuItem = document.createElement("div");

    menuItem.id = item.id;
    let itemName = document.createElement("h3");
    itemName.innerHTML = item.name;

    let itemPrice = document.createElement("p");
    itemPrice.innerText = item.price;

    menuItem.className = "menu-items";
    menuItem.draggable = true;
    menuItem.dataset.name = item.name;
    menuItem.append(itemName, itemPrice);

    menuContainer.append(menuItem);
    menuItem.addEventListener("dragstart", dragstart);
  });
}

function renderTable() {
  let tableContainer = document.querySelector("#tablecontainer");
  tables.forEach((item) => {
    let tableCard = document.createElement("div");

    tableCard.id = item.id;
    let tableName = document.createElement("h3");
    tableName.innerHTML = item.name;

    let tableTotal = document.createElement("p");
    tableTotal.innerText = "Total: " + item.total;

    let tableItems = document.createElement("p");
    tableItems.innerText = "items";
    tableCard.className = "table-card";

    tableCard.append(tableName, tableTotal, tableItems);

    tableContainer.append(tableCard);
    tableCard.addEventListener("dragover", dragover);
    tableCard.addEventListener("drop", dropItem);
  });
}

function dragstart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);
}

function dragover(e) {
  e.preventDefault(); // allow drop
}

function dropItem(e) {
  console.log("dropped");
  e.preventDefault();
  const itemId = e.dataTransfer.getData("text");
  const itemElement = document.getElementById(itemId);
  const itemName = itemElement.dataset.name;
  const itemPrice = parseFloat(itemElement.dataset.price);
  const tableId = e.target.id;
}
