const tables = [
  { id: 1, name: "table-1", total: 0, items: {} },
  { id: 2, name: "table-2", total: 0, items: {} },
  { id: 3, name: "table-3", total: 0, items: {} },
];

const menuItems = [
  { id: 1, name: "Biryani", price: 250, course: "main course" },
  { id: 2, name: "Paneer Butter Masala", price: 200, course: "main course" },
  { id: 3, name: "Ice Cream", price: 100, course: "dessert" },
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
    menuItem.append(itemName, itemPrice);

    menuContainer.append(menuItem);
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
  });
}
