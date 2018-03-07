const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value
  const item = {
    text,
    done: false
  };

  items.push(item);
  populateList(items, itemList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type="checkbox" data-index=${i} id=${i} ${plate.done ? 'checked' : ''} />
        <label for="${i}">${plate.text}
      </li>
    `;
  }).join('');
}

function toggleDone(e) {
  console.log(e);
}

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);
populateList(items, itemList);