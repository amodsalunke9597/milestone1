const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
const list = document.getElementById("list");
const addBtn = document.getElementById("addBtn");
let currentItem = 0;

function addItem() {
  if (currentItem < items.length) {
    const li = document.createElement("li");
    li.textContent = items[currentItem];
    list.appendChild(li);
    currentItem++;
  } else {
    const message = document.createElement("p");
    message.textContent = "All items have been added.";
    message.style.color = "green";
    list.appendChild(message);
    addBtn.disabled = true;
  }
}

addBtn.addEventListener("click", addItem);
